import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { postPoints } from '../../api/service';

import brand from '../../assets/aerolab-logo.svg';
import { UserContext } from '../contexts/UserContext';
import { Points } from '../user/Points';

export const Navbar = () => {

    const { user } = useContext( UserContext );

    const [amount, setAmount] = useState(1000);

    const { name, points } = user;

    const handleAddPoints = () => {
        postPoints(amount, points, setAmount(amount));
    };
    

    return (
        <>
        <nav className="navbar fixed-top navbar-expand-md">
            <div className="navbar__container-less">
                <div>
                <NavLink className="navbar-brand" to="/">
                    <img 
                        src={ brand }
                        className="nabvar__brand-logo"
                        alt="Aerolab Branding" />
                </NavLink>
                <NavLink className="navbar-brand" to="/my-history">HISTORY</NavLink>
                </div>
            </div>
            
            <div className="nav-link">
                <div className="navbar__user-points-container d-flex align-items-center">
                    <h1> { name } </h1>
                    <Points 
                        points={ points }
                        isHover={ true }
                        actionFab={ ()=> { handleAddPoints() } }
                    />
                </div>
            </div>
        </nav>
        </>
    )
}