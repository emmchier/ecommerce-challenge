import React from 'react';
import { Link } from 'react-router-dom';

export const CustomLinkBtn = ( productId, classes ) => {
    return (
        <Link 
            className={ `btn-see-more ${ classes }` } 
            to={ `./product/${ productId }` }> See more </Link>
    )
}

