import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import shopContext from '../../../context/shopContext'
import img from '../../../logo.svg'
interface Data {
    title: String,
    price: number
}

const Card = (props: any) => {
    const state = useContext(shopContext)
    
    return(
        <div className="row">
        {state.list.map((data:any) => {
            return(
                <div className="col-sm-4">
                    <Link to={`/main/${data.id}`}>
            <div className="card" style={{height:'300px', marginTop:'20px'}}>
            <img src='https://support.content.office.net/es-es/media/e8384959-ad1a-1b95-762b-2861496b886e.png' className="card-img-top" alt="..." style={{height: '140px', borderRadius: '10px'}}/>
                <div className="card-body" >
                     <h5 className="card-title">{data.title}</h5>
                     <p className="card-text">${data.price}</p>
                     <span className="badge rounded-pill bg-light text-dark">props</span>
                </div>
            </div>
            </Link>
        </div>
            )
        })}
        </div>
    )
}

export default Card;