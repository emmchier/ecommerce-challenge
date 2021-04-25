import React from 'react';

import { ShimmerAnimation } from './ShimmerAnimation';
import { SkeletonElements } from './SkeletonElements';

export const SkeletonHistoryProduct = () => {
    return (
        <div className="col col-md-4">
            <div className="row skeleton-product skeleton-history">
                <div className="col col-lg-4">
                    <SkeletonElements type="thumbnail history" />
                    <SkeletonElements type="avatar history" />
                </div>
                <div className="col col-lg-4">
                    <div className="history-info-container">
                        <SkeletonElements type="title history" />
                        <SkeletonElements type="text history" />
                    </div>
                </div>
                <ShimmerAnimation />
            </div>
        </div>
    )
}
