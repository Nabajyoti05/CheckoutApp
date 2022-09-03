import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { BsCreditCard } from "react-icons/bs";
import { Button, Card, CardBody, CardText, FormGroup, Input, Label } from "reactstrap";

export default function PaymentInfoPage(props){

    const [checkedRadioS, setCheckedRadioS] = useState(true)
    const [checkedRadioF, setCheckedRadioF] = useState(false)

    const paymentNavHandler = () => {
        props.setCustomerNav(false);
        props.setShippingNav(false);
        props.setPaymentNav(true);
    }

    const backPNavHandler = () => {
        props.setCustomerNav(false);
        props.setShippingNav(true);
        props.setPaymentNav(false);
    }

    const radioHandler=(mode,price) => {


    }

    return (
        <div style={{padding:0}}>
            <FormGroup style={{padding:'40px 0px 10px 0px'}}>
                <Label style={{fontSize:24}}>Payment Selection</Label>
            </FormGroup>
            <div style={{display:'flex', flexDirection:'row', width:'100%'}}>

                <div style={{color:'#abaeb3', fontSize:12, padding:'20px 50px', border:'0.5px solid #abaeb3', width:'100%'}}>
                    <Card style={{padding:30}}>
                        <CardBody>
                            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'8px 0px'}}>
                                <div style={{display:'flex', flexDirection:'row', justifyContent:'center', textAlign:''}}>
                                    <Input type="radio" name='radio1' checked={checkedRadioS} onClick={() => radioHandler('free',0)} style={{padding:'0px', height:20, margin:'0px 8px 0px 0px'}}/>
                                    <Label style={{fontSize:16,fontWeight:400, color:'black'}}>Credit Card</Label>
                                </div>
                                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                    <img src="https://www.companieshistory.com/wp-content/uploads/2014/01/MasterCard1.png" width={40} height={20} style={{margin:'0px 2px'}}/>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png"  width={40} height={20} style={{margin:'0px 2px'}}/>
                                    <img src="https://cdn.icon-icons.com/icons2/1178/PNG/512/amex_82052.png" width={40} height={20} style={{margin:'0px 2px'}}/>
                                </div>
                            </div>
                            <CardText style={{padding:'0px 20px'}}>Safe money transfer using your bank account, VISA, Maestro, Discover, American Express.</CardText>
                            <FormGroup style={{padding:'20px 0px'}}>
                                <div style={{display:'flex', flexDirection:'column'}}>
                                    <Label style={{color:'#abaeb3'}}>CARD NUMBER</Label>
                                    <div style={{display:'flex', flexDirection:'column'}}>
                                        <Input style={{padding:'15px 20px',border:' solid #abaeb3',borderRadius:4}} placeholder="0000 0000 0000 0000" />
                                        <BsCreditCard size={30} style={{position:'relative', left:600, top:-40}}/>
                                    </div>
                                </div>
                            </FormGroup>
                            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'8px 0px'}}>
                                <FormGroup style={{padding:'20px 0px', display:'flex', flexDirection:'column', width:'50%'}}>
                                    <Label>NAME ON CARD</Label>
                                    <Input style={{padding:'15px 10px', border:' solid #abaeb3',borderRadius:4, width:'100%'}}/>
                                </FormGroup>

                                <FormGroup style={{padding:'20px 0px',display:'flex', flexDirection:'column', width:'20%',}}>
                                    <Label>EXPIRY DATE</Label>
                                    <Input style={{padding:'15px 10px', border:' solid #abaeb3',borderRadius:4, width:'100%'}} placeholder="MM/YY"/>
                                </FormGroup>

                                <FormGroup style={{padding:'20px 0px',display:'flex', flexDirection:'column', width:'20%',}}>
                                    <Label>CVV CODE</Label>
                                    <Input style={{padding:'15px 10px', border:' solid #abaeb3',borderRadius:4, width:'100%'}}/>
                                </FormGroup>
                            </div>
                        </CardBody>
                    </Card>
                </div>

            </div>

            <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
                <div style={{color:'#abaeb3', fontSize:12, padding:'20px 50px', border:'0.5px solid #abaeb3', width:'100%'}}>
                <Card style={{padding:30}}>
                        <CardBody>
                            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'0px', alignItems:'center'}}>
                                <div style={{display:'flex', flexDirection:'row', justifyContent:'center',}}>
                                    <Input type="radio" name='radio1' checked={checkedRadioS} onClick={() => radioHandler('free',0)} style={{padding:'0px', margin:'0px 8px 0px 0px'}}/>
                                    <Label style={{fontSize:14,fontWeight:400, color:'black'}}>PayPal</Label>
                                </div>
                                <img src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png" width={70} height={40}/>
                            </div>
                            <CardText style={{padding:'0px 20px'}}>You will be redirected to PayPal website to complete your purchase securely.</CardText>
                        </CardBody>
                    </Card>
                </div>
            
                
            </div>

            <FormGroup style={{display:'flex', flexDirection:'row', justifyContent:'space-between',padding:'20px 0px 20px 0px'}}>
                <div style={{display:'flex', flexDirection:'row',padding:'20px 0px', justifyContent:'space-around'}}>
                    <FiArrowLeft color='#abaeb3' style={{marginRight:10, padding:2}}/>
                    <Label style={{cursor:'pointer', color:'#abaeb3',borderRadius:4}} onClick={() => backPNavHandler()}>Back to Shipping Info</Label>
                </div>
                <div>
                    <Button style={{color:'#fff', backgroundColor:'#166cf7', padding:20, border:'0px', borderRadius:'4px'}} onClick={() => paymentNavHandler()}>COMPLETE ORDER</Button>
                </div>
            </FormGroup>
        </div>
    )
}

