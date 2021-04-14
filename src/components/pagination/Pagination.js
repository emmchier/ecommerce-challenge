import React, { useState } from 'react';
import { FilterBar } from '../filter/FilterBar';

export const Pagination = ({pagerCount = 16, pagerTotal = 30, isVisible}) => {

    const [filterVisivility] = useState(isVisible);

    return (
        <div className="pagination-bar">
            <div className="store__pagination-container align-horizontal d-flex align-items-center">
                <p className="store__counter-pager">{ pagerCount } of { pagerTotal } products </p>
    
                { filterVisivility && <FilterBar /> }

                <ul className="pagination-nav align-horizontal right-align">
                    <li>
                        <button className="custom-fab-btn btn btn-outline-primary">
                            <i class="material-icons">chevron_left</i>
                        </button>
                    </li> 
                    <li>
                        <button className="custom-fab-btn btn btn-outline-primary">
                            <i class="material-icons">chevron_right</i>
                        </button>
                    </li>
                </ul>
                
            </div>
            <hr />
        </div>
    )
}
