import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonCore } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Icon from './Icon';

const useStyles = makeStyles((theme) => ({
    button: {
        '&': {
            margin: theme.spacing(1),
        },
    },
}));

/**
 * Button 설정
 * 총 3가지 타입(text, icon+text, icon)
 *
 * type : text, iconLabel(icon+text)
 * variant : contained(박스형태), outlined(외곽선), text(문자만)
 * color : inherit, primary, secondary
 * size : large, medium, small
 * disabled : true, false
 * href : url
 * fullWidth : true, false
 * icon : icon type
 * iconLocation : start, end
 *
 * type : icon
 * color : inherit, primary, secondary
 * size : small, medium
 * disabled : true, false
 *
 * https://material-ui.com/components/buttons/
 */
function Button({
    type,
    buttonClasses,
    variant,
    color,
    size,
    disabled,
    href,
    fullWidth,
    icon,
    iconLocation,
    label,
    onClick,
}) {
    const isOnlyIcon = type === 'icon';
    const classes = useStyles();
    return (
        <div className={classes.button}>
            {isOnlyIcon ? (
                <IconButton
                    classes={buttonClasses}
                    color={color}
                    size={size}
                    disabled={disabled}
                    onClick={onClick}
                    aria-label={icon}
                >
                    <Icon type={icon} />
                </IconButton>
            ) : (
                <ButtonCore
                    variant={variant}
                    classes={buttonClasses}
                    color={color}
                    size={size}
                    disabled={disabled}
                    href={href}
                    fullWidth={fullWidth}
                    icon={icon}
                    startIcon={iconLocation === 'start' && <Icon type={icon} />}
                    endIcon={iconLocation === 'end' && <Icon type={icon} />}
                    onClick={onClick}
                >
                    {label}
                </ButtonCore>
            )}
        </div>
    );
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    buttonClasses: PropTypes.instanceOf(Object),
    variant: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    fullWidth: PropTypes.bool,
    icon: PropTypes.string,
    iconLocation: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    buttonClasses: null,
    variant: 'text',
    color: 'default',
    size: 'medium',
    disabled: false,
    href: null,
    fullWidth: false,
    icon: null,
    iconLocation: null,
    label: '',
};

export default Button;
