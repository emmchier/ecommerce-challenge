import React, { useContext, useState } from 'react';

import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import brand from '../../assets/aerolab-logo.svg';
import { useFetch } from '../../hooks/useFetch';
import { UserContext } from '../contexts/UserContext';
import { ShimmerAnimation } from '../skeletons/ShimmerAnimation';
import { Points } from '../user/Points';
import { CustomFAB } from './CustomFAB';
import { Overlay } from './Overlay';
import { SidenavAddPoints } from './SidenavAddPoints';

export const Navbar = () => {

    const { loading } = useFetch();

    const { user } = useContext( UserContext );

    const { name, points } = user;

    const [ showNav, setShowNav ] = useState(false);

    const showSidebar = () => setShowNav(!showNav);

    const isMobile = useMediaQuery({ query: `(min-width: 760px)` });

    return (
        <>
            <SidenavAddPoints 
                isOpenSidenav={ showNav } 
                onClickClose={ ()=> { setShowNav( false ) } }
            />
            <Overlay 
                isOpenOverlay={ showNav }
                onClickOverlay={ ()=> { setShowNav( false ) } } 
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
                            </div> : isMobile && <h2 className="navbar__user-name"> { name } </h2>
                        }
                            <Points 
                                points={ points }
                                isHover={ true }
                                setBack={ true }
                                actionFab={ ()=> { showSidebar() } }
                            />
                            {
                                !isMobile &&
                                <CustomFAB 
                                    classes={ 'btn-add-res' }
                                    iconName={ 'add' } 
                                    onClickFab={ ()=> { showSidebar() }  }
                                />
                            }
                    </div>
                </div>
            </nav>
        </>
    )
}