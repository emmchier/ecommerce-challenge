import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { usePagination } from '../../hooks/usePagination';
import { FilterBar } from '../filter/FilterBar';
import { CustomFAB } from '../ui/CustomFAB';

export const Pagination = ( { isVisible } ) => {

    const [ filterVisivility ] = useState(isVisible);

    const { productPerPage } = usePagination();
    
    const { data } = useFetch();

    return (
        <div className="pagination-bar">
            <div className="store__pagination-container align-horizontal d-flex align-items-center">
                <p className="store__counter-pager">{ productPerPage } of { data.length } products </p>
    
                { filterVisivility && <FilterBar /> }

                <ul className="pagination-nav align-horizontal right-align">
                    <li>
                        {
                            productPerPage > 16 &&
                            <CustomFAB iconName={ 'chevron_left' } />
                        }
                        
                    </li> 
                    <li>
                        <CustomFAB iconName={ 'chevron_right' } />
                    </li>
                </ul>
                
            </div>
            <hr />
        </div>
    )
}
