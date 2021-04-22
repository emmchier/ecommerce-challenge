import React from 'react'
import { SkeletonProduct } from './SkeletonProduct'

export const SkeletonRow = () => {
    return (
        <>
            <div className="row skeleton-row">
                {
                    [1,2,3,4].map((n) => <SkeletonProduct key={ n } />)
                }
            </div>
        </>
    )
}
