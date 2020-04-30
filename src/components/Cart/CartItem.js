import React from 'react'
import { AddButtonContainer } from '../Button';

export default function CartItem({item,value}) {
    const{id,title,img,price,total,count} = item;
    const{increment,decrement,removeItem} =value;
    return (
    <div className="container">
    <div className="row my-3 text-capitalize text-center">       
        <div className="col-10 mx-auto col-lg-2">
            <img src={img} style={{width:'5rem', height:'5rem'}}
                className="img-fluid"
                alt="product" />
        </div>

        <div className="col-10 mx-auto col-lg-2 cfont">
        {title}
        </div>

        <div className="col-10 mx-auto col-lg-2 cfont">
        {price}
        </div>

        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
        <div>
            <AddButtonContainer onClick={()=>
            decrement(id)}>-     
            </AddButtonContainer>
            <AddButtonContainer>{count}
            </AddButtonContainer>
            <AddButtonContainer onClick={()=>
            increment(id)}>+     
            </AddButtonContainer>
        </div>
            </div>
        </div> 
        <div className="col-10 mx-auto col-lg-2 cfont">
        <div className="card-icon" onClick={()=>removeItem(id)}>
        <i className="fas fa-trash"></i>   
        </div>
        </div>

        <div className="col-10 mx-auto col-lg-2">
        <strong>item total : ${total} </strong>
        </div>
        
        </div>
    </div>
    )
}
