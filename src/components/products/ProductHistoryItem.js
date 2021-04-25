import React from 'react';

import buyWhite from '../../assets/buy-white.svg';

export const ProductHistoryItem = (props) => {

    const { 
        category: productCategory, 
        name: productName, 
        img: productImg } = props;

    return (
        <>
            <div className="col-sm col-lg-4">
                <div className="history-item">
                    <div className="product-card-container">
                        <div className="
                            store__product-card 
                            main-elevation 
                            animate__animated 
                            animate__fadeIn">
                            <img 
                                src={ buyWhite } 
                                className="store__product-buy-icon" 
                                alt="buy blue icon"
                            />
                            <div className="store__product-card-body">
                                <div className="row">
                                    <div className="col-sm col-md-6">
                                        <img 
                                            src={ productImg.url } 
                                            className="
                                                store__product-card-img 
                                                animate__animated 
                                                animate__fadeInUp 
                                                animate__faster 
                                                animate__delay-0.2s" 
                                            alt="product image"
                                        />
                                    </div>
                                    <div className="col-sm col-md-6">
                                        <div className="history-data">
                                            <p className="
                                                store__product-card-title 
                                                animate__animated 
                                                animate__fadeInUp 
                                                animate__fast 
                                                animate__delay-0.8s"> 
                                                { productName } 
                                            </p>
                                            <p className="
                                                store__product-card-category 
                                                animate__animated 
                                                animate__fadeInUp 
                                                animate__fast 
                                                animate__delay-0.4s"> 
                                                { productCategory } 
                                            </p>
                                        </div>                                  
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </>
    )
}
