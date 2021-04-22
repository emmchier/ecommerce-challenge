import React, { useContext } from 'react';
import { postReedem } from '../../api/service';
import blueWhite from '../../assets/buy-blue.svg';
import coin from '../../assets/icons/coin.svg';
import { UserContext } from '../contexts/UserContext';

export const RedeemModal = ( product, {showModal}) => {

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

    const handleRedeemProduct = () => {
        const refreshPoints = points - productCost;
        setUser({ ...user, points: refreshPoints });
        postReedem( productId );
        console.log(productId);

    };

    console.log(handleRedeemProduct);

    return (
        <>
        {    
           !showModal ?
            <div class="modal fade" id="exampleModal" ole="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content modal-redeem">
                    <div class="btn-close-redeem" data-dismiss="modal" aria-label="Close">
                        <i className="material-icons">close</i>
                    </div>
                        {/* <img 
                            src={ blueWhite } 
                            className="store__redeem-buy-icon" 
                            alt="buy blue icon"
                        /> */}
                        {/* <div className="col sm-12 md-6">
                            <img 
                                src={ productImgHd } 
                                className="getSrc img-modal
                                    store__product-card-img"
                                alt="product image"
                            />
                        </div>
                        <div className="col sm-12 md-6"> */}
                            <h3>Use your points!</h3>
                            <h2> { productName } </h2>
                            <div className="container-points d-flex align-items-center">
                                <p className="modal-cost"> { productCost } </p>
                                <img src={ coin } className="coin-icon" alt="coin icon"/>
                                <p className="modal-unity">x 1</p>
                            </div>
                            
                            <button 
                                className="btn btn-primary custom-btn"
                                data-dismiss="modal" 
                                aria-label="Close"
                                onClick={ handleRedeemProduct }>
                                Yes, Redeem!
                            </button>
                        </div>
                    {/* </div> */}
                </div>
            </div>  : null
        }
        </>
    )
}
