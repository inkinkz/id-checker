import React from "react";
import "./ResultCard.css";

const ResultCard = ({ data }) => {
  const textColor =
    data.status === "มีความเสี่ยงติดเชื้อ" ? "text-danger" : "text-success";

  const invalid = (
    <div className="not-found-text text-danger">
      <h1>หมายเลขบัตรประชาชนไม่ถูกต้อง</h1>
    </div>
  );

  const status = (
    <div className="status">
      <h2>
        สถานะ: <span className={textColor}>{data.status}</span>
      </h2>
    </div>
  );

  let personInfo;

  if (data.info) {
    personInfo = (
      <div className="person-info">
        <p>
          ลำดับที่ <span className="info">{data.info.no}</span>
        </p>
        <p>
          ชื่อ:
          <span className="info">
            {data.initial} {data.info.name} {data.info.surname}
          </span>
        </p>
        <p>
          หมายเลขบัตรประชาชน:
          <span className="info">{data.info.id}</span>
        </p>
        <p>
          หมายเลขโทรศัพท์:
          <span className="info">{data.info.phone}</span>
        </p>
        <p>
          ที่อยู่ต้นทาง:
          <span className="info">
            {data.info.work_id} หมู่ที่ {data.info.work_moo || " - "} &nbsp;
            {data.info.work_tambol} &nbsp; {data.info.work_amphoe}
          </span>
        </p>

        <p>
          ที่อยู่ภูมิลำเนา:
          <span className="info">
            {data.info.home_id} หมู่ที่ {data.info.home_moo || " - "} &nbsp;
            {data.info.home_tambol} &nbsp; {data.info.home_amphoe} &nbsp;
            {data.info.home_province}
          </span>
        </p>
      </div>
    );
  }

  const noData = (
    <div className="text-body">
      <h2>กรอกหมายเลขบัตรประชาชนเพื่อนเริ่มค้นหา</h2>
    </div>
  );

  return (
    <div className="result-card shadow rounded">
      {data.status === "หมายเลขบัตรประชาชนไม่ถูกต้อง" ? invalid : ""}
      {data.status ? status : ""}
      {data.status ? personInfo : ""}

      {!data.status ? noData : ""}
    </div>
  );
};

export default ResultCard;
