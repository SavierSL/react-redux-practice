import React, { useEffect, useState, Component } from "react";
import { connect } from "react-redux";
import { getUserRequest } from "../components/actions/usersAction";
import { useSelector, useDispatch } from "react-redux";
import { put } from "redux-saga/effects";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserRequest());
  }, []);

  const data = useSelector((state) => state.users);
  console.log(data);
  console.log(data.items.items);
  return (
    <div>
      {data.items.items
        ? data.items.items.map((item, index) => {
            return <p key={index}>{item.firstName}</p>;
          })
        : ""}
    </div>
  );
}

export default App;
