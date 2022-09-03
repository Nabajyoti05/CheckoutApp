import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Button, Card, CardBody, CardText, Col, FormGroup, Input, Label } from "reactstrap";

export default function ShippingInfoPage(props){

    const [checkedRadioS, setCheckedRadioS] = useState(true)
    const [checkedRadioF, setCheckedRadioF] = useState(false)
    const [previousPrice, setPreviousPrice] = useState(0)
    const [countType, setcountType] = useState('free')

    const shippingNavHandler = () => {
        props.setCustomerNav(false);
        props.setShippingNav(false);
        props.setPaymentNav(true);
    }

    const backSNavHandler = () => {
        props.setCustomerNav(true);
        props.setShippingNav(false);
        props.setPaymentNav(false);
    }

    const radioHandler=(mode,price) => {

        let totalPrice=props.totalPrice;
        console.log("total in price",props.totalPrice)

        if(mode == 'fast' && mode !== countType){
            setCheckedRadioF(true)
            setCheckedRadioS(false)
            totalPrice += price;

            setPreviousPrice(price)
            props.setTotalPrice(totalPrice)
            props.setShippingPrice(price);

            setcountType('fast')


        } else if(mode == 'free' && mode !== countType){
            setCheckedRadioF(false)
            setCheckedRadioS(true)
            totalPrice -= previousPrice;

            props.setTotalPrice(totalPrice)
            props.setShippingPrice(price);

            setcountType('free')
        }


        props.setTotalPrice(totalPrice);

    }

    return (
        <div style={{padding:0}}>
            <div>
                <FormGroup style={{padding:'40px 0px 10px 0px'}}>
                    <Label style={{fontSize:24}}>Shipping Information</Label>
                </FormGroup>
                <FormGroup style={{padding:'20px 0px 20px 0px'}}>
                    <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between'}}>
                        <div style={{color:'#abaeb3', fontSize:12, padding:'0px', border:'0.5px solid #abaeb3', width:'100%'}}>
                            <Card style={{padding:'20px 50px'}}>
                                <CardBody>
                                    <CardText>Jamy Larson</CardText>
                                    <CardText>Unit 2 Green Mount Retail Park</CardText>
                                    <CardText>Halifax</CardText>
                                    <CardText>HX1 5QN</CardText>
                                    <CardText>Tel: 0344 322 5931</CardText>
                                    <CardText>
                                        <span style={{fontWeight:600, color:'#166cf7', margin:'10px 10px 10px 0px'}}>Edit Address</span>
                                        <span style={{fontWeight:600, color:'#166cf7', margin:'10px 0px 10px 10px'}}>Add Address</span>
                                    </CardText>
                                </CardBody>
                            </Card>
                        </div>
                   
                        <div style={{color:'#abaeb3', fontSize:12, padding:'0px', border:'0.5px solid #abaeb3',width:'100%'}}>
                            <img src="https://s1.cdn.autoevolution.com/images/news/how-google-maps-knows-youre-braking-hard-so-it-can-find-safer-routes-162191_1.jpg" width={'100%'} height={'100%'}/>
                        </div>
                    </div>
                </FormGroup>
            </div>

            {/* shipping method */}
            <div>
                <FormGroup style={{padding:'40px 0px 10px 0px'}}>
                    <Label style={{fontSize:24}}>Shipping Method</Label>
                </FormGroup>
                <FormGroup style={{padding:'20px 0px 20px 0px'}}>
                    <div style={{display:'flex', flexDirection:'row', width:'100%'}}>
                        <div style={{color:'#abaeb3', fontSize:12,border:'0.5px solid #abaeb3', width:'100%'}}>
                            <Card style={{padding:30}}>
                                <CardBody>
                                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'8px 0px'}}>
                                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center',}}>
                                            <Input type="radio" name='radio1' checked={checkedRadioS} onClick={() => radioHandler('free',0)} style={{padding:'0px', margin:'0px 8px 0px 0px'}}/>
                                            <Label style={{fontSize:14,fontWeight:400, color:'black'}}>Standard Delivery</Label>
                                        </div>
                                        <Label style={{fontSize:14,fontWeight:600,color:'black'}}>Free</Label>
                                    </div>
                                    <CardText style={{padding:'0px 20px'}}>Estimated 14-20 Days Shipping (Duties and Taxes may be due upon delivery)</CardText>
                                </CardBody>
                            </Card>
                        </div>
                   
                        <div style={{color:'#abaeb3', fontSize:12,border:'0.5px solid #abaeb3', width:'100%'}}>
                            <Card style={{padding:30}}>
                                <CardBody>
                                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'8px 0px'}}>
                                        <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                                            <Input type="radio" name='radio1' checked={checkedRadioF} onClick={() => radioHandler('fast',8)} style={{padding:'0px', margin:'0px 8px 0px 0px'}}/>
                                            <Label style={{fontSize:14,fontWeight:400, color:'black'}}>Fast Delivery</Label>
                                        </div>
                                        <Label style={{fontSize:14,fontWeight:600,color:'black'}}>{'\u20AC'} 8</Label>
                                    </div>
                                    <CardText>Estimated 2-5 Days Shipping (Duties and Taxes may be due upon delivery)</CardText>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </FormGroup>

            </div>

            <FormGroup style={{display:'flex', flexDirection:'row', justifyContent:'space-between',padding:'20px 0px 20px 0px'}}>
                <div style={{display:'flex', flexDirection:'row',padding:'20px 0px', justifyContent:'space-around'}}>
                    <FiArrowLeft color='#abaeb3' style={{marginRight:10, padding:2}}/>
                    <Label style={{cursor:'pointer', color:'#abaeb3',borderRadius:4}} onClick={() => backSNavHandler()}>Return to Customer Info</Label>
                </div>
                <div>
                    <Button style={{color:'#fff', backgroundColor:'#166cf7', padding:20, border:'0px', borderRadius:'4px'}} onClick={() => shippingNavHandler()}>CONTINUE TO PAYMENT</Button>
                </div>
            </FormGroup>
        </div>
    )
}

