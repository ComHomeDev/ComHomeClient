import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card";
import FastMenu from "../../components/Menu/FastMenu";
import Footer from "../../components/ScrollPages/Footer";

import {
  simpleBodyContent,
  detailBodyContent,
} from "../../components/variables";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Header />

      <div className="home-body">
        <Card className="card-item" hover={false} height={"100px"}>
          프로필
        </Card>
        <Card
          className="card-item"
          hover={false}
          width={"625px"}
          height={"100px"}
          shadowColor={"#FFE500;"}
        >
          공지사항
        </Card>

        <Card
          className="card-item"
          hover={false}
          width={"255px"}
          height={"245px"}
        >
          <div className="right-card">
            <div className="right-card-name">달력</div>
            <div className="right-card-content">somthing</div>
          </div>
        </Card>

        {simpleBodyContent.map((data) => {
          return (
            <Card
              className="card-item"
              key={data.name}
              hover={false}
              height={"100px"}
              shadowColor={"rgba(255, 6, 170, 0.27);"}
            >
              <div className="simple-card">
                <div className="simple-card-name">{data.name}</div>
                <div className="simple-card-icon">{data.icon}</div>
              </div>
            </Card>
          );
        })}

        <Card
          className="card-item"
          hover={false}
          width={"255px"}
          height={"245px"}
        >
          <div className="right-card">
            <div className="right-card-name">배너</div>
            <div className="right-card-content">somthing</div>
          </div>
        </Card>

        {detailBodyContent.map((data) => {
          return (
            <Card
              className="card-item"
              key={data.name}
              hover={true}
              height={"205px"}
            >
              <div className="detail-card">
                <div className="detail-card-name">{data.name}</div>
                <div className="detail-card-icon">{data.icon}</div>
              </div>
            </Card>
          );
        })}
      </div>
      <FastMenu />
      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
