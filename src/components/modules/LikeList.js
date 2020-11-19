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
import { selectList, getLikeList } from '../../features/like/likeSlice';
import Liked from '../atoms/Liked';
import Linked from '../atoms/Linked';
import { setEllipsis, removeTag } from '../../utils/common';

function LikeItem({ title, like_cnt, link_cnt, content }) {
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
                        {setEllipsis(removeTag(content), 70, '...')}
                    </>
                }
            />
        </ListItem>
    );
}

function LikeList({ size }) {
    const list = useSelector(selectList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLikeList({ size }));
    }, [dispatch, size]);

    return (
        <List>
            {list.map((item) => (
                <Fragment key={item.id}>
                    <Divider component="li" />
                    <LikeItem {...item} />
                </Fragment>
            ))}
        </List>
    );
}

LikeList.propTypes = {
    size: PropTypes.number.isRequired,
};

LikeItem.propTypes = {
    title: PropTypes.string,
    like_cnt: PropTypes.number,
    link_cnt: PropTypes.number,
    content: PropTypes.string,
};

LikeItem.defaultProps = {
    title: '',
    like_cnt: 0,
    link_cnt: 0,
    content: '',
};

export default LikeList;
