import React, { useRef, useState } from 'react';

const Comment = (props) => {
    const ref = useRef()
    const [messList, setMessList] = useState([])
    const handleClick = (event) => {
        event.preventDefault()
        setMessList([...messList, ref.current.value])
        ref.current.value = ""
    }
    return (
        <div className="commemt">
            <form>
        <input ref={ref} type="text" placeholder='Write a comment' />
        <button onClick={handleClick}>Bình Luận</button>
        </form>
        <div className="comment__content">
           {messList.map((item, index )=> {
            return (
                <div key={index}  className="commemt__item">
                <h4>Alex</h4>
                <p>{item}</p>
            </div>
            )   
           })}
        </div>
    </div>
    );
};

export default Comment;