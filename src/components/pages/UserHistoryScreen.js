import React, { useEffect, useState } from 'react';
import { getHistory } from '../../api/service';
import { ProductItem } from '../products/ProductItem';

export const UserHistoryScreen = () => {

    const [history, setHistory] = useState([]);

    useEffect(() => {
        getHistory(setHistory);
    }, []);
    console.log(history);

    const listFromTheTop = history.reverse();
    
    return (
        <div className="row">
            {
                listFromTheTop.map( prod => (
                    <ProductItem
                        key={ prod.createDate }
                        { ...prod }
                    />
                ))
            }
        </div>
    )
}
