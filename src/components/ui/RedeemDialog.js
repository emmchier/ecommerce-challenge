import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { CardMedia } from '@material-ui/core';
import { postReedem } from '../../api/service';
import { UserContext } from '../contexts/UserContext';
import buyBlue from '../../assets/buy-blue.svg';
import coin from '../../assets/icons/coin.svg';
import Icon from '@material-ui/core/Icon';
import { CustomRedeemBtn } from './CustomRedeemBtn';
import { redeemProduct } from '../../actions/redeemProduct';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide 
            direction="down"
            ref={ref} {...props} />;
});

export default function RedeemDialog( props ) {

  const { productId, productCost, productName, productImg, productImgHd, clasess } = props;
  const [open, setOpen] = React.useState(false);

  console.log(productImgHd);

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
    

    // const handleRedeemProduct = () => {
    //     const refreshPoints = points - productCost
    //     setUser({ ...user, points: refreshPoints });
    //     postReedem( productId );
    // };

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
    const CloseIcon = ({ children }) => <div className="redeem-modal-close-icon" onClick={handleClose}>{ children }</div>;
  
  return (
    <div>
      <CustomRedeemBtn classes={ `btn-product-redeem ${clasess}` } onClick={handleClickOpen} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description">
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
              <ProductImage></ProductImage>
            </Col_6>
            <Col_6>
            <DialogContentText id="alert-dialog-description">
            <ProductName>{ productName }</ProductName>
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
      </Dialog>
    </div>
  );
}
