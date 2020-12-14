import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
    selectOpen,
    toggleAlert
} from "../../../features/modal/alertSlice";
import {
    Modal,
    Fade,
    Backdrop
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

function Alert() {
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

    return (
        <>
            <button type="button" onClick={() => dispatch(toggleAlert(true))}>
                Open Alert
            </button>
            <Modal
                open={open}
                onClose={() => dispatch(toggleAlert(false))}
                BackdropComponent={Backdrop}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Transition modal</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p>
                        <button>TEST CLOSE</button>
                    </div>
                </Fade>
            </Modal>
        </>
    );
}

export default Alert;
