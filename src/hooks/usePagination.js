import React, { useState } from 'react';
import { useFetch } from './useFetch';

export const usePagination = () => {

    const { data } = useFetch();

    const [ pagination ] = useState(1);

    let currentPage = pagination
    const productPerPage = 16

    const indexLastProduct = currentPage * productPerPage;
    const indexFirstProduct = indexLastProduct - productPerPage;
    const totalProducts = data.slice(indexFirstProduct, indexLastProduct);

    return {
        currentPage,
        productPerPage,
        totalProducts
    };
}
