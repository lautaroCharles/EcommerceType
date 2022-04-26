import React, {useContext, useState} from 'react';
import shopContext from '../../../context/shopContext';

const ProductInfo = (products:any) => {
    const state = useContext(shopContext)


    return(
        <div className="card" style={{marginTop: '40px', maxHeight:'400px', justifyContent:'space-between', flexDirection:'column', display: 'flex'}}>
         
            <div className="card-header" >
                Featured
            </div>
            <div className="card-body" >
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary" style={{justifyContent:'flex-end', display:'flex'}} onClick={() => state.addNew(products.pd)}>Go somewhere</a>
            </div>
        </div>
    )
}

export default ProductInfo;