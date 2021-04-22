import React from 'react';
import { ShimmerAnimation } from './ShimmerAnimation';
import { SkeletonRow } from './SkeletonRow';

export const SkeletonGrid = () => {
    return (
        <div className="skeleton-wrapper">
            {
                [1,2,3,4].map((n) => <SkeletonRow key={ n } />)
            }
        </div>
    )
}
