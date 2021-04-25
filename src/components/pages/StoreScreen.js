import React, { useState } from 'react';
import { Pagination } from '../pagination/Pagination';
import { ProductGrid } from '../products/ProductGrid';

export const StoreScreen = () => {

    const [categories, setCategories] = useState(['']);

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
                <Pagination isVisible={true} />
                <div>
                    {
                        
                        categories.map( category => 
                            <ProductGrid 
                                key={ category }
                                category={ category } />
                        )
                    }
                </div>
                <Pagination />
                
            </div>
        </section>
        </>
    )
}
