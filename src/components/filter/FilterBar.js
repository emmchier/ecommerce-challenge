import React, { useContext, useEffect } from 'react';
import { FilterContext } from '../contexts/FilterContext';
import { CustomButton } from '../ui/CustomButton';

export const FilterBar = () => {

    const { filter, setFilter } = useContext(FilterContext);

    function handleFilterByType(type) {
        const newData = { ...filter, price: type };
        setFilter(newData);
        console.log(filter);
    }

    return (
        <div className="store__filter-container align-horizontal">
            <p>Sort by:</p>

            <CustomButton
                key={ 'btnRecent' }
                btnTitle={ 'Most Recent' }
                isHover={ true }
                onClick={ ()=> { handleFilterByType('all') } }
            />

            <CustomButton
                key={ 'btnLowest' }
                btnTitle={ 'Lowest price' }
                isHover={ true }
                onClick={ ()=> { handleFilterByType('lowest') } }
            />

            <CustomButton
                key={ 'btnHighest' }
                btnTitle={ 'Highest price' }
                isHover={ true }
                onClick={ ()=> { handleFilterByType('highest') } }
            />
            
        </div>
    )
}
