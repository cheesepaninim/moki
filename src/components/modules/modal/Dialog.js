import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectOpen, toggleDialog } from "../../../features/modal/dialogSlice";
import { Modal, Fade, Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import Button from '../../atoms/common/Button';

Dialog.propTypes = {
    customComponents: PropTypes.object,
    dialogBtnText: PropTypes.string,
    dialogBtnStyle: PropTypes.object,
    title: PropTypes.string,
    headerStyle: PropTypes.object,
    headerClass: PropTypes.string,
    noHeader: PropTypes.bool,
    content: PropTypes.string,
    bodyStyle: PropTypes.object,
    bodyClass: PropTypes.string,
    showConfirm: PropTypes.bool,
    confirmText: PropTypes.string,
    onConfirmClick: PropTypes.func,
    showCancel: PropTypes.bool,
    cancelText: PropTypes.string,
    onCancelClick: PropTypes.func,
    footerStyle: PropTypes.object,
    footerClass: PropTypes.string,
    backdropClose: PropTypes.bool,
    onClose: PropTypes.func
};

Dialog.defaultProps = {
    customComponents: {},
    dialogBtnStyle: {},
    headerStyle: {},
    noHeader: false,
    bodyStyle: {},
    footerStyle: {},
    showConfirm: true,
    showCancel: true,
    backdropClose: true
};

function Dialog({
    customComponents,
    dialogBtnText,
    title, headerStyle, headerClass, noHeader,
    content, bodyStyle, bodyClass,
    showConfirm, confirmText, onConfirmClick,
    showCancel, cancelText, onCancelClick,
    footerStyle, footerClass,
    backdropClose,
    onClose
}) {
    /** Dialog Props list
     *
     *  @param {Object} customComponents *prior to other props
     *  {
     *    {Component} dialogBtn - onClick = {() => dispatch(toggleDialog(true))}
     *    {Component} header
     *    {Component} body
     *    {Component} footer
     *  }
     *
     *  @param {String} dialogBtnText
     *
     *  @param {String} title
     *  @param {Object} headerStyle
     *  @param {String} headerClass
     *  @param {Boolean} noHeader (default : false)
     *
     *  @param {String} content
     *  @param {Object} bodyStyle
     *  @param {String} bodyClass
     *
     *  @param {Boolean} showConfirm (default : true)
     *  @param {String} confirmText
     *  @param {Function} onConfirmClick
     *
     *  @param {Boolean} showCancel (default : true)
     *  @param {String} cancelText
     *  @param {Function} onCancelClick
     *
     *  @param {Object} footerStyle
     *  @param {String} footerClass
     *
     *  @param {Boolean} backdropClose (default : true)
     *  @param {Function} onClose
     */

    const open = useSelector(selectOpen);
    const dispatch = useDispatch();

    const useStyles = makeStyles(theme => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();

    /* Dialog open */
    const DialogBtn = () => {
        const DefaultBtn = (
            <Button
                type="text"
                color="primary"
                size="medium"
                label={dialogBtnText || 'Dialog'}
                onClick={() => dispatch(toggleDialog(true))}
            />
        );

        return customComponents.dialogBtn || DefaultBtn
    };

    /* Dialog header */
    const Header = () => {
        const DefaultHeader = (
            <h2
                id="transition-modal-title"
                style={headerStyle}
                className={headerClass || ''}
            >
                {title}
            </h2>
        );

        return customComponents.header || DefaultHeader;
    };

    /* Dialog body */
    const Body = () => {
        const DefaultBody = (
            <p
                id="transition-modal-description"
                style={bodyStyle}
                className={bodyClass || ''}
            >
                {content}
            </p>
        );

        return customComponents.body || DefaultBody
    };

    /* Dialog footer */
    const Footer = () => {
        const DefaultFooter = (
            <div
                style={footerStyle}
                className={footerClass || ''}
            >
                {showCancel &&
                    <Button
                        type="text"
                        color="secondary"
                        size="medium"
                        label={cancelText}
                        onClick={() => {
                            onCancelClick && onCancelClick();
                            dispatch(toggleDialog(false));
                        }}
                    />
                }

                {showConfirm &&
                    <Button
                        type="text"
                        color="primary"
                        size="medium"
                        label={confirmText}
                        onClick={() => {
                            onConfirmClick && onConfirmClick();
                            dispatch(toggleDialog(false));
                        }}
                    />
                }
            </div>
        );

        return customComponents.footer || DefaultFooter
    };

    const backdropClick = () => {
        return backdropClose ? dispatch(toggleDialog(false)) : _ => {}
    };

    return (
        <>
            <DialogBtn />

            {/* https://material-ui.com/api/modal/ */}
            <Modal
                open={open}
                onClose={() => {
                    onClose && onClose()
                    dispatch(toggleDialog(false))
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{onClick: backdropClick }}
                className={classes.modal}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        {!noHeader &&
                            <Header />
                        }

                        <Body />

                        <Footer />
                    </div>
                </Fade>
            </Modal>
        </>
    );
}

export default Dialog;
