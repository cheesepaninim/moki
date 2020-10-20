import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from './common/Button';

const useStyles = makeStyles(() => ({
    label: {
        // color: red[500],
    },
}));

function Liked({ size, count, isLiked, onClick }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button
                type="iconLabel"
                buttonClasses={
                    isLiked && {
                        label: classes.label,
                    }
                }
                variant="text"
                size={size}
                icon={isLiked ? 'favorite' : 'favorite_border'}
                iconLocation="start"
                label={`${count}`}
                onClick={onClick}
            />
        </div>
    );
}

Liked.propTypes = {
    size: PropTypes.string,
    count: PropTypes.number,
    isLiked: PropTypes.bool,
    onClick: PropTypes.func,
};

Liked.defaultProps = {
    size: 'medium',
    count: 0,
    isLiked: false,
    onClick(e) {
        e.preventDefault();
    },
};

export default Liked;
