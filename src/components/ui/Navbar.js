import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import brand from '../../aerolab-logo.svg';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm">
            
            <div className="navbar__container-less">
                <Link 
                    className="navbar-brand" 
                    to="/"
                >
                    <img 
                        src={ brand }
                        className="nabvar__brand-logo"
                        alt="Aerolab Branding"
                    />
                </Link>

                <div className="navbar-collapse dual-collapse2">
                    <ul className="navbar-nav ml-auto">

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/my-history"
                        >
                            History
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}