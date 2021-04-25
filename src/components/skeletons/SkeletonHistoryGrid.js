import React from 'react';
import { SkeletonHistoryRow } from './SkeletonHistoryRow';

export const SkeletonHistoryGrid = () => {
    return (
        <div className="skeleton-wrapper">
            {
                [...new Array(10)].map((n) => <SkeletonHistoryRow key={ n } />)
            }
        </div>
    )
}
