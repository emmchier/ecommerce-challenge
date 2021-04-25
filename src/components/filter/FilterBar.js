import React, { useContext, useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { usePagination } from '../../hooks/usePagination';
import { FilterContext } from '../contexts/FilterContext';
import { CustomButton } from '../ui/CustomButton';
import { useMediaQuery } from 'react-responsive';
import FilterSelect from './FilterSelect';

export const FilterBar = () => {

    const { filter, setFilter } = useContext(FilterContext);

    const { productList } = usePagination();

    const [filterProducts, setFilterProducts] = useState(productList);

    const [selected, setSelected] = useState();

    const selectedClass = 'selected';

    const isMobile = useMediaQuery({ query: `(min-width: 760px)` });

    const filterPrice = (a, b) => {
        switch (filter.price) {
            case "lowest":
                setSelected(selectedClass);
                return a - b;
                break;
            case "highest":
                return b - a;
                break;
            default:
                return 0;
                break;
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
                setSelected(selectedClass);
                break;
            case "highest":
                setSelected(selectedClass);
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
                    //classes={ selected }
                    btnTitle={ 'Lowest price' }
                    isHover={ true }
                    onClick={ ()=> { handleFilterByType('lowest') } }
                />

                <CustomButton
                    //classes={ selected }
                    btnTitle={ 'Highest price' }
                    isHover={ true }
                    onClick={ ()=> { handleFilterByType('highest') } }
                />
                
            </div>
            }
        
        </>
    )
}
