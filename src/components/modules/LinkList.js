import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { selectList, getLinkList } from '../../features/link/linkSlice';
import Liked from '../atoms/Liked';
import Linked from '../atoms/Linked';
import { setEllipsis } from '../../utils/common';

function LinkItem({ title, link_cnt, like_cnt, content }) {
    return (
        <ListItem alignItems="flex-start">
            <div>
                <Liked count={like_cnt} isLiked />
                <Linked count={link_cnt} isLinked />
            </div>

            <ListItemAvatar>
                <Avatar
                    alt="Remy Sharp"
                    src="https://randomuser.me/api/portraits/women/79.jpg"
                />
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={
                    <>
                        <Typography component="span">writer name</Typography>—
                        {setEllipsis(content, 70, '...')}
                    </>
                }
            />
        </ListItem>
    );
}

function LinkList({ size }) {
    const list = useSelector(selectList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLinkList({ size }));
    }, [dispatch, size]);

    return (
        <List>
            {list.map((item) => (
                <Fragment key={item.id}>
                    <Divider component="li" />
                    <LinkItem {...item} />
                </Fragment>
            ))}
        </List>
    );
}

LinkList.propTypes = {
    size: PropTypes.number.isRequired,
};

LinkItem.propTypes = {
    title: PropTypes.string,
    like_cnt: PropTypes.number,
    link_cnt: PropTypes.number,
    content: PropTypes.string,
};

LinkItem.defaultProps = {
    title: '',
    like_cnt: 0,
    link_cnt: 0,
    content: '',
};

export default LinkList;
