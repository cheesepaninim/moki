import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from './common/Button';

const useStyles = makeStyles(() => ({
    labelLinked: {
        // color: lightBlue[900],
    },
}));

function Linked({ size, count, isLinked, onClick }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button
                type="iconLabel"
                buttonClasses={{
                    label: isLinked ? classes.labelLinked : {},
                }}
                variant="text"
                size={size}
                icon={isLinked ? 'link' : 'link_off'}
                iconLocation="start"
                label={`${count}`}
                onClick={onClick}
            />
        </div>
    );
}

Linked.propTypes = {
    size: PropTypes.string,
    count: PropTypes.number,
    isLinked: PropTypes.bool,
    onClick: PropTypes.func,
};

Linked.defaultProps = {
    size: 'medium',
    count: 0,
    isLinked: false,
    onClick(e) {
        e.preventDefault();
    },
};

export default Linked;
