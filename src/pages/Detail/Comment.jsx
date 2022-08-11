import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { head } from '../../redux/action/Api';
import { getComment } from '../../redux/action/GetComment';

const Comment = (props) => {
    const ref = useRef()
    const [messList, setMessList] = useState([])
    const {arrComment} = useSelector(state => state.CommentReducer)
    
   
    const handleClick = (event) => {
        event.preventDefault()
        if(!props.numberStar) {
            alert('Vui lòng đánh giá sao cho khoá học')
        }
        else {
            console.log(props.numberStar)
        if(ref.current.value !== "") {
            const data ={numberReviews: props.numberStar, comments: ref.current.value, userId: props.idUser, courseId: props.idCourse}

            setMessList([...messList, {comments: ref.current.value, name: props.name}])
            console.log(messList)
            console.log(data)
            axios({
                url: `${head}/api/v1/evaluate/create`,
                method: 'POST',
                data: data
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
            ref.current.value = ""
        }
        else {
            alert("Vui long nhap noi dung can binh luan")
        }
    }
  

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
                <h4>{item.name}</h4>
                <p>{item.comments}</p>
            </div>
            )   
           })}
           {arrComment.map((item, index) => {
            if(item.Course.id == props.idCourse)
             return (
                <div key={index}  className="commemt__item">
                <h4>{item.User.username}</h4>
                <p>{item.comments}</p>
            </div>
            )   
           })}
        </div>
    </div>
    );
};

export default Comment;