import React, { useState } from "react";
import { Modal, ModalBody, Nav, Navbar, NavItem} from "reactstrap";
import { NavLink } from "react-router-dom";
import CustomerInfoPage from "./CustomerInfo";
import PaymentInfoPage from "./PaymentInfo";
import ShippingInfoPage from "./ShippingInfo";

export default function CheckoutPage(props){

    const [customerNav, setCustomerNav] = useState(true)
    const [shippingNav, setShippingNav] = useState(false)
    const [paymentNav, setPaymentNav] = useState(false)



    return (
        <div style={{padding:'20px 10% 0% 10%'}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', textAlign:'center', padding:0, margin:'10px 0px'}}>
                <div style={{textDecoration:'none',fontSize:14, borderBottom:customerNav ?'1px solid black' : '1px solid #dbdbdb', color:customerNav ?'black' : '#dbdbdb',padding:24, width:'100%'}}>01 CUSTOMER INFO</div>
                <div style={{textDecoration:'none',fontSize:14, borderBottom:shippingNav ?'1px solid black' : '1px solid #dbdbdb', color:shippingNav ?'black' : '#dbdbdb',padding:24, width:'100%'}}>02 SHIPPING INFO</div>
                <div style={{textDecoration:'none',fontSize:14, borderBottom:paymentNav ?'1px solid black' : '1px solid #dbdbdb', color:paymentNav ?'black' : '#dbdbdb',padding:24, width:'100%'}}>03 PAYMENT SELECTION</div>
            </div>
            {customerNav ?  <CustomerInfoPage setCustomerNav={setCustomerNav} setShippingNav={setShippingNav} setPaymentNav={setPaymentNav}/> :  null}
            {shippingNav ?  <ShippingInfoPage setCustomerNav={setCustomerNav} setShippingNav={setShippingNav} setPaymentNav={setPaymentNav} totalPrice={props.totalPrice}  setTotalPrice={props.setTotalPrice} setShippingPrice={props.setShippingPrice}/> :  null}
            {paymentNav  ?  <PaymentInfoPage setCustomerNav={setCustomerNav} setShippingNav={setShippingNav} setPaymentNav={setPaymentNav}/> :  null}

        </div>
    )
}

