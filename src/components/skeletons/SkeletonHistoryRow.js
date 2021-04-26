import React from 'react';

import { SkeletonHistoryProduct } from './SkeletonHistoryProduct';

export const SkeletonHistoryRow = () => {
    return (
        <div className="row skeleton-row">
            {
                [...new Array(3)].map((n, key) => <SkeletonHistoryProduct key={ key } />)
            }
        </div>
    )
}
