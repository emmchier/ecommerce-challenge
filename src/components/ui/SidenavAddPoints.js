import React, { useContext, useState } from 'react';
import { postPoints } from '../../api/service';
import { UserContext } from '../contexts/UserContext';
import { Points } from '../user/Points';
import { CustomAddButtons } from './CustomAddButtons';
import { CustomButton } from './CustomButton';

export const SidenavAddPoints = ( { isOpenSidenav, onClickClose } ) => {

    const { user, setUser } = useContext( UserContext );
    const { points } = user;

    let amount = 0;

    const handleAddPoints = (newAmount) => {
        const refresh = points + newAmount;
        setUser({ points: refresh });
        postPoints(amount, points, amount);
    };

    return (
        <>
            {
                isOpenSidenav && 
                <div className="sidenav-points">
                    <div className="sidenav-content">
                        <div className="sidenav-header">
                            <i className="btn-close-sidenav material-icons"
                                onClick={ onClickClose }>
                                close
                            </i>
                            <div className="sidenav-coins-container">
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
                    </div>
                </div>
            }
        </>
    )
}
