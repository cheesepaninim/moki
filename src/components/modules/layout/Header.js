import React from 'react';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

function Header() {
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
            </ul>
        </div>
    );
}

export default Header;
