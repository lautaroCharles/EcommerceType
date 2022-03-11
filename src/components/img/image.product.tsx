import React, {useContext, useState} from 'react';
import shopContext from '../../context/shopContext';
import './image.product.css'

const ImageProduct = () => {
    const state = useContext(shopContext)
    const [imgNew, setImgNew] = useState()

    console.log(imgNew)

    return(
        <div className="horizontal">
            <ul className='horizontal-list'>
                <li>
            {
                state.list.map((data:any) => {
                    return(
                        <div>
                            <ul style={{listStyle: 'none'}}>
                                <li>
                                <img src={data.img} style={{height: '70px', paddingBottom: '20px'}} onMouseEnter={() => setImgNew(data.img)}/>
                                </li>
                            </ul>
                        </div>
                    )
                })
            }
            </li>
            <li>
                <ul >
                    <li style={{display: 'inline'}}>
                      <img src={imgNew} style={{height: '200px', marginTop: '-280px', marginLeft:'80px'}}/>
                    </li>
                </ul>
                </li>
                </ul>
        </div>
    )
}

export default ImageProduct;