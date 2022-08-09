import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../../components/FixedCpnt/Header";
import Card from "../../components/Card";
import FastMenu from "../../components/FixedCpnt/FastMenu";
import Footer from "../../components/FixedCpnt/Footer";

import Calendar from "../../components/Calendar/Calendar";
import alertConfig from "../../jsconfig.json";

import {
  simpleBodyContent,
  detailBodyContent,
} from "../../components/variables";
import "./Home.css";

const ButtonStyle = styled.button``;

function urlB64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; i++) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

function Home() {
  const [pushSupport, setPushSupport] = useState(false);
  const [alert, setAlert] = useState("알림");
  const [buttonDisable, setButtonDisable] = useState(true);
  const [userSubScription, setUserSubScription] = useState({});
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    // if ("serviceWorker" in navigator) {
    //   navigator.serviceWorker.ready.then((registration) => {
    //     if (registration.pushManager) {
    //       setPushSupport(true);
    //       setButtonDisable(false);
    //       //구독 정보 가져와서 저장하기
    //       registration.pushManager.getSubscription().then((subscription) => {
    //         setUserSubScription(subscription);
    //       });
    //     }
    //   });
    // }
  }, []);
  // console.log(userSubScription);
  console.log(flip);

  const onClickHandler = () => {
    if (!pushSupport) {
      setAlert("알림 불가");
      return;
    } else if (alert === "알림 차단됨") {
      window.alert("알림 권한 재설정이 필요합니다");
    } else {
      if (userSubScription) {
        pushUnsubscribe();
      } else {
        pushSubscribe();
      }
    }
  };

  const pushSubscribe = () => {
    const publicKey = urlB64ToUint8Array(alertConfig.vapidPublic);
    navigator.serviceWorker.ready.then((registration) => {
      const option = {
        userVisibleOnly: true,
        applicationServerKey: publicKey,
      };
      registration.pushManager
        .subscribe(option)
        .then((subscription) => {
          //이 subscription이 fcm으로부터 받아온 구독정보임.
          // updateSubscription(subscription);
          setUserSubScription(subscription);
          console.log("push subscribed!", subscription);
        })
        .catch((err) => {
          setUserSubScription(null);
          console.error("push subscription failed", err);
          window.alert("푸시 알림을 구독할 수 없습니다.");
        });
    });
  };

  const pushUnsubscribe = () => {
    if (!userSubScription) {
      return;
    }
    userSubScription.unsubscribe().then((result) => {
      console.log("push unsubscribed! ", result);
      if (result) {
        // updateSubscription(null);
        setUserSubScription(null);
      }
    });
  };

  const updateSubscription = (subscription) => {
    //여기서 사용자 정보도 같이 전해줘서 사용자 구독 정보 추가하기
    //나중엔 게시글 구독 정보도 추가할 수 있을듯
    axios
      .post("api/pushSubscription", { subscription })
      .catch((e) => console.error(e));
  };

  return (
    <div className="page-container home-container">
      <Header /> <FastMenu />
      <div className="page-body home-body">
        {/* <ButtonStyle
          className={`alert-button ${alert}`}
          onClick={onClickHandler}
          disabled={buttonDisable}
        >
          {userSubScription ? "알림 끄기" : "알림 켜기"}
        </ButtonStyle> */}

        <a href="http://xn--cf7b27k.xn--yq5b.xn--3e0b707e:5000/api/auth/login">
          로그인
        </a>

        <Card className="card-item" hover={false} height={"100px"}>
          프로필
        </Card>
        <Card
          className="card-item"
          hover={false}
          // width={"625px"}
          // height={"100px"}
          // shadowColor={"#FFE500;"}
        >
          공지사항
        </Card>

        {/* <Card
          className="card-item"
          hover={false}
          width={"255px"}
          height={"245px"}
        >
          <div className="right-card">
            <div className="right-card-content">
              <Calendar />
            </div>
          </div>
        </Card> */}

        {simpleBodyContent.map((data) => {
          return (
            <Card
              className="card-item"
              key={data.name}
              hover={false}
              height={"100px"}
              // shadowColor={"rgba(255, 6, 170, 0.27);"}
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
            <div>
              <Card
                // className={`card-item ${flip ? "flip-vertical-right" : ""}`}
                className={`card-item`}
                key={data.name}
                hover={true}
                height={"205px"}
              >
                {
                  <div
                    className={`detail-card`}
                    // onMouseEnter={() => setFlip(true)}
                    // onMouseLeave={() => setFlip(false)}
                  >
                    <div className="detail-card-name">{data.name}</div>
                    <div className="detail-card-icon">{data.icon}</div>
                  </div>
                }
              </Card>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
