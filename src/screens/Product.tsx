import NavBar from '../components/navBar/navBar';
import { useLocation, useParams } from 'react-router-dom';
import React, { useEffect, useState, useContext } from 'react';
import shopContext from '../context/shopContext';

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

    return(
        <div>
            <NavBar location={locationurl}/>
            <h1 style={{color: 'white'}}>{product.title}</h1>

        </div>
    )
}

export default ProductPage;