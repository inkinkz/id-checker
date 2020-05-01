import React from "react";
import "./SearchInput.css";

const SearchInput = (props) => {
  return (
    <div className="input-container">
      <input
        type="number"
        value={props.id}
        className="form-control id-input"
        id="id-input"
        placeholder="กรอกหมายเลขบัตรประชาชน"
        onChange={(e) => props.setId(e.target.value)}
        onKeyDown={(e) => props.onEnter(e)}
      />
      <button onClick={props.getInfo} className="btn btn-primary search-btn">
        ค้นหา
      </button>
    </div>
  );
};

export default SearchInput;
