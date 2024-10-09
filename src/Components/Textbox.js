import React, { useContext, useRef } from "react";
import style from "./Textbox.module.css";
import { IoIosContact } from "react-icons/io";
import { IoPricetag } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { ImAttachment } from "react-icons/im";
import { qw } from "./Item.js";
import { useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Textbox() {
  var nav = useNavigate();
  var we = useOutletContext();

  var con = useContext(qw);
  var r1 = useRef();
  var r2 = useRef();
  var fun = (event) => {
    event.preventDefault();

    var packet = { title: r1.current.value, text: r2.current.value };
    con.dispatch1({ post: "1", payload: packet });
    nav("/show-post");
  };
  var fun1 = (event) => {
    r1.current.value = event.target.value;
    console.log(r2.current.value);
  };
  var fun2 = (event) => {
    r2.current.value = event.target.value;
  };
  return (
    <>
      <div className={style.box}>
        <div className={style.in}>
          <input ref={r1} onChange={fun1} type="Text" placeholder="TEXT" />
        </div>
        <div className={style.text}>
          <textarea
            ref={r2}
            rows="2"
            cols="58"
            placeholder="Write a post Here..."
          ></textarea>
        </div>
        <div className={style.label}>
          <div className={style.inside}>
            <span className={style.space}>
              <IoIosContact />
            </span>
            <span>Assign</span>
          </div>
          <div className={style.inside}>
            <span className={style.space}>
              <IoPricetag />
            </span>
            <span>Label</span>
          </div>
          <div className={style.inside}>
            <span className={style.space}>
              <CiCalendarDate />
            </span>
            <span>Due Date</span>
          </div>
        </div>
        <div className={style.below}>
          <div className={`${style.inside} ${style.last}`}>
            <span className={style.space}>
              <ImAttachment />
            </span>
            <span>Attach</span>
          </div>

          <button onClick={fun}>Post</button>
        </div>
      </div>
    </>
  );
}
