import axios from 'axios';
import React, { useRef } from 'react';
import { head } from '../../redux/action/Api';

const Category = (props) => {
    const handleClick = (e) => {
        e.preventDefault()
        console.log(ref.current.value)
        axios({
            url: `${head}/api/v1/category/create`,
            method: "POST",
            data: {name: ref.current.value}
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    const ref = useRef()
    return (
        <div className='input'>
            <form>
            <input ref={ref} placeholder="Nhập thể loại" />
            <button style={{padding: "5px 20px", marginTop: "1.5rem"}} onClick={handleClick}>Import</button>
            </form>

            
        </div>
    );
};

export default Category;