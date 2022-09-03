import React, { useEffect, useState } from "react";
import {FiChevronDown} from 'react-icons/fi'
import { Label } from "reactstrap";

export default function useCart(){
    const [cartItem, setCartItem] = useState([
        {
            name:'Lightweight College Backpack',
            price:99.90,
            image:'https://n3.sdlcdn.com/imgs/j/r/3/Ritzy-Blue-Polyester-College-Bag-SDL737142167-1-222b4.jpeg'
        },
        {
            name:'Business Casual Leather Watch Waterproof',
            price:69.90,
            image:'https://cdn.helioswatchstore.com/production/media/catalog/product/cache/dd1c3400e344f54d12df823ec560a116/t/1/t109_410_16_033_00.jpg'
        }
    ])

    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [shippingPrice, setShippingPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        
        setShippingPrice(0);

        let subTotalPrice = 0;
        cartItem.map((item) => {
            return subTotalPrice += item.price
        })

        setSubTotalPrice(subTotalPrice);

        let totalPrice = 0;

        if(shippingPrice != 0){
            totalPrice = subTotalPrice+shippingPrice
            setTotalPrice(totalPrice);
        } else {
            totalPrice = subTotalPrice
            setTotalPrice(totalPrice);
        }

    },[])

    const displayItem = cartItem.map((item, i) => {
        return (
            <div key={i} style={{display:'flex', flexDirection:'row',justifyContent:'flex-start', padding:'20px 0px'}}>
                <div style={{margin:'0px'}}>
                    <img src={item.image} width={70} height={70}/>
                </div>
                <div style={{margin:'0px 16px', display:'flex', flexDirection:'column',justifyContent:'space-around'}}>
                    <Label style={{color:'#abaeb3', fontSize:16}}>{item.name}</Label>
                    <Label style={{color:'#abaeb3', fontSize:16}}>{'\u20AC '}{item.price}</Label>
                </div>
            </div>
        )
    })

    return {
        subTotalPrice,
        totalPrice,
        setTotalPrice,
        setShippingPrice,
        render:(
        <div style={{backgroundColor:'#f7f7f7', height:'100%', padding:'30px 10% 0% 10%'}}>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'12px 0px'}}>
                <Label style={{fontSize:24}}>Shopping Cart</Label>
                <Label style={{fontSize:18, background:'#166cf7', borderRadius:'100%',padding:'5px', width:'25px', height:'25px',textAlign:'center', color:'#fff'}}>{cartItem.length}</Label>
            </div>
            <hr style={{border:'0.3px solid #dbdbdb'}}/>
            <div>
                {displayItem}
            </div>
            <hr style={{border:'0.3px solid #dbdbdb'}}/>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'12px 0px'}}>
                <Label style={{fontSize:18}}>Have a Voucher?</Label>
                <FiChevronDown />
            </div>
            <hr style={{border:'0.3px solid #dbdbdb'}}/>
            <div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'12px 0px'}}>
                    <Label style={{color:'#abaeb3',fontSize:18}}>Subtotal</Label>
                    <span>{'\u20AC '}{subTotalPrice.toFixed(2)}</span>
                </div>
                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'12px 0px'}}>
                    <Label style={{color:'#abaeb3', fontSize:18}}>Shipping</Label>
                    <span>{shippingPrice !== 0 ? '\u20AC ' :''}{shippingPrice !== 0 ? shippingPrice : 'Free'}</span>
                </div>
            </div>
            <hr style={{border:'0.3px solid #dbdbdb'}}/>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:'12px 0px'}}>
                <Label style={{fontSize:18}}>Total</Label>
                <span>{'\u20AC '}{totalPrice.toFixed(2)}</span>
            </div>

        </div>
    )}
}

