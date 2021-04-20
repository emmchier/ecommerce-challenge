import React, { useState } from 'react';
import { Pagination } from '../pagination/Pagination';
import { ProductGrid } from '../products/ProductGrid';

export const StoreScreen = () => {

    const [categories, setCategories] = useState(['']);

    return (
        <section className="store-screen">
            <header>
                <div className="container">
                    <h1>Electronics</h1>
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
    )
}
