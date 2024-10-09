import React, { createContext, useContext, useReducer, useState } from "react";
import Postdis from "./Postdis.js";
import Textbox from "./Textbox.js";
import { Outlet } from "react-router-dom";
export var qw = createContext({});

export default function Item(prop) {
  var ar = [1, 2, 3, 4, 5, 67];
  var change = (state, action) => {
    if (action.type === "hello") {
      ar[2] = 67890;
      state = [...ar];
      return state;
    }
  };
  var rw = () => {
    console.log("check?");
    console.log(state);
    dispatch({ type: "hello" });
  };
  var red2 = (state, action) => {
    console.log("damm");
    if (action.post === "1") {
      console.log("value here:", action.payload.text);
      state = { ...action.payload };
      return state;
    } else {
      return state;
    }
  };
  var [state, dispatch] = useReducer(change, ar);
  var [state1, upd] = useState("get out");
  var [state3, dispatch1] = useReducer(red2, { title: "TEXT", text: "Write" });

  return (
    <>
      <qw.Provider value={{ state3, dispatch1 }}>
        <Outlet></Outlet>
      </qw.Provider>
    </>
  );
}
