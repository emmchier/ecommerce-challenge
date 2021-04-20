import React from 'react';

export const CustomFAB = ( { iconName, onClickFab } ) => {
    return (
        <button 
            className="custom-fab-btn btn btn-outline-primary"
            onClick={ onClickFab }>
            <i className="material-icons"> { iconName } </i>
        </button>
    )
}
