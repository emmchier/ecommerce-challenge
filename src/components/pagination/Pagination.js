import React, { useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { usePagination } from '../../hooks/usePagination';
import { FilterBar } from '../filter/FilterBar';

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
                        <button 
                            className="btn-prev-pagination custom-fab-btn btn btn-outline-primary">
                            <i className="material-icons">chevron_left</i>
                        </button>
                    </li> 
                    <li>
                        <button 
                            className="btn-next-pagination custom-fab-btn btn btn-outline-primary">
                            <i className="material-icons">chevron_right</i>
                        </button>
                    </li>
                </ul>
                
            </div>
            <hr />
        </div>
    )
}
