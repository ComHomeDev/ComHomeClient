import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Card from "../../components/Card";
import FastMenu from "../../components/Menu/FastMenu";
import Footer from "../../components/ScrollPages/Footer";

import Calendar from "../../components/Calendar/Calendar";

import {
  simpleBodyContent,
  detailBodyContent,
} from "../../components/variables";
import "./Home.css";

const ButtonStyle = styled.button``;

function Home() {
  const [pushSupport, setPushSupport] = useState(false);
  const [alert, setAlert] = useState("알림");
  const [buttonDisable, setButtonDisable] = useState(true);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        if (registration.pushManager) {
          setPushSupport(true);
          setButtonDisable(false);
        }
      });
    }
  }, []);

  const onClickHandler = () => {
    if (!pushSupport) {
      setAlert("알림 불가");
      return;
    } else if (alert === "알림 차단됨") {
      window.alert("알림 권한 재설정이 필요합니다");
    } else {
      Notification.requestPermission().then((permission) => {
        console.log("push permission:", permission);
        if (Notification.permission !== "granted") {
          setAlert("알림 차단됨");
          return;
        } else {
          setAlert("알림 설정됨");
          navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification("ComHome", {
              body: "새로운 게시물이 등록되었습니다.",
              icon: "/logo192.png",
              badge: "/logo_simple.png",
              tag: "simple-noti",
            });
          });
        }
      });
    }
  };

  return (
    <div className="home-container">
      <Header />

      <div className="home-body">
        <ButtonStyle
          className={`alert-button ${alert}`}
          onClick={onClickHandler}
          disabled={buttonDisable}
        >
          {alert}
        </ButtonStyle>
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
            {/* <div className="right-card-name">달력</div> */}
            <div className="right-card-content">
              <Calendar />
            </div>
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

      <Footer />
    </div>
  );
}

export default Home;
