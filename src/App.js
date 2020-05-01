import React, { useState } from "react";
import "./App.css";

import axios from "axios";

import ResultCard from "./components/ResultCard/ResultCard";

const App = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState({});

  const onEnter = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) getInfo();
  };

  const getInfo = async () => {
    if (id.length !== 13) alert("กรุณากรอกหมายเลขบัตรประชาชน 13 หลัก");
    const api = `http://161.200.80.206:3333/api/covid/check/${id}`;

    const response = await axios.get(api);
    console.log(response.data);
    setData(response.data);
  };

  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <a className="navbar-brand text-white" href="#">
          ระบบเช็ครายชื่อผู้เดินทางกลับจาก จ.ภูเก็ต
        </a>
      </nav>
      <div className="mt-5 main-container">
        <div className="input-container">
          <input
            type="number"
            value={id}
            className="form-control id-input"
            id="id-input"
            placeholder="กรอกหมายเลขบัตรประชาชน"
            onChange={(e) => setId(e.target.value)}
            onKeyDown={(e) => onEnter(e)}
          />
          <button onClick={getInfo} className="btn btn-primary search-btn">
            ค้นหา
          </button>
        </div>

        <ResultCard data={data} />
      </div>
    </>
  );
};

export default App;
