import React, { useState } from 'react';

export const CustomButton = ({ onClick, btnTitle, isHover = true} ) => {

    const [ hover, setIsHover ] = useState();

    return (
        <button 
            className={
                hover ? 
                "btn btn-primary custom-btn hover-active"
                : "btn btn-primary custom-btn"
            }
            onMouseEnter={() => { setIsHover(isHover) }}
            onClick={ onClick }
            >
            { btnTitle }
        </button>
    )
}
