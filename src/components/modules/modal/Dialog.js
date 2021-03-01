import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectShow, toggleDialog } from "../../../features/modal/dialogSlice";
import { Modal, Fade, Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import Button from '../../atoms/common/Button';

Dialog.propTypes = {
    id: PropTypes.string.isRequired,
    customComponents: PropTypes.object,
    dialogBtnText: PropTypes.string,
    title: PropTypes.string,
    headerStyle: PropTypes.object,
    headerClass: PropTypes.string,
    noHeader: PropTypes.bool,
    content: PropTypes.string,
    bodyStyle: PropTypes.object,
    bodyClass: PropTypes.string,
    footerStyle: PropTypes.object,
    footerClass: PropTypes.string,
    backdropClose: PropTypes.bool,
    onClose: PropTypes.func
};

Dialog.defaultProps = {
    customComponents: {},
    headerStyle: {},
    noHeader: false,
    bodyStyle: {},
    footerStyle: {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center'
    },
    showConfirm: true,
    showCancel: true,
    backdropClose: true
};

function Dialog({
    id, customComponents,
    dialogBtnText,
    title, headerStyle, headerClass, noHeader,
    content, bodyStyle, bodyClass,
    buttons, footerStyle, footerClass,
    backdropClose,
    onClose
}) {
    /** Dialog Props list
     *
     *  @param {String} id (isRequired)
     *
     *  @param {Object} customComponents *prior to other props
     *  {
     *    {Component} dialogBtn - onClick = {() => dispatch(toggleDialog({ id: modalId1, show: false }))}
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
     *  @param {Array} buttons
     *  [
     *      {
     *          {String} text
     *          {Function} onClick
     *          ...button props (TODO:)
     *      }
     *  ]
     *  @param {Object} footerStyle
     *  @param {String} footerClass
     *
     *  @param {Boolean} showConfirm (default : true)   - deprecated
     *  @param {String} confirmText                     - deprecated
     *  @param {Function} onConfirmClick                - deprecated
     *
     *  @param {Boolean} showCancel (default : true)    - deprecated
     *  @param {String} cancelText                      - deprecated
     *  @param {Function} onCancelClick                 - deprecated
     *
     *  @param {Boolean} backdropClose (default : true)
     *  @param {Function} onClose
     */

    const show = useSelector(state => selectShow(state, id)) || false;
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
        /* TODO: 버튼 props 받아서 전달하도록 수정 */
        const DefaultBtn = (
            <Button
                type="text"
                color="primary"
                size="medium"
                label={dialogBtnText || 'Dialog'}
                onClick={() => dispatch(toggleDialog( {id, show: true }))}
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
                {/* TODO: 버튼 props 받아서 전달하도록 수정 */}
                {buttons && buttons.map((btn, idx) => (
                    <Button
                        key={`${id}_btn_${idx}`}
                        type="text"
                        color="primary"
                        size="medium"
                        label={btn.text}
                        onClick={() => {
                            btn.onClick && btn.onClick();
                        }}
                    />
                ))}
            </div>
        );

        return customComponents.footer || DefaultFooter
    };

    const backdropClick = () => {
        return backdropClose ? dispatch(toggleDialog({ id, show: false })) : _ => {}
    };

    return (
        <>
            <DialogBtn />

            {/* https://material-ui.com/api/modal/ */}
            <Modal
                open={show}
                onClose={() => {
                    onClose && onClose();
                    dispatch(toggleDialog({ id, show: false }));
                }}
                BackdropComponent={Backdrop}
                BackdropProps={{onClick: backdropClick }}
                className={classes.modal}
            >
                <Fade in={show}>
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
