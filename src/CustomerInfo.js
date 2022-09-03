import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import {FiArrowLeft} from 'react-icons/fi'

export default function CustomerInfoPage(props){

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [address, setAddress] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [pincode, setPincode] = useState('')
    const [phone, setPhone] = useState(null)

    const customerNavHandler = () => {
        props.setCustomerNav(false);
        props.setShippingNav(true);
        props.setPaymentNav(false);
    }

    const backCNavHandler = () => {
        props.setCustomerNav(true);
        props.setShippingNav(false);
        props.setPaymentNav(false);
    }

    const onChangefname = (e) => {
        setFname(e.target.value)
    }
    const onChangelname = (e) => {
        setLname(e.target.value)
    }
    const onChangeAddress = (e) => {
        setAddress(e.target.value)
    }
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeCity = (e) => {
        setCity(e.target.value)
    }
    const onChangePincode = (e) => {
        setPincode(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }
    
    return (
        <div style={{padding:0}}>
            <Form>
                <FormGroup style={{padding:'40px 0px 10px 0px'}}>
                    <Label style={{fontSize:24}}> Customer Information</Label>
                </FormGroup>
                <FormGroup style={{display:'flex', flexDirection:'row',padding:'20px 0px 20px 0px'}}>
                    <div style={{display:'flex', flexDirection:'column', width:'50%', padding:'0px 10px 0px 0px'}}>
                        <Label style={{color:'#abaeb3'}}>FIRST NAME</Label>
                        <Input type="text" onChange={(e) => onChangefname(e)} style={{padding:'15px 20px', border:' solid #abaeb3',borderRadius:4}}/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', width:'50%', padding:'0px 0px 0px 10px'}}>
                        <Label style={{color:'#abaeb3'}}>LAST NAME</Label>
                        <Input type="text" onChange={(e) => onChangelname(e)} style={{padding:'15px 20px', border:' solid #abaeb3', borderRadius:4}}/>
                    </div>
                </FormGroup>

                <FormGroup style={{padding:'20px 0px 20px 0px'}}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <Label style={{color:'#abaeb3'}}>ADDRESS</Label>
                        <Input type="text" onChange={(e) => onChangeAddress(e)} style={{padding:'15px 20px', border:' solid #abaeb3',borderRadius:4}}/>
                    </div>
                </FormGroup>
                <FormGroup style={{display:'flex', flexDirection:'row', padding:'20px 0px 20px 0px'}}>
                    <div style={{display:'flex', flexDirection:'column', width:'50%', padding:'0px 10px 0px 0px'}}>
                        <Label style={{color:'#abaeb3'}}>COUNTRY</Label>
                        <Input onChange={(e) => onChangeCountry(e)} type="select" style={{padding:'15px 20px', border:' solid #abaeb3',borderRadius:4}}>
                            <option>--select--</option>
                            <option>India</option>
                            <option>USA</option>
                            <option>UK</option>
                            <option>Austrlia</option>
                            <option>Srilanka</option>
                            <option>Japan</option>
                        </Input>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', width:'50%', padding:'0px 0px 0px 10px'}}>
                        <Label style={{color:'#abaeb3'}}>CITY</Label>
                        <Input type="text" onChange={(e) => onChangeCity(e)} style={{padding:'15px 20px', border:' solid #abaeb3',borderRadius:4}}/>
                    </div>
                </FormGroup>
                <FormGroup style={{display:'flex', flexDirection:'row', padding:'20px 0px 20px 0px'}}>
                    <div style={{display:'flex', flexDirection:'column', width:'50%', padding:'0px 10px 0px 0px'}}>
                        <Label style={{color:'#abaeb3'}}>POSTAL CODE</Label>
                        <Input type="text" onChange={(e) => onChangePincode(e)} style={{padding:'15px 20px', border:' solid #abaeb3',borderRadius:4}}/>
                    </div>
                    <div style={{display:'flex', flexDirection:'column', width:'50%', padding:'0px 0px 0px 10px'}}>
                        <Label style={{color:'#abaeb3'}}>PHONE</Label>
                        <Input type="number" onChange={(e) => onChangePhone(e)} style={{padding:'15px 20px', border:' solid #abaeb3',borderRadius:4}}/>
                    </div>
                </FormGroup>
                <FormGroup style={{display:'flex', flexDirection:'row', justifyContent:'space-between',padding:'20px 0px 20px 0px'}}>
                    <div style={{display:'flex', flexDirection:'row',padding:'20px 0px', justifyContent:'space-around'}}>
                        <FiArrowLeft color='#abaeb3' style={{marginRight:10, padding:2}}/>
                        <Label style={{cursor:'pointer', color:'#abaeb3',borderRadius:4}} onClick={() => backCNavHandler()}>Return to Shop</Label>
                    </div>
                    <div>
                        <Button style={{color:'#fff', backgroundColor:'#166cf7', padding:20, border:'0px', borderRadius:'4px'}} onClick={() => customerNavHandler()}>CONTINUE TO SHIPPING</Button>
                    </div>
                </FormGroup>
                
            </Form>
        </div>
    )
}

