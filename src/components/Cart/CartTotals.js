import React from 'react';
import { ButtonContainer } from '../Button';

export default function CartTotals({value}) {
    const { cartSubtotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div clasName="container">
            <div className="row">
            <div className="col-10 mt-2 ml-sm-auto ml-md-auto
            col-sm-8 text-capitalize text-right mr-sm-auto mr-md-auto">
            <ButtonContainer className="btn btn-outline-danger text-uppercase mb-3 px-5"
            type="button"
            onClick={()=>clearCart()}>
                clear cart
            </ButtonContainer>
            <h5><span className="text-title">subtotal : <strong>
                $ {cartSubtotal}</strong></span></h5>

            <h5><span className="text-title">tax : <strong>
                $ {cartTax}</strong></span></h5>

            <h5><span className="text-title">total : <strong>
                $ {cartTotal}</strong></span></h5>
            </div>
            </div>
            </div>

        </React.Fragment>
    )
}
