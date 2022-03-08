import React, {useContext} from 'react';
import Cart from '../cart/cart'
import shopContext from '../../context/shopContext';
import {Link} from 'react-router-dom'
//css
import './navbar.css'

const NavBarMain = (props:any) => {
  const state = useContext(shopContext)
  
    return(
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">VALENTINAL</a>
    <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    
      </ul>
      <ul style={{listStyle:'none'}}>
        <li>
        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
      </div>

    )
}

export default NavBarMain;