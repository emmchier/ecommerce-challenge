import React, { useState } from 'react';

import coin from '../../assets/icons/coin.svg';

export const Points = ({ points, setBack = true }) => {

    const [ background, setBackground ] = useState(setBack);

    return (
        <div 
            className={
                background ?
                "store__user-points-container counter-points full-rounded no-elevation d-flex align-items-center"
                : "store__user-points-container full-rounded no-elevation d-flex align-items-center"
            }
            onChange={ ()=> { setBackground(setBack) } }>
            { points }
            <img src={ coin } className="coin-icon" alt="coin icon"/>
        </div>
    )
}
