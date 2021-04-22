import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { postReedem } from '../../api/service';
import buyWhite from '../../assets/buy-white.svg';
import { UserContext } from '../contexts/UserContext';
import { CustomButton } from '../ui/CustomButton';
import { RedeemModal } from '../ui/RedeemModal';
import { Points } from '../user/Points';

export const ProductRedeemInfo = ( product ) => {

    const {
        productId,
        productName, 
        productCategory, 
        productCost, 
        productImg,
        productImgHd
    } = product;

    const { user, setUser } = useContext(UserContext);

    const { points } = user;

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    const handleRedeemProduct = () => {
        const refreshPoints = points - productCost
        setUser({ ...user, points: refreshPoints })
        postReedem( productId )
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
                        {
                            points < 0 
                            ? console.log('add points')
                            :  
                            <button 
                                className="btn btn-primary custom-btn"
                                data-toggle="modal" 
                                data-target="#exampleModal"
                                onClick={ ()=> { handleRedeemProduct() }}
                                >
                                Redeem Now
                            </button>
                        }
                    </div>
                    <Link className="btn-see-more" to={ `./product/${ productId }` }> See more </Link>
                </div>

            </div>
            {
                showModal &&
                <RedeemModal 
                    showModal={showModal}
                    setShowModal={setShowModal}
                    productCost={ productCost }
                    productName={ productName }
                />
            }
            
        </>
    )
}
