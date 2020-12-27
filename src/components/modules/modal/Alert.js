import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectOpen, toggleAlert } from "../../../features/modal/alertSlice";
import { Modal, Fade, Backdrop } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';

function Alert(props) {
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

    // TODO: husky 로 commit 시 prettier 적용

    // TODO: 버튼 분기 처리
    // Component 가 있는 경우 Component 로 & 없는 경우 btnTxt 로

    return (
        <>
            <button type="button" onClick={() => dispatch(toggleAlert(true))}>
                {/*Open Alert*/}
                {props.btnTxt}
            </button>

            {props.btn}

            <Modal
                open={open}
                onClose={() => dispatch(toggleAlert(false))}
                BackdropComponent={Backdrop}
                className={classes.modal}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Transition modal</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p>
                        <button onClick={() => dispatch(toggleAlert(false))}>TEST CLOSE</button>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}

// TODO: alert props 타입 체크
Alert.propTypes = {
    // btnTxt: PropTypes.string.isRequired,
    // color: PropTypes.string,
    // title: PropTypes.string,
    // addClassName: PropTypes.string,
};

export default Alert;
