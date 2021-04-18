import React from 'react';
import { CustomButton } from '../ui/CustomButton';

export const FilterBar = () => {

    const handleRecent = () => {
      
    };

    const handleLowest = () => {
       
    };

    const handleHighest = () => {
       
    };

    return (
        <div className="store__filter-container align-horizontal">
            <p>Sort by:</p>

            <CustomButton
                key={ 'btnRecent' }
                btnTitle={ 'Most Recent' }
                isHover={ true }
                onClick={ handleRecent }
            />

            <CustomButton
                key={ 'btnLowest' }
                btnTitle={ 'Lowest price' }
                isHover={ true }
                onClick={ handleLowest }
            />

            <CustomButton
                key={ 'btnHighest' }
                btnTitle={ 'Highest price' }
                isHover={ true }
                onClick={ handleHighest }
            />
            
        </div>
    )
}
