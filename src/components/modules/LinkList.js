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
import { setEllipsis, removeTag } from '../../utils/common';

function LinkItem({ id, title, likeCnt, linkCnt, content, userimage }) {
    return (
        <ListItem alignItems="flex-start">
            <div>
                <Liked count={likeCnt} isLiked />
                <Linked count={linkCnt} isLinked />
            </div>

            <ListItemAvatar>
                <Avatar alt={id} src={userimage} />
            </ListItemAvatar>
            <ListItemText
                primary={title}
                secondary={
                    <>
                        <Typography component="span">{id}</Typography>—
                        {setEllipsis(removeTag(content), 70, '...')}
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
            {list.map((item, i) => (
                <Fragment key={item.id}>
                    {i ? <Divider component="li" /> : null}
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
    id: PropTypes.string,
    title: PropTypes.string,
    likeCnt: PropTypes.number,
    linkCnt: PropTypes.number,
    content: PropTypes.string,
    userimage: PropTypes.string,
};

LinkItem.defaultProps = {
    id: '',
    title: '',
    likeCnt: 0,
    linkCnt: 0,
    content: '',
    userimage: '',
};

export default LinkList;
