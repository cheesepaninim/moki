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
    const modalId1 = new Date().getTime() + ''
    const modalId2 = Number(modalId1) + 1 + ''

    const DialogBtn = (
        <Button
            type="iconLabel"
            variant="contained"
            color="primary"
            size="large"
            icon="add"
            label="custom dialog button"
            onClick={() => dispatch(toggleDialog({ id: modalId1, show: true }))}
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
                onClick={() => dispatch(toggleDialog({ id: modalId1, show: false }))}
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
                onClick={() => dispatch(toggleDialog({ id: modalId1, show: false }))}
            />
        </>
    );

    const dialogOptions = {
        dialogBtnText: 'My dialogBtnText',
        title: 'My title',
        noHeader: true,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        buttons: [
          {text: 'btn1', onClick: () => dispatch(toggleDialog({ id: modalId2, show: false })) },
          {text: 'btn2', onClick: () => dispatch(toggleDialog({ id: modalId2, show: false })) },
          {text: 'btn3', onClick: () => dispatch(toggleDialog({ id: modalId2, show: false })) }
        ],
        backdropClose: true,
        onClose: () => {alert('onClose!')},
    };
    /* // Dialog example */

    return (
        <div>
            <Typography>Typography 테마 적용</Typography>
            <Dialog
                id={modalId1}
                customComponents={{
                  dialogBtn: DialogBtn,
                  header: DialogHeader,
                  body: DialogBody,
                  footer: DialogFooter
                }}
            />
            <Dialog
                id={modalId2}
                dialogBtnText={dialogOptions.dialogBtnText}
                title={dialogOptions.title}
                noHeader={dialogOptions.noHeader}
                content={dialogOptions.content}
                buttons={dialogOptions.buttons}
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
