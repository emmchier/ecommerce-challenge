import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import buyBlue from '../../assets/buy-blue.svg';
import { ProductContext } from '../contexts/ProductContext';
import { UserContext } from '../contexts/UserContext';
import { RedeemModal } from '../ui/RedeemModal';
import { Points } from '../user/Points';
import { ProductRedeemInfo } from './ProductRedeemInfo';

export const ProductItem = ( product ) => {

    const {
        productId, 
        productCategory, 
        productName, 
        productImg, 
        productImgHd,
        productCost
    } = product;

    const [isHover, setIsHover] = useState(false);

    const { user } = useContext(UserContext);

    const { points: userPoints } = user;
    
    return (

        
        
        <div className="col-sm-12 col-md-4 col-lg-3"
            onMouseEnter={() => { 
                productCost > userPoints 
                ? setIsHover(false) : setIsHover(true)
            }}
            onMouseLeave={() => { setIsHover(false) }}>
            
            <div className={
                productCost > userPoints
                ? "product-card-container"
                : "product-card-container elevate"
            }>
                    { isHover && 
                    <ProductRedeemInfo 
                        productId={ productId }
                        productCost={ productCost }
                        productName={ productName } /> 
                    }
                <div className="
                    store__product-card 
                    main-elevation 
                    animate__animated 
                    animate__fadeIn">
                    <div className="store__product-card-data">
                    {
                        productCost > userPoints ? 
                        <Points points={ `You need ${ productCost - userPoints }` } /> : 
                        <img 
                            src={ buyBlue } 
                            className="store__product-buy-icon" 
                            alt="buy blue icon"
                        />
                    }
                    <div className="store__product-card-body">
                        <img 
                            src={ productImg } 
                            className="
                                store__product-card-img 
                                animate__animated 
                                animate__fadeInUp 
                                animate__faster 
                                animate__delay-0.2s" 
                            alt="product image"
                        />
                        <p className="
                            store__product-card-category 
                            animate__animated 
                            animate__fadeInUp 
                            animate__fast 
                            animate__delay-0.4s"> 
                            { productCategory } 
                        </p>
                        <p className="
                            store__product-card-title 
                            animate__animated 
                            animate__fadeInUp 
                            animate__fast 
                            animate__delay-0.8s"> 
                            { productName } 
                        </p>
                    </div>
                    <div className="btn-see-more-container">
                        <Link 
                            className="btn-see-more" 
                            to={ `./product/${ productId }` }> See more </Link>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
