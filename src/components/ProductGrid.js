import React from 'react';
import { useFetch } from '../hooks/useFetch';
import { ProductItem } from './ProductItem';

export const ProductGrid = () => {

    const { data, loading } = useFetch();

    return (
        <>
            { loading && 'Loading...' }

            <div className="row">
                {
                    data.map( prod => (
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
