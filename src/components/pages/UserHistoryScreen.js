import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getHistory } from '../../api/service';
import { useFetch } from '../../hooks/useFetch';
import { EmptyContent } from '../empty/EmptyContent';
import { ProductHistoryItem } from '../products/ProductHistoryItem';
import { ProductItem } from '../products/ProductItem';
import { SkeletonGrid } from '../skeletons/SkeletonGrid';
import { SkeletonHistoryGrid } from '../skeletons/SkeletonHistoryGrid';
import { CustomFAB } from '../ui/CustomFAB';

export const UserHistoryScreen = () => {

    const [history, setHistory] = useState([]);
    
    const { loading } = useFetch();

    useEffect(() => {
        getHistory(setHistory);
    }, []);
    console.log(history);

    const listFromTheTop = history.reverse();
    
    return (    
        <section className="container animate__animated animate__fadeIn">
            <div className="history-screen">
            {
                listFromTheTop.length < 0 
                ? <EmptyContent />
                :
                <div className="row">
                    <div className="history-header">
                        <Link 
                            className="btn-back-store align-items-center"
                            to="/">
                            <CustomFAB iconName={ 'arrow_backward' } />
                            <span>Back to store</span>
                        </Link>
                        <h2 
                            className="
                                animate__animated 
                                animate__fadeInUp 
                                history-title">
                            Your redeems here
                        </h2>
                    </div>
                    { loading && <SkeletonHistoryGrid /> }
                    {
                        listFromTheTop.map( prod => (
                            <ProductHistoryItem
                                key={ prod.id }
                                { ...prod }
                            />
                        ))
                    }
                </div>
            }
            </div>
        </section>
    )
}
