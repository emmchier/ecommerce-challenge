import React from 'react'
import { useFetch } from '../../hooks/useFetch';

export const GetProductById = ( id ) => {

    const { data } = useFetch();
    
    return data.find( product => product.id === id );
}
