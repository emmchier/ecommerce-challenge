import React from 'react';

export const CustomFAB = ( { iconName, onClickFab, classes } ) => {
    return (
        <button 
            className={`custom-fab-btn btn btn-outline-primary ${ classes }`}
            onClick={ onClickFab }>
            <i className="material-icons"> { iconName } </i>
        </button>
    )
}
