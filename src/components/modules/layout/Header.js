import React from 'react';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

import Dialog from '../modal/Dialog';
import {toggleDialog} from "../../../features/modal/dialogSlice";
import {useDispatch} from "react-redux";

import Button from '../../atoms/common/Button';

function Header() {

    /* Dialog example */
    const dispatch = useDispatch();
    const DialogBtn = (
        <Button
            type="iconLabel"
            variant="contained"
            color="primary"
            size="large"
            icon="add"
            label="custom dialog button"
            onClick={() => dispatch(toggleDialog(true))}
        />
    );
    const DialogHeader = (
        <h1>Custom Header</h1>
    );
    const DialogBody = (
        <>
            <p>Custom Body</p>
            <p>Custom Body</p>
            <p>Custom Body</p>
        </>
    );
    const DialogFooter = (
        <>
            <Button
                type="icon"
                size="small"
                color="primary"
                icon="add"
                onClick={() => dispatch(toggleDialog(false))}
            />

            <Button
                type="icon"
                size="small"
                color="secondary"
                icon="remove"
                onClick={() => alert(false)}
            />

            <Button
                type="icon"
                size="small"
                color="primary"
                icon="add"
                onClick={() => dispatch(toggleDialog(false))}
            />
        </>
    );

    const dialogOptions = {
        dialogBtnText: 'My dialogBtnText',
        title: 'My title',
        // headerStyle: {},
        // headerClass: '',
        noHeader: true,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        // bodyStyle: {},
        // bodyClass: '',
        showConfirm: true,
        confirmText: 'My confirm',
        onConfirmClick: () => {alert('onConfirmClick!')},
        showCancel: true,
        cancelText: 'My cancel',
        onCancelClick: () => {alert('onCancelClick!')},
        // footerStyle: '',
        // footerClass: '',
        backdropClose: true,
        onClose: () => {alert('onClose!')},
    };
    /* // Dialog example */

    return (
        <div>
            <Typography>Typography 테마 적용</Typography>
            <Dialog
                customComponents={{
                  dialogBtn: DialogBtn,
                  header: DialogHeader,
                  body: DialogBody,
                  footer: DialogFooter
                }}
            />
            <Dialog
                dialogBtnText={dialogOptions.dialogBtnText}
                title={dialogOptions.title}
                noHeader={dialogOptions.noHeader}
                content={dialogOptions.content}
                showConfirm={dialogOptions.showConfirm}
                confirmText={dialogOptions.confirmText}
                onConfirmClick={dialogOptions.onConfirmClick}
                showCancel={dialogOptions.showCancel}
                cancelText={dialogOptions.cancelText}
                onCancelClick={dialogOptions.onCancelClick}
                backdropClose={dialogOptions.backdropClose}
                onClose={dialogOptions.onClose}
            />
            <ul>
                <li>
                    <NavLink
                        exact
                        to="/"
                        activeStyle={{ background: 'yellow' }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeStyle={{ background: 'yellow' }}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/etc" activeStyle={{ background: 'yellow' }}>
                        Etc
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;
