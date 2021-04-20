import React, { useState } from 'react';
import { useFetch } from './useFetch';

export const usePagination = () => {

    const { data } = useFetch();

    const [ page, setPage ] = useState(1);

    let currentPage = page;
    const productsByPage = 16;

    const indexLastProduct = currentPage * productsByPage;
    const indexFirstProduct = indexLastProduct - productsByPage;
    const productList = data.slice(indexFirstProduct, indexLastProduct);


    return {
        currentPage,
        productsByPage,
        productList,
        setPage,
        page
    };
}
