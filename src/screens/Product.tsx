import NavBar from '../components/navBar/navBar';
import { useLocation, useParams } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import shopContext from '../context/shopContext';
import Card from 'components/card/component/cardComponent';
import ImageProduct from '../components/img/image.product';

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
                <ImageProduct/>
                </div>
           

                <div className="col-md-6">
                <h1>More data</h1>
            <p>
                    Data Data
                </p>                <p>
                    Data Data
                </p>                <p>
                    Data Data
                </p>                <p>
                    Data Data
                </p>                <p>
                    Data Data
                </p>
            </div>
            </div>
           
        </div>
    )
}

export default ProductPage;