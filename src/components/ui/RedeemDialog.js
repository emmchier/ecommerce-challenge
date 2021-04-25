import React, { useContext, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { UserContext } from '../contexts/UserContext';
import buyBlue from '../../assets/buy-blue.svg';
import coin from '../../assets/icons/coin.svg';
import { CustomRedeemBtn } from './CustomRedeemBtn';
import { redeemProduct } from '../../actions/redeemProduct';
import { useFetch } from '../../hooks/useFetch';
import { SkeletonProduct } from '../skeletons/SkeletonProduct';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide 
            direction="down"
            ref={ref} {...props} />;
});

export default function RedeemDialog( props ) {

  const { 
    productId, 
    productCost, 
    productName, 
    productCategory, 
    productImgHd, 
    clasess,
    setShowSnack } = props;

  const [open, setOpen] = React.useState(false);

  const { loading } = useFetch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { user, setUser } = useContext(UserContext);

    const { points } = user;

    const hanbleRedeemOk = () => {
      redeemProduct(user, setUser, points, productCost, productId)
      handleClose();
    };

    const MainContainer = ({ children }) => <div className="redeem-modal-main-container">{children}</div>;
    const Title = ({ children }) => <div className="redeem-modal-title">{children}</div>;
    const Row = ({ children }) => <div className="row">{children}</div>;
    const Col_6 = ({ children }) => <div className="col-sm-12 col-md-6">{children}</div>;
    const ProductImage = () => <img src={ productImgHd } className="redeem-modal-img" alt="product image"/>;
    const BuyBlueImg = () => <img src={ buyBlue } className="store__product-buy-icon redeem-modal-buy-blue" alt="buy blue icon"/>;
    const RedeemContainer = ({ children }) => <div className="d-flex align-items-center"> { children } </div>;
    const Cost = ({ children }) => <p className="redeem-modal-cost"> { children } </p>;
    const Coin = () => <img src={ coin } className="redeem-modal-coin" alt="coin icon" />;
    const CostUnity = () => <p className="redeem-modal-unity">x 1</p>;
    const ProductName = ({ children }) => <h2 className="redeem-modal-product-name">{ children }</h2>;
    const ProductCategory = ({ children }) => <h4 className="redeem-modal-product-category">{ children }</h4>;
    const CloseIcon = ({ children }) => <div className="redeem-modal-close-icon" onClick={handleClose}>{ children }</div>;
  
  return (
    <div>
      {
        productCost < points &&
        <CustomRedeemBtn classes={ `btn-product-redeem ${clasess}` } onClick={handleClickOpen} />
      }
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description">
          <MainContainer>
          <CloseIcon><i className="material-icons">close</i></CloseIcon>
        <DialogTitle id="alert-dialog-title">
          <RedeemContainer>
            <BuyBlueImg></BuyBlueImg>
            <Title>{ "Use your points!" }</Title>
          </RedeemContainer>
        </DialogTitle>
        <DialogContent>
          <Row>
            <Col_6>
              { loading ? <SkeletonProduct /> 
                : <ProductImage></ProductImage>
              }
              
            </Col_6>
            <Col_6>
            <DialogContentText id="alert-dialog-description">
            <ProductName>{ productName }</ProductName>
            <ProductCategory>{ productCategory }</ProductCategory>
            <RedeemContainer>
              <Cost> { productCost } </Cost>
              <Coin></Coin>
              <CostUnity></CostUnity>
            </RedeemContainer>
          </DialogContentText>
          <CustomRedeemBtn classes={ 'redeem-modal-action' } onClick={hanbleRedeemOk} />
            </Col_6>
          </Row>
        </DialogContent>

          </MainContainer>
      </Dialog>
    </div>
  );
}
