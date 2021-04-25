import React from 'react';

import { ShimmerAnimation } from './ShimmerAnimation';
import { SkeletonElements } from './SkeletonElements';

export const SkeletonProduct = () => {
    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-3">
                <div className="skeleton-product">
                    <SkeletonElements type="thumbnail" />
                    <SkeletonElements type="title" />
                    <SkeletonElements type="text" />
                    <ShimmerAnimation />
                </div>
            </div>
        </>
    )
}
