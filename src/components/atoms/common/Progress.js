import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

/**
 * Progress 설정
 *
 * type : circular, linear
 * color : inherit, primary, secondary
 * size : numbar 40(px)
 *
 * https://material-ui.com/components/progress/
 */
function Progress({ type, color, size }) {
    return (
        <>
            {type === 'circular' ? (
                <CircularProgress color={color} size={size} />
            ) : (
                <LinearProgress color={color} size={size} />
            )}
        </>
    );
}

Progress.propTypes = {
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
};

Progress.defaultProps = {
    color: 'primary',
    size: 40,
};

export default Progress;
