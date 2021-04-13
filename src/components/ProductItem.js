import React from 'react';
import buyBlue from '../../src/buy-blue.svg';
import buyWhite from '../../src/buy-white.svg';

export const ProductItem = ({ id, category, name, img }) => {

    return (
        <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="product-card-container">
                
                <div className="store__product-card main-elevation animate__animated animate__fadeIn">
                    <img 
                        src={ buyBlue } 
                        className="store__product-buy-icon" 
                        alt="buy blue icon"
                    />
                    <div className="store__product-card-data">
                        <img 
                            src={ img } 
                            className="store__product-card-img animate__animated animate__fadeInUp animate__faster animate__delay-0.2s" 
                            alt="product image"
                        />
                        <p className="store__product-card-category animate__animated animate__fadeInUp animate__fast animate__delay-0.4s"> { category } </p>
                        <p className="store__product-card-title animate__animated animate__fadeInUp animate__fast animate__delay-0.8s"> { name } </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
