import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { usePagination } from '../../hooks/usePagination';

export const GetProductById = ( id ) => {

    const { productList } = usePagination();
    
    return productList.find( product => product.id === id );
}
