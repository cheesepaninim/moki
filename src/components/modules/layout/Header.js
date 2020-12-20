import React from 'react';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

import Alert from '../modal/Alert';
import {toggleAlert} from "../../../features/modal/alertSlice";
import {Backdrop, Fade, Modal} from "@material-ui/core";
import {useDispatch} from "react-redux";

function Header() {
    // TODO: alert props 이름들 수정
    const btnTxt = "This is opener with btnTxt"
    const dispatch = useDispatch();
    const AlertBtn = (() => (
        <button onClick={() => dispatch(toggleAlert(true))}>
            This is opener with btnEle
        </button>
    ))
    // const modalBody = (() => {
    //     return (
    //         <Modal
    //             open={open}
    //             BackdropComponent={Backdrop}
    //         >
    //             <Fade in={open}>
    //                 <div>
    //                     <h2 id="transition-modal-title">Transition modal</h2>
    //                     <p id="transition-modal-description">react-transition-group animates me.</p>
    //                     <button>TEST CLOSE</button>
    //                 </div>
    //             </Fade>
    //         </Modal>
    //     )
    // })
    const bodyHeader = "HEADER"
    const bodyTxt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consequuntur eaque enim fugiat illum iusto mollitia qui quidem repellat ullam! Doloremque eaque exercitationem fugit praesentium quia saepe ut, velit voluptatum."
    const okTxt = "OK!"
    const okBtn = (() => (
        <button style={{'color':'red'}}>OK!</button>
    ))

    return (
        <div>
            <Typography>Typography 테마 적용</Typography>
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
                <li>
                    <Alert
                        btnTxt={btnTxt}
                        {/* AlertBtn() 또는 <AlertBtn/> 으로 전달 가능 */}
                        btn={AlertBtn()}
                        /*body={modalBody}*/
                        bodyHeader={bodyHeader}
                        bodyTxt={bodyTxt}
                        okText={okTxt}
                        okBtn={okBtn}
                    />
                </li>
            </ul>
        </div>
    );
}

export default Header;
