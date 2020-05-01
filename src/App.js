import React, { useState } from "react";
import "./App.css";

import axios from "axios";

import NavBar from "./components/NavBar/NavBar";
import SearchInput from "./components/SearchInput/SearchInput";
import ResultCard from "./components/ResultCard/ResultCard";

const App = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState({});

  const onEnter = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) getInfo();
  };

  const getInfo = async () => {
    if (id.length !== 13) alert("กรุณากรอกหมายเลขบัตรประชาชน 13 หลัก");

    const api = `https://cusense.net:3333/api/covid/check/${id}`;

    axios
      .get(api)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        if (err.response.status === 400) setData({ invalid: true });
      });
  };

  return (
    <>
      <NavBar />
      <div className="mt-5 main-container">
        <SearchInput
          id={id}
          setId={setId}
          onEnter={onEnter}
          getInfo={getInfo}
        />

        <ResultCard data={data} />
      </div>
    </>
  );
};

export default App;
