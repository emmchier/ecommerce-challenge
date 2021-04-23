
import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';

import brand from '../../assets/aerolab-logo.svg';
import { useFetch } from '../../hooks/useFetch';
import { UserContext } from '../contexts/UserContext';
import { ShimmerAnimation } from '../skeletons/ShimmerAnimation';
import { SkeletonElements } from '../skeletons/SkeletonElements';
import { Points } from '../user/Points';
import { Overlay } from './Overlay';
import { SidenavAddPoints } from './SidenavAddPoints';

export const Navbar = () => {

    const { user } = useContext( UserContext );
    const { name, points } = user;

    const [showNav, setShowNav] = useState(false);
    const showSidebar = () => setShowNav(!showNav);

    const { loading } = useFetch();
    
    return (
        <>
        <SidenavAddPoints 
            isOpenSidenav={ showNav } 
            onClickClose={ ()=> { setShowNav(false) } }
        />
        <Overlay 
            isOpenOverlay={ showNav }
            onClickOverlay={ ()=> { setShowNav(false) } } 
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
               
                </div>
            </div>
            
            <div className="nav-link">
                <div className="navbar__user-points-container d-flex align-items-center">
                    {
                        loading 
                        ? 
                        <div className="btn skeleton-name">
                            <ShimmerAnimation />
                        </div> : <h1> { name } </h1>
                    }
                        <Points 
                            points={ points }
                            isHover={ true }
                            setBack={ true }
                            actionFab={ ()=> { showSidebar() } }
                        />
                </div>
            </div>
        </nav>
        </>
    )
}