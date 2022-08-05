import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPageUser } from "../../redux/action/GetPageUser";
import SignUp from "../Sign/SignUp";
import Popup from "./Popup";

const ListUsers = (props) => {
    const [display, setDisplay] = useState("none")
    const [user, setUser] = useState({name: "", id: 0})
  const { pageUser, totalPage } = useSelector((state) => state.ListUser);
  const dispatch = useDispatch();
  const handlePageClick = (data) => {
    dispatch(getPageUser(data.selected + 1, 5));
  };
  const deleteUser = (id) => {
    axios({
        url: "https://server-courses-next.herokuapp.com/api/v1/user/delete",
        method: "DELETE",
        data: {id}
    }).then(res => {
        alert("Xoá người dùng thành công!")
    }).catch(err => {
        console.log(err)
    })
  }
  return (
    <div className="listUsers">
      {pageUser.map((item, index) => {
        return (
          <div className="listUsers__item" key={index}>
            <div className="listUsers__infor">
            <span>{item.username}</span>
            <span>{item.email}</span>
            <span>{item.phone}</span>
            </div>
            <div className="listUsers__button">
              <button className="edit">sua</button>
              <button className="delete" onClick={() => {
                    setDisplay("block")
                    setUser({name: item.username, id: item.id})
              }}>xoa</button>
            </div>
          </div>
        );
      })}

      <ReactPaginate
        breakLabel="..."
        initialPage={0}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={Math.ceil(totalPage)}
        containerClassName={"pagination"}
        pageClassName={"pagenate__item"}

      />
            <Popup content={`Bạn có chắc là muốn xoá người dùng ${user.name}`} deleteUser={deleteUser} id={user.id} display={display} setDisplay={setDisplay}/>

                

    </div>
  );
};

export default ListUsers;
