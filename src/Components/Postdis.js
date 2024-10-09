import React, { useContext } from "react";
import style from "./Postdis.module.css";
import { qw } from "./Item.js";

export default function Postdis() {
  var con = useContext(qw);
  console.log("vlues got nothin", con.state3);

  return (
    <>
      <div className={style.box}>
        <div className={style.heading}>{con.state3.title}</div>
        <div className={style.content}>{con.state3.text}</div>
      </div>
    </>
  );
}
