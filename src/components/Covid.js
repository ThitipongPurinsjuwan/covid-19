import React, { Component } from "react";
import Virus from "./virus";
import IncreaseBox from "./IncreaseBox";

export default class Covid extends Component {
  render() {
    const { data } = this.props;
    return (
      <>
        <header>
          <div className="pointStatus"></div>
          <p className="date">อัปเดตล่าสุด {data.UpdateDate}</p>
        </header>
        <div className="banner">
          <video autoPlay loop>
            <source
              src="https://61103776.000webhostapp.com/covid.mp4"
              type="video/mp4"
            />
          </video>
          <div className="textBox">
            <Virus className="virus1" color="#EA5771" size="28" />
            <Virus className="virus2" color="#EA5771" size="48" />
            <h3>ยืนยันตัวเลขผู้ติดเชื้อ</h3>
            <h1>Covid-19</h1>
            <h3>ทั้งหมดในประเทศไทย</h3>
          </div>
          <div className="statusBox">
            <div className="row">
              <div className="col">
                <div className="confirmed">
                  <div className="left">
                    <h3>ผู้ติดเชื้อสะสม</h3>
                    <IncreaseBox color="#ea5771" count={data.NewConfirmed} />
                  </div>
                  <div className="right">
                    <h3>{data.Confirmed}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="hospitalized card-col">
                  <h3 className="sub-title">กำลังรักษา</h3>
                  <h4 className="num-count">{data.Hospitalized}</h4>
                  <IncreaseBox color="#ffc700" count={data.NewHospitalized} />
                </div>
              </div>
              <div className="col">
                <div className="recover card-col">
                  <h3 className="sub-title">หายแล้ว</h3>
                  <h4 className="num-count">{data.Recovered}</h4>
                  <IncreaseBox color="#039245" count={data.NewRecovered} />
                </div>
              </div>
              <div className="col">
                <div className="deaths card-col">
                  <h3 className="sub-title">เสียชีวิต</h3>
                  <h4 className="num-count">{data.Deaths}</h4>
                  <IncreaseBox color="#d22d36" count={data.NewDeaths} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
