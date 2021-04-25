import React, { useState } from 'react';

export const CustomButton = ({ onClick, btnTitle, isHover, classes } ) => {

    const [ hover, setIsHover ] = useState();

    return (
        <button 
            className={
                hover ? 
                `btn btn-primary custom-btn hover-active ${classes}`
                : `btn btn-primary custom-btn ${classes}`
            }
            onMouseEnter={() => { setIsHover(isHover) }}
            onClick={ onClick }>
            { btnTitle }
        </button>
    )
}
