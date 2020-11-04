import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
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
                    Sign In:
                    <input type="text"
                           onKeyUp={(e) => {
                               if(e.keyCode === 13) alert('enter')
                           }}
                    />
                </li>
                <li>
                    Sign Up:
                    <input type="text"/>
                </li>
            </ul>
        </div>
    );
}

export default Header;
