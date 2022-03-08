import React from 'react';

const CartComponent = (props: any) => {

    return(
        
        <div>
           
                    {props.cart.map((data:any) => {
                        return(
                            <div className="card mb-3" style={{maxWidth: '650px', marginTop: '20px', marginLeft: '10px'}}>
                            <div className="row g-0" >
                           
                            <div className="col-md-4" >
                              <img src='https://support.content.office.net/es-es/media/e8384959-ad1a-1b95-762b-2861496b886e.png' className="img-fluid rounded-start" alt="..." style={{height: '100%', width: '100%'}}/>
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                <a href="#" className="btn btn-primary" onClick={() => props.remove(props.cart.indexOf(data))}> Remove x</a>
                              </div>
                            </div>
                            </div>
                 </div>
                        )
                    })}
    
        </div>
    )
}

export default CartComponent;
