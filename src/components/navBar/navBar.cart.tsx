import {useContext} from 'react';
import shopContext from '../../context/shopContext';
import {useNavigate} from 'react-router-dom'
//css
import './navbar.css'
import { Link } from 'react-router-dom'
import Cart from '../cart/cart'

const NavBarCart = (props:any) => {
  const state = useContext(shopContext)
  const navigate = useNavigate()

    return(
      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" onClick={() => navigate(-1)}>
            
            <svg viewBox="0 0 448 512" style={{width:'25px'}}><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
           
            </a>
            <div>
        
              <ul style={{listStyle:'none'}}>
              <li>
          <Link to='/cart'>
        <svg viewBox="0 0 576 512" style={{width:'25px'}}><path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"/></svg><Cart value={props}/> 
        </Link>
        </li>
              </ul>
              
            </div>
          </div>
        </nav>  
       
      </div>

    )
}

export default NavBarCart;