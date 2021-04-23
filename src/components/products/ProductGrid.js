import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { usePagination } from '../../hooks/usePagination';
import { SkeletonGrid } from '../skeletons/SkeletonGrid';
import { ProductItem } from './ProductItem';

export const ProductGrid = () => {

    const { productList } = usePagination();
    const { loading } = useFetch();

    return (    
        <>
        
            { loading && <SkeletonGrid /> }

            <div className="row">
                
                {
                    productList.map( prod => (
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
