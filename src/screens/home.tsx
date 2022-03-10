import React, {useState, useContext, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
//context
import shopContext from '../context/shopContext';
import NavBar from '../components/navBar/navBar';
import Card from '../components/card/component/cardComponent'
import UploadForm from '../components/uploadForm/uploadForm';
import index from '../index.css'
import img from '../logo.svg'
import img02 from '../favicon.svg'



const Home = (props:any) => {
  
  const state = useContext(shopContext)
  const [locationurl, setLocationUrl] = useState('')
  const location = useLocation()

console.log(state)
  const products: any = [
    { id: "p1", title: "Gaming Mouse", price: 29.99, img: img },
    { id: "p2", title: "Harry Potter 3", price: 9.99, img: img02 },
    { id: "p3", title: "Used plastic bottle", price: 0.99, img: img },
    { id: "p4", title: "Half-dried plant", price: 2.99, img: img }
  ]
  useEffect(() => {
    state.setList(products)
  },[])
  useEffect(() => {
    setLocationUrl(location.pathname)
  }, [])
  console.log(state.appstate.cart.length)
  return (
        <div>
          <NavBar value={state.appstate.cart.length} location={locationurl}/>
        <div>
        {/*<UploadForm/>*/}
        
        <Card list={state.list} location={locationurl}/>
        
        </div>
      </div>
      )}

export default Home;