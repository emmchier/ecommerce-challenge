import React from 'react';
import { getReedem } from '../../api/service';

import buyWhite from '../../assets/buy-white.svg';
import { CustomButton } from '../ui/CustomButton';
import { Points } from '../user/Points';

export const ProductRedeemInfo = ({ productId, category, productCost }) => {

   
    return (
        <>
            <div className="store__product-redeem-content">
                <img 
                    src={ buyWhite } 
                    className="store__product-buy-icon" 
                    alt="buy blue icon"
                />
                <div className="store__product-card-data">
                    <Points 
                        points={ productCost }
                        setBack={ false }
                    />
                    <CustomButton
                        btnTitle={ 'Redeem Now' }
                        isHover={ false }
                        onClick={ ()=> {getReedem(productId)} }
                    />
                </div>

            </div>
        </>
    )
}
