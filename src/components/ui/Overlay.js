import React from 'react';

export const Overlay = ( { isOpenOverlay, onClickOverlay } ) => {

    return (
        <>
            {
                isOpenOverlay && 
                <div 
                    className={ isOpenOverlay ? 'overlay active' : 'overlay' }
                    onClick={ onClickOverlay }>
                </div>
            }
        </>
    )
}
