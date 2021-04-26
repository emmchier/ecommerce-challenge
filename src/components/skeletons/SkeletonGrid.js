import React from 'react';

import { SkeletonRow } from './SkeletonRow';

export const SkeletonGrid = () => {
    
    return (
        <div className="skeleton-wrapper">
            {
                [...new Array(4)].map((n, key) => <SkeletonRow key={ key } />)
            }
        </div>
    )
}
