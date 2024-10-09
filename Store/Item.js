import React, { createContext, useContext, useReducer, useState } from "react";
import Postdis from "../src/Components/Postdis.js";
import Textbox from "../src/Components/Textbox.js";
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
    if (action.post == 1) {
      state = { ...action.payload };

      return state;
    }
  };
  var [state, dispatch] = useReducer(change, ar);
  var [state1, upd] = useState("get out");
  var [state3, dispatch1] = useReducer(red2, { title: "TEXT", text: "Write" });

  return (
    <>
      <qw.Provider value={{ state, rw, state1, upd, state3, dispatch1 }}>
        <Outlet></Outlet>
      </qw.Provider>
    </>
  );
}
