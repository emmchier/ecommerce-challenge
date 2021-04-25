import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import coin from '../../assets/icons/coin.svg';
import { UserContext } from '../contexts/UserContext';

export default function DetailDialog(props) {

  const { 
    productId, 
    productCost, 
    productName, 
    productCategory, 
    productImgHd, 
    clasess } = props;

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const { user, setUser } = useContext(UserContext);

  const { points } = user;

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const MainContainer = ({ children }) => <div className="redeem-modal-main-container">{children}</div>;
  const Title = ({ children }) => <div className="redeem-modal-title">{children}</div>;
  const ProductImage = () => <img src={ productImgHd } className="detail-dialog-img" alt="product image"/>;
  const RedeemContainer = ({ children }) => <div className="d-flex align-items-center"> { children } </div>;
  const Cost = ({ children }) => <p className="detail-dialog-cost"> { children } </p>;
  const Coin = () => <img src={ coin } className="redeem-modal-coin" alt="coin icon" />;
  const CostUnity = () => <p className="redeem-modal-unity">points</p>;
  const ProductName = ({ children }) => <h2 className="redeem-modal-product-name">{ children }</h2>;
  const ProductCategory = ({ children }) => <h4 className="redeem-modal-product-category">{ children }</h4>;
  const CloseIcon = ({ children }) => <div className="redeem-modal-close-icon" onClick={handleClose}>{ children }</div>;


  return (
    <div>
      <Button onClick={handleClickOpen('body')}>See more</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description">
        
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description">
              <CloseIcon><i className="material-icons">close</i></CloseIcon>
              <p className="detail-dialog-text">New | 411 Sales</p>
              <ProductImage></ProductImage>
              <p className="detail-dialog-text detail-dialog-category"> { productCategory } </p>
              <h2 className="detail-dialog-product-name"> { productName } </h2>
              <div className="d-flex align-items-center">
                {
                  [...new Array(4)].map((n) => <i key={ n } className="material-icons rate-icon">star_purple500</i>)
                }
                <p className="detail-dialog-text detail-dialog-opinions">4 Opinions</p>
              </div>
              <div className="detail-container-cost">
                <div className="d-flex align-items-center">
                  <p className="detail-dialog-text detail-dialog-cost-dues">$ </p><Cost> { productCost } </Cost>
                </div>
                <div className="d-flex align-items-center">
                  <p className="detail-dialog-text detail-dialog-dues">in <span>12</span>x</p> <p className="detail-dialog-text detail-dialog-cost-dues">$</p><p className="detail-dialog-cost-dues">{ parseInt(productCost / 12) }</p>
                </div>
              </div>
              <h5>Description</h5>
              <p className="detail-dialog-description detail-dialog-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting.</p>
              <h4 className="detail-dialog-return-title">Free Return</h4>
              <p className="detail-dialog-text">You have 30 days of refund since you receive it.</p>
              <h3 className="detail-dialog-redeem-title">You still have to redeem</h3>
              <RedeemContainer>
                <div className="detail-dialog-still-points"> { points } </div>
                <Coin></Coin>
              </RedeemContainer>
              
          </DialogContentText>
        </DialogContent>

      </Dialog>
    </div>
  );
}
