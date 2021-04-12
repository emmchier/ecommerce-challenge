import React, { useState } from 'react';
import { ProductGrid } from './components/ProductGrid';

export const App = () => {

    const [categories, setCategories] = useState(['']);

    

    return (
        <div className="container">
            <h2>Ecommerce App</h2>
            <hr />

            <ul>
                {
                    categories.map( category => 
                         <ProductGrid 
                            key={ category }
                            category={ category } />
                    )
                }
            </ul>
        </div>
    )
}
