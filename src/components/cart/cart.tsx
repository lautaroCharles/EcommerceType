import React, {useState, useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cart = (props:any) => {
  console.log(props)
    return(   
        props.value.value === 0 ? <div></div> : 
              <span className="position-absolute translate-middle badge rounded-pill bg-danger">
    {props.value.value}
    <span className="visually-hidden">unread messages</span>
  </span>

    )
}

export default Cart