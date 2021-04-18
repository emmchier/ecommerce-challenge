import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { usePagination } from '../../hooks/usePagination';
import { ProductItem } from './ProductItem';

export const ProductGrid = () => {

    const { totalProducts } = usePagination();
    const { loading } = useFetch();

    return (    
        <>
            { loading && 'Loading...' }

            <div className="row">
                {
                    totalProducts.map( prod => (
                        <ProductItem
                            key={ prod.id }
                            { ...prod }
                        />
                    ))
                }
            </div>
        </>
    )
}
