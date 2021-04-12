import React, { useEffect, useState } from 'react';

export const ProductGrid = ({ category }) => {

    const [prods, setProducts] = useState([]);

    useEffect( ()=> {
        getProducts();
    }, [])

    const getProducts = async() => {

        const BASE_URL = 'https://coding-challenge-api.aerolab.co';

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append(
            'Authorization', 
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDZlMjZiYjc2NmZiNTAwMjRhYTg3OGUiLCJpYXQiOjE2MTc4MzE2MTF9.OMCBuUUBauP9nl7KbToJf30FctH5NPJPz6opx4ZFQv0');

        const request = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };
    
        try {
            const result = await fetch(`${BASE_URL}/products`, request);
            const data = await result.json();

            const products = data.map( product => {
                return {
                    id: product._id,
                    name: product.name,
                    cost: product.cost,
                    category: product.category,
                    img: product.img?.url
                }
            })

            console.log(products);
            setProducts(products);

        } catch (error) {
            console.log('error', error);
        }
    }

    return (
        <ul>
            {
                prods.map( prod => (
                    <li key={ prod._id }> { prod.name } </li>
                ))
            }
        </ul>
    )
}
