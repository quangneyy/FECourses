import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import './Loading.scss'

const Loading = (props) => {
    const {isLoading} = useSelector(state => state.Loading)
   
    return (
        <Fragment>
            {isLoading ?  <div className="spinner-box">
        <div className="blue-orbit leo">
        </div>
      
        <div className="green-orbit leo">
        </div>
        
        <div className="red-orbit leo">
        </div>
        
        <div className="white-orbit w1 leo">
        </div><div className="white-orbit w2 leo">
        </div><div className="white-orbit w3 leo">
        </div>
      </div> : <Fragment/>}
       
      </Fragment>
      
    );
};

export default Loading;