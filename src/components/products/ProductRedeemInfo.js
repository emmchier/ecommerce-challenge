import React, { useContext, useState } from 'react';
import buyWhite from '../../assets/buy-white.svg';
import { UserContext } from '../contexts/UserContext';
import coin from '../../assets/icons/coin.svg';
import RedeemDialog from '../ui/RedeemDialog';
import DetailDialog from '../ui/DetailDialog';


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

    const { showSnack, setShowSnack } = useState(false);

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
                                productCategory={ productCategory }
                                setShowSnack={ setShowSnack }
                            />
                        }
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
