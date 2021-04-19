import React, { useState } from 'react';

import coin from '../../assets/icons/coin.svg';
import { CustomFAB } from '../ui/CustomFAB';

export const Points = ({ points, setBack = true, isHover, actionFab }) => {

    const [showAdd, setShowAdd] = useState(false);

    const [ background, setBackground ] = useState(setBack);

    return (
        <div 
            className={
                background ?
                "store__user-points-container counter-points full-rounded no-elevation d-flex align-items-center"
                : "store__user-points-container full-rounded no-elevation d-flex align-items-center"
            }
            onChange={ ()=> { setBackground(setBack) } }
            onMouseEnter={ ()=> {
                isHover && setShowAdd(true) } }
            onMouseLeave={ ()=> { setShowAdd(false) } }>
            <h2>{ points }</h2> 
            <img src={ coin } className="coin-icon" alt="coin icon"/>
            {
                showAdd && 
                <CustomFAB 
                    iconName={ 'add' } 
                    onClickFab={ actionFab }
                />
            }
        </div>
    )
}
