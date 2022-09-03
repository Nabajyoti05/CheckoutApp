import logo from './logo.svg';
import './App.css';
import useCart from './CartPage';
import CheckoutPage from './CheckoutPage';

function App() {
  const {render, subTotalPrice, totalPrice, setTotalPrice, setShippingPrice} = useCart();
  return (
    <div style={{height:"100vh", display:'flex', flexDirection:'row'}}>
      <div style={{width:'70%'}}>
        <CheckoutPage {...{subTotalPrice, totalPrice,  setTotalPrice, setShippingPrice}}/>
      </div>
      <div style={{width:'30%'}}>
          {render}
      </div>
    </div>
  );
}

export default App;
