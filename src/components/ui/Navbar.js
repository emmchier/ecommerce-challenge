import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import brand from '../../assets/aerolab-logo.svg';
import { UserPoints } from '../user/UserPoints';

export const Navbar = () => {
    return (
        <>
        <nav class="navbar fixed-top navbar-expand-md">
            <div className="navbar__container-less">
                <div>
                <Link className="navbar-brand" to="/">
                    <img 
                        src={ brand }
                        className="nabvar__brand-logo"
                        alt="Aerolab Branding" />
                </Link>
                </div>
            </div>
            <div className="nav-link">
                <UserPoints />
            </div>
        </nav>
        </>
    )
}