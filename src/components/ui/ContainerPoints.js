import React from 'react';

import coin from '../../assets/icons/coin.svg';

export const ContainerPoints = ( productCost ) => {
    return (
        <div className="points-container">
            <p className="redeem-cost"> { productCost } </p>
            <img src={ coin } className="coin-icon" alt="coin icon"/>
        </div>
    )
}
