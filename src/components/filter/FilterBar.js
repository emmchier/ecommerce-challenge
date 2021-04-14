import React from 'react';

export const FilterBar = () => {

    return (
        <div className="store__filter-container align-horizontal">
            <p>Sort by:</p>

            <button 
                className="btn btn-primary custom-btn hover-active"
                // onClick={ }
                >
                Most recent
            </button>

            <button 
                className="btn btn-primary custom-btn hover-active"
                // onClick={ }
                >
                Lowest price
            </button>

            <button 
                className="btn btn-primary custom-btn hover-active"
                // onClick={ }
                >
                Highest price
            </button>
        </div>
    )
}
