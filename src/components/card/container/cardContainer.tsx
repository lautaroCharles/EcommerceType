//vendors
import React, {useMemo, useEffect, useContext} from 'react';
//context
import { AppContext } from '../../../context/context';
//handlers
import {AlphabeticalOrderName, FoundedOrderNewer, FoundedOrderOlder ,handleMainFetch, IndustriesFilter, handleNewFetch} from '../../../helpers/mainHelper';
//constants
//import { WEBSITE } from 'constants/mainConstants';
//component
//import Loader from 'components/loader/loader';

const Card = () => {
        const state = useContext(AppContext);

        const handlerFoundedOrderNewer =  useMemo(() => FoundedOrderNewer({fetching: state.fetching}), [state.fetching]);
        const handlerAlphabeticalOrderName = useMemo(() => AlphabeticalOrderName({fetching: state.fetching}), [state.fetching]);
        const handlerFoundedOrderOlder = useMemo(() => FoundedOrderOlder({fetching: state.fetching}), [state.fetching]);
        const handlerIndustriesFilter = useMemo(() => IndustriesFilter({industries: state.industries, fetching: state.fetching}), [state.industries, state.fetching]);
        useEffect(() => {
            handleMainFetch({setFilter: state.setFilter, setFetching: state.setFetching})
            handleNewFetch({setNewFetching: state.setNewFetching})
        }, [])
        

function Capitalize(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
}

    return (
        <div className="row" >
            {(() => {
                switch(state.filter){
                    case 'state':
                        return(
                            state.fetchingNew.map((data: any) => {
                                return(
                                    <div className="card-group">
                                        <div className="card">
                                            <img src="..." className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                            <h5 className="card-title">{data.name}</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    case 'loading':
                        return(
                            handlerFoundedOrderNewer.map((data: any) => {
                                return(
                                    <div className="col-sm-6" >
                                        <div className="card" style={{height:'180px', marginTop:'20px'}}>
                                            <div className="card-body" >
                                                <h5 className="card-title">{data.name}</h5>
                                                    <p className="card-text">{data.founded}</p>
                                                            <span className="badge rounded-pill bg-light text-dark">{data.industry}</span>
                                                            <span className="badge rounded-pill bg-light text-dark">{data.size}</span>
                                                            <a className='align-right' onClick={() => window.open('https://' + data.website, "_blank")}>Pagina</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        )
                    case 'New':
                        return(
                            handlerFoundedOrderNewer.map((data:any) => 
                                { 
                                return(
                                    <div className="col-sm-6" >
                                        <div className="card" style={{height:'180px', marginTop:'20px'}}>
                                            <div className="card-body" >
                                                <h5 className="card-title">{data.name}</h5>
                                                    <p className="card-text">{data.founded}</p>
                                                    <span className="badge rounded-pill bg-light text-dark">{data.industry}</span>
                                                            <span className="badge rounded-pill bg-light text-dark">{data.size}</span>
                                                    <a className='align-right' onClick={() => window.open('https://' + data.website, "_blank")}>Pagina</a>
                                            </div>
                                        </div>
                                    </div>
            
                                )
                            })
                        )
                        case 'Older':
                            return(
                                handlerFoundedOrderOlder.map((data: any) => 
                                    { 
                                    return(
                                        <div className="col-sm-6" >
                                            <div className="card" style={{height:'180px', marginTop:'20px'}}>
                                                <div className="card-body" >
                                                    <h5 className="card-title">{data.name}</h5>
                                                        <p className="card-text">{data.founded}</p>
                                                        <span className="badge rounded-pill bg-light text-dark">{data.industry}</span>
                                                            <span className="badge rounded-pill bg-light text-dark">{data.size}</span>
                                                        <a className='align-right' onClick={() => window.open('https://' + data.website, "_blank")}>Pagina</a>
                                                </div>
                                            </div>
                                        </div>
                
                                    )
                                })
                            )
                        case 'Alphabetical':
                            return(
                                handlerAlphabeticalOrderName.map((data:any) => 
                                    { 
                                    return(
                                        <div className="col-sm-6" >
                                            <div className="card" style={{height:'180px', marginTop:'20px'}}>
                                                <div className="card-body" >
                                                    <h5 className="card-title">{data.name}</h5>
                                                        <p className="card-text">{data.founded}</p>
                                                        <span className="badge rounded-pill bg-light text-dark">{data.industry}</span>
                                                            <span className="badge rounded-pill bg-light text-dark">{data.size}</span>
                                                        <a className='align-right' onClick={() => window.open('https://' + data.website, "_blank")}>Pagina</a>
                                                </div>
                                            </div>
                                        </div>
                
                                    )
                                })
                            )
                            case 'Industry':
                                return(
                                    handlerAlphabeticalOrderName.map((data:any) => 
                                        { 
                                        return(
                                            <div className="col-sm-6" >
                                                <div className="card" style={{height:'180px', marginTop:'20px'}}>
                                                    <div className="card-body" >
                                                        <h5 className="card-title">{data.name}</h5>
                                                            <p className="card-text">{data.founded}</p>
                                                            <span className="badge rounded-pill bg-light text-dark">{data.industry}</span>
                                                            <span className="badge rounded-pill bg-light text-dark">{data.size}</span>
                                                            <a className='align-right' onClick={() => window.open('https://' + data.website, "_blank")}>Pagina</a>
                                                    </div>
                                                </div>
                                            </div>
                    
                                        )
                                    })
                                )
                                case 'Search':
                                    return(
                                        handlerIndustriesFilter.map((data:any) => {
                                            return(
                                                <div className="col-sm-6" >
                                                    <div className="card" style={{height:'180px', marginTop:'20px'}}>
                                                        <div className="card-body" >
                                                            <h5 className="card-title">{data.name}</h5>
                                                                <p className="card-text">{data.founded}</p>
                                                                <span className="badge rounded-pill bg-light text-dark">{data.industry}</span>
                                                                <span className="badge rounded-pill bg-light text-dark">{data.size}</span>
                                                                <a className='align-right' onClick={() => window.open('https://' + data.website, "_blank")}>Pagina</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    )
                }
            }
            )
         ()}
                    </div>
    );
};

export default Card;