import React, { useState } from 'react';

import { Pagination } from '../pagination/Pagination';
import { ProductGrid } from '../products/ProductGrid';

export const StoreScreen = () => {

    const [ products ] = useState( [ '' ] );

    return (
        <>
            <section className="store-screen animate__animated animate__fadeIn">
                <header>
                    <div className="container">
                        <h1 
                            className="
                                animate__animated 
                                animate__fadeInUp">
                            Electronics
                        </h1>
                    </div>
                </header>
                <div className="container">
                    <Pagination isVisible={ true } />
                    <div>
                        {
                            products.map( prod => 
                                <ProductGrid 
                                    key={ prod }
                                    category={ prod } />
                            )
                        }
                    </div>
                    <Pagination />
                </div>
            </section>
        </>
    )
}
