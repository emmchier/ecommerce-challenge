import React from 'react'

export const SkeletonElements = ( { type } ) => {

    const classes = `skeleton ${ type }`;
    
    return (
        <div className={ classes }></div>
    )
}
