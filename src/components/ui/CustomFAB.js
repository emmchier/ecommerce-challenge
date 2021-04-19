import React from 'react';

export const CustomFAB = ( { iconName, onClickFab } ) => {
    return (
        <button 
            className="btn-prev-pagination custom-fab-btn btn btn-outline-primary"
            onClick={ onClickFab }>
            <i className="material-icons"> { iconName } </i>
        </button>
    )
}
