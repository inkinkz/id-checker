import React, { useState } from "react";
import "./App.css";

import axios from "axios";

import NavBar from "./components/NavBar/NavBar";
import SearchInput from "./components/SearchInput/SearchInput";
import ResultCard from "./components/ResultCard/ResultCard";

const App = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState({});
  const [inputError, setInputError] = useState({
    digit: false,
    invalid: false,
  });

  const onEnter = (event) => {
    if (event.key === "Enter" || event.keyCode === 13) getInfo();
  };

  const getInfo = async () => {
    if (id.length === 13 || id.length === 7) {
      const api = `https://cusense.net:8082/hkt/api/covid/check/${id}`;
      axios
        .get(api)
        .then((res) => {
          setInputError({
            digit: false,
            invalid: false,
          });
          setData(res.data);
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setError("invalid");
          }
        });
    } else {
      setError("digit");
    }
  };

  const setError = (type) => {
    setData({});
    switch (type) {
      case "digit":
        setInputError({ digit: true, invalid: false });
        break;
      case "invalid":
        setInputError({ digit: false, invalid: true });
        break;
      default:
        break;
    }
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

        <ResultCard data={data} inputError={inputError} />
      </div>
    </>
  );
};

export default App;
