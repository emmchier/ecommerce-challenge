import React from 'react';

import buyWhite from '../../assets/buy-white.svg';
import RedeemDialog from '../ui/RedeemDialog';
import DetailDialog from '../ui/DetailDialog';

import coin from '../../assets/icons/coin.svg';

export const ProductRedeemInfo = ( props ) => {

    const {
        productId,
        productName, 
        productCategory, 
        productCost, 
        productImg,
        productImgHd
    } = props;

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
                        <div className="points-container">
                            <p className="redeem-cost"> { productCost } </p>
                            <img src={ coin } className="coin-icon" alt="coin icon"/>
                        </div>
                        <RedeemDialog
                            productId={ productId }
                            productCost={ productCost }
                            productName={ productName }
                            productImg={ productImg }
                            productImgHd={ productImgHd }
                            productCategory={ productCategory }
                        />
                    </div>
                    <div className="btn-see-more">
                        <div className="btn-see-more-redeem">
                            <DetailDialog 
                                productId={ productId }
                                productCost={ productCost }
                                productName={ productName }
                                productImg={ productImg }
                                productImgHd={ productImgHd }
                                productCategory={ productCategory }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
