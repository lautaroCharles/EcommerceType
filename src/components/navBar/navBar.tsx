import React, {useContext} from 'react';
import Cart from '../cart/cart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import shopContext from '../../context/shopContext';
import {Link} from 'react-router-dom'
//css
import './navbar.css'
import NavBarCart from './navBar.cart';
import NavBarMain from './navBar.main';
import NavBarProducts from './navBar.procuts';

const NavBar = (props:any) => {
  const state = useContext(shopContext)
  if(props.location === '/main'){
    return(
      <NavBarProducts value={props.value}/>
    )}
    if(props.location === '/'){
      return(
        <NavBarMain/>
      )
    }
    else{
      return(
        <NavBarCart/>
      )
    }
  
}

export default NavBar;