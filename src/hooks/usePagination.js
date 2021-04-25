import React, { useState } from 'react';
import { useFetch } from './useFetch';

export const usePagination = () => {

    const { data } = useFetch();

    const [currentPage, setCurrentPage] = useState(1);
    const productsByPage = 16;

    function refreshPage(number) {
        const indexLastProduct = (number) * productsByPage;
        const indexFirstProduct = indexLastProduct - productsByPage;
        const list = data.slice(indexFirstProduct, indexLastProduct);
        return list;
    }

    let productList = refreshPage(currentPage);

    return {
        productsByPage,
        productList,
        currentPage,
        setCurrentPage
    };
}
