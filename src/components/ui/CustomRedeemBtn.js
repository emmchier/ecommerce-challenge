import React from 'react';
import { CustomButton } from './CustomButton';

export const CustomRedeemBtn = ({ onClick, classes }) => {
    return (
        <CustomButton
            btnTitle={ 'Redeem Now' }
            classes={ `btn-redeem ${ classes }` } 
            onClick={ onClick } />
    )
}
