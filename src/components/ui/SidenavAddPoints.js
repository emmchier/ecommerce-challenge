import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { postPoints } from '../../api/service';
import { UserContext } from '../contexts/UserContext';
import { Points } from '../user/Points';
import { CustomAddButtons } from './CustomAddButtons';
import { useMediaQuery } from 'react-responsive';

export const SidenavAddPoints = ( { isOpenSidenav, onClickClose } ) => {

    const { user, setUser } = useContext( UserContext );

    const { name, points } = user;

    const isMobile = useMediaQuery({ query: `(min-width: 760px)` });

    let amount = 0;

    const handleAddPoints = ( newAmount ) => {
        const refresh = points + newAmount;
        setUser({ ...user, points: refresh });
        postPoints(amount, points, amount);
    };

    return (
        <>
            <div className={ isOpenSidenav ? 'sidenav-points active' : 'sidenav-points' }>
                <div className="sidenav-content">
                    <div className="sidenav-header">
                        <i className="btn-close-sidenav material-icons"
                            onClick={ onClickClose }>
                            close
                        </i>
                        <div className="sidenav-coins-container">
                            {
                                !isMobile &&
                                <h2 className="sidenav-user-name">{ name } </h2>
                            }
                            <p>Your coins</p>
                            <Points 
                                points={ points }
                                isHover={ false }
                            />
                        </div>
                    </div>
                    <h3>Get more coins!</h3>
                    <ul className="sidenav__btn-container">
                        <li>
                            <CustomAddButtons
                                pointsAdd={ '1000' }
                                onClickAdd={ ()=> { handleAddPoints(amount = 1000) } }
                            />
                        </li>
                        <li>
                            <CustomAddButtons
                                pointsAdd={ '5000' }
                                onClickAdd={ ()=> { handleAddPoints(amount = 5000) } }
                            />
                        </li>
                        <li>
                            <CustomAddButtons
                                pointsAdd={ '7500' }
                                onClickAdd={ ()=> { handleAddPoints(amount = 7500) } }
                            />
                        </li>
                    </ul>
                    <hr></hr>
                    <Link 
                        className="sidenav-btn-history d-flex align-items-center" 
                        to="/my-history"
                        onClick={ onClickClose }>
                        <p>Check my history</p>
                        <i className="material-icons">chevron_right</i>
                    </Link>
                </div>
            </div>
        </>
    )
}
