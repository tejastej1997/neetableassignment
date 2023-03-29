import React, { useEffect } from "react";
import "./styles.css";
// import {useState} from React;

export default function App() {
  // let [red, setRed] = useState(true);
  // let [green, setGreen] = useState(false);
  // let [orange, setOrange] = useState(false);
  let color = document.getElementsByClassName("circle");

  setInterval(() => {
    setTimeout(() => {
      color[0].style.backgroundColor = "red";
      color[1].style.backgroundColor = "";
      color[2].style.backgroundColor = "";
    }, 1000);

    setTimeout(() => {
      color[1].style.backgroundColor = "green";
      color[0].style.backgroundColor = "";
      color[2].style.backgroundColor = "";
    }, 2000);
    setTimeout(() => {
      color[0].style.backgroundColor = "";
      color[1].style.backgroundColor = "";
      color[2].style.backgroundColor = "yellow";
    }, 3000);
  }, 4000);

  let changeredcolorred = () => {
    color[0].style.backgroundColor = "red";
    color[1].style.backgroundColor = "";
    color[2].style.backgroundColor = "";
  };

  let changecolorgreen = () => {
    color[1].style.backgroundColor = "green";
    color[0].style.backgroundColor = "";
    color[2].style.backgroundColor = "";
  };

  let changecoloryellow = () => {
    color[0].style.backgroundColor = "";
    color[1].style.backgroundColor = "";
    color[2].style.backgroundColor = "yellow";
  };

  return (
    <div className="App">
      <strong>Hii... Traffic Light is not working can u repair ?</strong>
      <div className="outer-box">
        <div className="blackbox">
          <div className="row">
            <div className="circle red" onClick={changeredcolorred}></div>
          </div>
          <div className="row">
            <div className="circle" onClick={changecolorgreen}></div>
          </div>
          <div className="row">
            <div className="circle" onClick={changecoloryellow}></div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "start" }}>
        <ul>
          <li>You can use inline styling</li>
          <li>You can use conditional rendering</li>
        </ul>
      </div>
    </div>
  );
}
