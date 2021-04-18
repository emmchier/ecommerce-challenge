import React, { useContext, useState } from 'react';
import buyBlue from '../../assets/buy-blue.svg';
import { UserContext } from '../contexts/UserContext';
import { CustomButton } from '../ui/CustomButton';
import { Points } from '../user/Points';
import { ProductRedeemInfo } from './ProductRedeemInfo';

export const ProductItem = ({ productId, category, name, img, cost }) => {

    const [isHover, setIsHover] = useState(false);

    const { user } = useContext(UserContext);

    const { points: userPoints } = user;

    return (
        
        <div className="col-lg-3 col-md-4 col-sm-12"
            onMouseEnter={() => { 
                cost > userPoints 
                ? setIsHover(false) : setIsHover(true)
            }}
            onMouseLeave={() => { setIsHover(false) }}>
            <div className="product-card-container">
                    { isHover && 
                    <ProductRedeemInfo 
                        productId={ productId }
                        productCost={ cost } /> 
                    }
                <div className="store__product-card main-elevation animate__animated animate__fadeIn">
                    <div className="store__product-card-data">
                    {
                        cost > userPoints ? 
                        <Points points={ `You need ${ cost - userPoints }` } />
                        : 
                        <img 
                            src={ buyBlue } 
                            className="store__product-buy-icon" 
                            alt="buy blue icon"
                        />
                    }
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
