import React from 'react';
import { Link } from 'react-router-dom';
import { getReedem } from '../../api/service';

import buyWhite from '../../assets/buy-white.svg';
import { CustomButton } from '../ui/CustomButton';
import { CustomLinkButton } from '../ui/CustomLinkButton';
import { Points } from '../user/Points';

export const ProductRedeemInfo = ({ productId, category, productCost }) => {

   
    return (
        <>
            <div className="store__product-redeem-content">
                <img 
                    src={ buyWhite } 
                    className="store__redeem-buy-icon" 
                    alt="buy blue icon"
                />
                <div className="store__redeem-card-data">
                    <div className="redeem-points">
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
                    <CustomLinkButton
                        to={'/my-history'}
                        linkTitle={'See more'}
                    />
                </div>

            </div>
        </>
    )
}
