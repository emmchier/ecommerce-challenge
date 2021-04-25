import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { usePagination } from '../../hooks/usePagination';
import { FilterBar } from '../filter/FilterBar';
import { CustomFAB } from '../ui/CustomFAB';

export const Pagination = ( { isVisible } ) => {

    const [ filterVisivility ] = useState(isVisible);

    const { 
        productsByPage,
        currentPage,
        setCurrentPage } = usePagination();
   
    const { data } = useFetch();

    const setPagination = (number) => {
       setCurrentPage(number);
    };

    return (
        <div className="pagination-bar">
            <div className="store__pagination-container align-horizontal d-flex align-items-center">
                <p className="store__counter-pager">{ productsByPage } of { data.length } <span>products</span></p>
    
                { filterVisivility && <FilterBar /> }

                <ul className="pagination-nav align-horizontal right-align">
                    <li>
                        {
                            !currentPage == 1 &&
                            <CustomFAB 
                                iconName={ 'chevron_left' } 
                                onClickFab={ ()=> { setPagination(1) } }
                            />
                        }
                        
                    </li> 
                    <li>
                        <CustomFAB 
                            iconName={ 'chevron_right' } 
                            onClickFab={ ()=> { setPagination(2) } }
                        />
                    </li>
                </ul>
                
            </div>
            <hr />
        </div>
    )
}
