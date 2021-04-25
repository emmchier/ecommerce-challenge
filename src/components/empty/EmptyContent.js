import React from 'react';
import { Link } from 'react-router-dom';
import EmptyIcon from '../../assets/empty-icon.svg';

export const EmptyContent = () => {
    return (
        <>
            <div className="row empty-container">
                <div className="col col-md-6">
                    <img src={ EmptyIcon } alt="icon representing empty list" />
                </div>
                <div className="col col-md-6 ">
                    <div className="container">
                        <h4 className="
                            animate__animated 
                            animate__fadeInUp
                            animate__faster">
                            Your redeemed products will appear here
                        </h4>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <h3 
                                className="
                                    animate__animated 
                                    animate__fadeInUp
                                    animate__fast">
                                    Reddem now!
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
