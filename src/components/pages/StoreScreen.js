import React, { useState } from 'react';
import { ProductGrid } from '../ProductGrid';

export const StoreScreen = () => {

    const [categories, setCategories] = useState(['']);

    return (
        <div className="container">

            <hr />

            <div>
                {
                    categories.map( category => 
                        <ProductGrid 
                            key={ category }
                            category={ category } />
                    )
                }
            </div>
        </div>
    )
}
