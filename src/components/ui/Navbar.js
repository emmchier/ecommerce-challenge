import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import brand from '../../assets/aerolab-logo.svg';
import { UserContext } from '../contexts/UserContext';
import { Points } from '../user/Points';
import { Overlay } from './Overlay';
import { SidenavAddPoints } from './SidenavAddPoints';

export const Navbar = () => {

    const { user, setUser } = useContext( UserContext );
    const { name, points } = user;

    const [ visibility, setVisibility ] = useState();

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const handleSidenav = (visibility) => {
        setVisibility(visibility);
        
    };
    
    return (
        <>
        <SidenavAddPoints 
            isOpenSidenav={ visibility } 
            onClickClose={ ()=> { handleSidenav(false) } }
        />
        <Overlay 
            isOpenOverlay={ visibility }
            onClickOverlay={ ()=> { handleSidenav(false) } } 
        />
        <nav className="navbar fixed-top navbar-expand-md">
            <div className="navbar__container-less">
                <div>
                <NavLink className="navbar-brand" to="/">
                    <img 
                        src={ brand }
                        className="nabvar__brand-logo"
                        alt="Aerolab Branding" 
                    />
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
                        actionFab={ ()=> { handleSidenav(true) } }
                    />
                </div>
            </div>
        </nav>
        </>
    )
}