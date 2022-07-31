import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import './Loading.scss'

const Loading = (props) => {
    const {isLoading} = useSelector(state => state.Loading)
   
    return (
        <Fragment>
            {isLoading ?  <div class="spinner-box">
        <div class="blue-orbit leo">
        </div>
      
        <div class="green-orbit leo">
        </div>
        
        <div class="red-orbit leo">
        </div>
        
        <div class="white-orbit w1 leo">
        </div><div class="white-orbit w2 leo">
        </div><div class="white-orbit w3 leo">
        </div>
      </div> : <Fragment/>}
       
      </Fragment>
      
    );
};

export default Loading;