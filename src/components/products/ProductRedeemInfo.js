import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import buyWhite from '../../assets/buy-white.svg';
import { UserContext } from '../contexts/UserContext';
import coin from '../../assets/icons/coin.svg';
import RedeemDialog from '../ui/RedeemDialog';
import { CustomLinkBtn } from '../ui/CustomLinkBtn';

export const ProductRedeemInfo = ( props ) => {

    const {
        productId,
        productName, 
        productCategory, 
        productCost, 
        productImg,
        productImgHd
    } = props;

    console.log(productImgHd);

    const { user } = useContext(UserContext);

    const { points } = user;

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
                        {
                            points < 0 
                            ? console.log('add points')
                            :  
                            <RedeemDialog
                                productId={ productId }
                                productCost={ productCost }
                                productName={ productName }
                                productImg={ productImg }
                                productImgHd={ productImgHd }
                            />
                        }
                    </div>
                    <CustomLinkBtn productId={ productId } />
                </div>
                

            </div>
        </>
    )
}
