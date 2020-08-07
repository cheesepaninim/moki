import React from 'react';
import PropTypes from 'prop-types';

/**
 * Icon 설정
 * type :
 * addClassName
 *      size : md-18, md-24, md-36, md-48
 *      color : md-dark, md-dark md-inactive, md-light, md-inactive, orange600
 * https://google.github.io/material-design-icons/
 */
function Icon({ type, color, title, addClassName }) {
    return (
        <i
            title={title || null}
            className={`material-icons${
                addClassName ? ` ${addClassName}` : ''
            }`}
            style={{
                cursor: title ? 'help' : 'inherit',
            }}
        >
            <span style={{ color }}>{type}</span>
        </i>
    );
}

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    color: PropTypes.string,
    title: PropTypes.string,
    addClassName: PropTypes.string,
};

Icon.defaultProps = {
    color: '',
    title: '',
    addClassName: '',
};

export default Icon;
