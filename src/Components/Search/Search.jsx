import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { search } from '../../redux/action/Search';
import { actionTypes } from '../../redux/action/types';

const Search = (props) => {
  const [openSearch, setOpenSearch] = useState(false)
    const dispatch = useDispatch()
    const {targetSearch} = props

    const handleChange = async (e) => {
      
        await dispatch(search([]))
         // xoá mỗi khi nhập tìm kiếm
         let res
        if(e.target.value) {
          if(targetSearch !== "name" ) {
            res = props.arr.filter(item => item.username.toLowerCase().includes(e.target.value.toLowerCase().replace(/\s+/g,' ').trim()))
          }
          else {
            res = props.arr.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase().replace(/\s+/g,' ').trim()))

          }
          dispatch(search(res))
          dispatch(() => {
            dispatch({type: actionTypes.SET_SEARCH_OPEN, payload: true})
          })
        }
        else {
          dispatch(() => {
            dispatch({type: actionTypes.SET_SEARCH_OPEN, payload: false})
          })
        }
    }
    return (
        <div className="search">
                    <FaSearch/>

        <div className="input">
        <input onChange={handleChange} type="text"  placeholder="Search..."/>
        </div>
      </div>
    );
};

export default Search;