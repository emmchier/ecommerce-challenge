import React from 'react';
import { useParams } from 'react-router';

export const ProductDetail = () => {

    const { productId } = useParams();

    console.log(productId);

    return (
        <div>
           
            <h2>{ productId }</h2>
        </div>
    )
    
}


