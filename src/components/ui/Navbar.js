import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import brand from '../../assets/aerolab-logo.svg';
import { UserContext } from '../contexts/UserContext';
import { Points } from '../user/Points';

export const Navbar = () => {

    const { user } = useContext( UserContext );

    return (
        <>
        <nav className="navbar fixed-top navbar-expand-md">
            <div className="navbar__container-less">
                <div>
                <Link className="navbar-brand" to="/">
                    <img 
                        src={ brand }
                        className="nabvar__brand-logo"
                        alt="Aerolab Branding" />
                </Link>
                <Link className="navbar-brand" to="/my-history">HISTORY</Link>
                </div>
            </div>
            
            <div className="nav-link">
                <div className="store__user-points-container d-flex align-items-center">
                    <h2> { user.name } </h2>
                    <Points points={ user.points }/>
                </div>
            </div>
        </nav>
        </>
    )
}