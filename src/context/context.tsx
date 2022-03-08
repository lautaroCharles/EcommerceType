/*import React ,{createContext, useState, useReducer} from 'react';
import {shopReducer, ADD_PRODUCT, REMOVE_PRODUCT} from './reducer'

export const AppContext = createContext({
      cart: [],
      addProductToCart: (product: any, state: any) => {},
      removeProductFromCart: (productId:any, state: any) => {}
} as any);

export function AppWrapper({ children}: any){
  

    const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });
    const addProductToCart = (product:any) => {
        setTimeout(() => {
          // setCart(updatedCart);
          dispatch({ type: ADD_PRODUCT, product: product });
        }, 700);
      };
    
      const removeProductFromCart = (productId: any) => {
        setTimeout(() => {
          // setCart(updatedCart);
          dispatch({ type: REMOVE_PRODUCT, productId: productId });
        }, 700);
      };
    const [filter, setFilter] = useState('state');
    const [name, setName] = useState([]);
    const [industries, setIdustries] = useState([]);
    //fetchß
    const [fetching, setFetching] = useState([{}])
    const [fetchingNew, setNewFetching] = useState([{}])
    const [color, setColor] = useState('black')
    const [numberCart, setNumberCart] = useState(0);

//filter, setFilter, fetching, setFetching, name, setName, industries, setIdustries, fetchingNew, setNewFetching,
    return(
        <AppContext.Provider value={{ cart: cartState,
             addProductToCart,
             removeProductFromCart}}>
            {children}
        </AppContext.Provider>
    );
}*/

/*
import React, { useState, useReducer } from "react";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducer";
import shopContext from "./shopContext";

export const GlobalState = (props:any) => {

  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = (product:any) => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };

  const removeProductFromCart = (productId: any) => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <shopContext.Provider
      value={{
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </shopContext.Provider>
  );
};
*/

import React, {useState} from 'react'
import listContext from './shopContext';
 
function Store({children}:any){

  // the app's initial state

  const initialState = { 

    cart:[],

    cartCount:0,

    addNew: addNew,
    removePd: removePd
    
    }

    //initiate app state with initialstates

    const [ appstate, setState ] = useState(initialState);
    const [list, setList] = useState([]);
    
    // pass the state as context's value
    
  return(
    <listContext.Provider value={{appstate, list, setList}}>
      {children}
    </listContext.Provider>
  )

  ////// add new product to cart and update cart count

  function addNew(pd:any){
      let newList: any = appstate.cart;
  
      const newItem = {
        count:1,
        id:pd.id,
        name:pd.title,
        price: pd.price
      }
  
      const filtered = newList.filter((i:any) =>{
        return i.id === pd.id;
      });
  
      if(filtered.length > 0){
        const pos = newList.map((i:any) => { return i.id; }).indexOf(pd.id);
        newList[pos].count += 1;
      }else{
        newList.push(newItem);
      }
      
      setState({...appstate, cart:newList, cartCount:getCartCount()});

    }
  
    ////// remove product from cart and update cart count
  
    function removePd(indx:any){
      const cartList = appstate.cart;
  
      cartList.splice(indx,1);
  
      setState({...appstate, cart:cartList, cartCount:getCartCount()});
    }

    ////// function to get the number of products in cart

    function getCartCount(){

      let cnt = 0;
  
      if(appstate.cart.length > 0){
  
        appstate.cart.forEach((item:any) => {
        cnt += item.count;
        });
        
      }

      return cnt;

    }
  
}

export default Store;