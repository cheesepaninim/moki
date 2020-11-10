import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    postSignUp,
    getSignIn,
    getSignOut,
    selectIsSignIn,
    selectUserToken
} from '../../../features/users/usersSlice';
import {useDispatch, useSelector} from "react-redux";

function Header() {
    const isSignIn = useSelector(selectIsSignIn);
    const userToken = useSelector(selectUserToken);
    const dispatch = useDispatch();

    return (
        <div>
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

            <ul>
                <li>
                    Sign Up:
                    <input type="text"
                           onKeyUp={(e) => {
                               if(e.keyCode === 13) {
                                   dispatch(postSignUp({user_token: e.target.value}))
                               }
                           }}
                    />
                </li>
                <li>
                    Sign In:
                    <input type="text"
                           onKeyUp={(e) => {
                               if(e.keyCode === 13) {
                                   dispatch(getSignIn({user_token: e.target.value}))
                               }
                           }}
                    />
                </li>
                <li>
                    <button onClick={() => dispatch(getSignOut({user_token: userToken}))}>
                        Sign Out
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Header;
