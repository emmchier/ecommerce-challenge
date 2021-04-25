import React from 'react';

import { useFetch } from '../../hooks/useFetch';
import { usePagination } from '../../hooks/usePagination';
import { SkeletonGrid } from '../skeletons/SkeletonGrid';
import { ProductItem } from './ProductItem';
import { useMediaQuery } from 'react-responsive';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const ProductGrid = () => {

    const { productList } = usePagination();

    const { loading } = useFetch();

    const isMobile = useMediaQuery({ query: `(min-width: 760px)` });
    
    return (    
        <>
            { loading && <SkeletonGrid /> }
            {
                !isMobile 
                ? <OwlCarousel 
                    className='owl-theme' 
                    dots={ false }
                    items={ 1 }
                    margin={ 25 } 
                    nav>
                    {   
                        productList.map( prod => (
                            
                            <ProductItem
                                key={ prod.id }
                                { ...prod }
                            />
                        ))
                    }
                </OwlCarousel> 
                :
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
            }
        </>
    )
}
