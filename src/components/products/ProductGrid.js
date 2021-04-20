import React, { useContext, useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { usePagination } from '../../hooks/usePagination';
import { ProductItem } from './ProductItem';

export const ProductGrid = () => {

    const { productList } = usePagination();

    const { loading } = useFetch();

    return (    
        <>
            { loading && 'Loading...' }

            <div className="row">
                {
                    productList.map( prod => (
                        <ProductItem
                            key={ prod._id }
                            { ...prod }
                        />
                    ))
                }
            </div>
        </>
    )
}
