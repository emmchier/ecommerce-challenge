import React, { useContext } from 'react';
import { postReedem } from '../../api/service';
import buyWhite from '../../assets/buy-white.svg';
import { UserContext } from '../contexts/UserContext';
import { CustomButton } from '../ui/CustomButton';
import { CustomLinkButton } from '../ui/CustomLinkButton';
import { Points } from '../user/Points';

export const ProductRedeemInfo = ({ productId, category, productCost }) => {

    const { user, setUser } = useContext(UserContext);

    const { points } = user;

    const handleRedeemProduct = () => {
        const refreshPoints = points - productCost
        setUser({ ...user, points: refreshPoints })
        postReedem(productId)
    };
   
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
                            onClick={ ()=> { handleRedeemProduct() } }
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
