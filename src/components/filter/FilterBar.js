import React, { useContext, useEffect, useState } from 'react';

import { usePagination } from '../../hooks/usePagination';
import { FilterContext } from '../contexts/FilterContext';
import { CustomButton } from '../ui/CustomButton';
import { useMediaQuery } from 'react-responsive';
import FilterSelect from './FilterSelect';

export const FilterBar = () => {

    const { filter, setFilter } = useContext( FilterContext );

    const { productList } = usePagination();

    const [ filterProducts, setFilterProducts ] = useState( productList );

    const [ setSelected ] = useState();

    const selectedClass = 'selected';

    const isMobile = useMediaQuery( { query: `(min-width: 760px)` } );

    const filterPrice = (a, b) => {

        switch (filter.price) {
            case "lowest":
                setSelected(selectedClass);
                return a - b;
            case "highest":
                return b - a;
            default:
                return 0;
        }
    }

    function handleFilters() {
        const filterList= [...filterProducts];
        const orderBy = filterList.sort(filterPrice);
        setFilterProducts(orderBy);
    }

    useEffect(() => {
        handleFilters();
    }, [filter]);

    function handleFilterByType(type) {
        const newData = { ...filter, price: type };
        setFilter(newData);
        switch (type) {
            case "all":
                setSelected(selectedClass);
                break;
            case "lowest":
                //setSelected(selectedClass);
                break;
            case "highest":
                //setSelected(selectedClass);
                break;
            default:
                break;
        }
    }

    return (
        <>
            {
                !isMobile 
                ? <FilterSelect />
                : 
                <div className="store__filter-container align-horizontal">
                
                    <p>Sort by:</p>

                    <CustomButton
                        classes={ selectedClass }
                        btnTitle={ 'Most Recent' }
                        isHover={ true }
                        onClick={ ()=> { handleFilterByType('all') } }
                    />

                    <CustomButton
                        btnTitle={ 'Lowest price' }
                        isHover={ true }
                        onClick={ ()=> { handleFilterByType('lowest') } }
                    />

                    <CustomButton
                        btnTitle={ 'Highest price' }
                        isHover={ true }
                        onClick={ ()=> { handleFilterByType('highest') } }
                    />
                    
                </div>
            }
        </>
    )
}
