import NavBar from '../components/navBar/navBar';
import { useLocation, useParams } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import shopContext from '../context/shopContext';
import Card from '../components/card/component/cardComponent';
import ImageProduct from '../components/productPageComponents/img/image.product';
import ProductInfo from '../components/productPageComponents/productInfo/productInfo';

const ProductPage = () => {
    const location:any = useLocation()
    const [locationurl, setLocationUrl] = useState('');
    const state = useContext(shopContext)
    const { id } = useParams();
    const product = state.list.find((p: any) => p.id === id)

    console.log(state.list)
    useEffect(() => {
        setLocationUrl(location)
    }, [])

    console.log(product)

    return(
        <div >
            <NavBar location={locationurl}/>
            
            <div className="row align-items-md-stretch">
            <div className="col-md-6">
                <ImageProduct products={product}/>
                </div>
           

                <div className="col-md-6">
                    <ProductInfo products={product}/>
            </div>
            </div>
           
        </div>
    )
}

export default ProductPage;