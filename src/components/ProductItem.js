import React from 'react'

export const ProductItem = ({ id, name, img }) => {

    return (
        <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="card animate__animated animate__fadeIn">
                <img 
                    src={ img } 
                    className="animate__animated animate__fadeInUp animate__faster animate__delay-0.2s" 
                    alt={ name }
                />
                <p className="animate__animated animate__fadeInUp animate__fast animate__delay-0.8s"> { name } </p>
            </div>
        </div>
    )
}
