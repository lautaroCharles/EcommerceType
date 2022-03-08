import React, {useContext, useEffect, useState} from 'react';
import listContext from '../context/shopContext';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/navBar/navBar';
import CartComponent from '../components/cart/cart.component';

const Cart = () => {
    const [locationurl, setLocationUrl] = useState('')
    const state = useContext(listContext);
    const location = useLocation();
    console.log(state.appstate.cart.length)
    useEffect(() => {
        setLocationUrl(location.pathname)
    }, [])
    return(
        <div>
            <NavBar location={locationurl}/>
            <h1 style={{color:'white'}}>Cart:</h1>
            <CartComponent cart={state.appstate.cart} remove={state.appstate.removePd}/>
        </div>
    )
}

export default Cart;
