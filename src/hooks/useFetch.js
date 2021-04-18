import { useEffect, useState } from "react";
import { getProducts } from "../api/service";

export const useFetch = () => {
   
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( ()=> {
        getProducts()
            .then( products => {
                setState({
                    data: products,
                    loading: false
                });
            })
    }, [])

    return state;

}
