import React, { useState } from 'react';

export const Overlay = ( { isOpenOverlay, onClickOverlay } ) => {

    return (
        <>
        {
            isOpenOverlay && 
            <div 
                className="overlay"
                onClick={ onClickOverlay }
            >

            </div>
        }
        </>
    )
}
