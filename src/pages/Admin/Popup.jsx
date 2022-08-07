import React from 'react';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../../redux/action/types';

const Popup = (props) => {
    const dispatch = useDispatch()
    return (
        <div className='popup' style={{
            display: props.display, zIndex: 999, position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "#00082a63", textAlign: "center"}}>
            <div className="popup__cover" style={{
                margin: "auto", width: "35%", height: 250, background: "rgb(13 23 67)",
                 borderRadius: 15, transform: "translatey(25%)",
                 display: "flex",
                 justifyContent: "space-evenly",
                 alignItems: "center", 
                 flexDirection: "column",
                 position: "relative",
                 border: "2px solid #282f56"
                 }}>
            <div className="popup__title">
                <h3>{props.content}</h3>
            </div>
            <div className="popup__chose" style={{bottom: 15, right: "15px", display: "flex" }}>
                <button onClick={() => {
                     props.setDisplay("none")

                }} style={{background: "#0d9060", padding: "10px 15px", borderRadius: 10, marginRight: 15}}>Cancel</button>
                <button onClick={() => {
                     dispatch({type: actionTypes.LOADING})
                     props.function()
                     dispatch({type: actionTypes.LOADING})
                    props.setDisplay("none")

                }} style={{background: "#9d303f", padding: "10px 15px", borderRadius: 10, }}>OK</button>
            </div>
            </div>
        </div>
    );
};

export default Popup;