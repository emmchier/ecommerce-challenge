import React, { useState } from 'react';

import coin from '../../assets/icons/coin.svg'

export const UserPoints = () => {

    const [counter, setCounter] = useState(10100);

    const handleClick = () => {
       setCounter(counter + 1);
    };
    
    return (
        <div className="store__user-points-container d-flex align-items-center">
            <h2>Nombre Usuario</h2>
            <button 
                className="custom-btn btn btn-primary full-rounded no-elevation d-flex align-items-center"
                onClick={ handleClick }>
                { counter }
                <img src={ coin } className="coin-icon" alt="coin icon"/>
            </button>
        </div>
    )
}
