import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../../components/FixedCpnt/Header";
import Card from "../../components/Card";
import FastMenu from "../../components/FixedCpnt/FastMenu";
import Footer from "../../components/FixedCpnt/Footer";

import Calendar from "../../components/Calendar/Calendar";
import alertConfig from "../../jsconfig.json";
import { getPublicKey, postSubscription } from "../../api/main";

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
  const [userSubscription, setUserSubscription] = useState(null);
  const [buttonText, setButtonText] = useState("알림 설정");
  const iduser = "111865899156782818991";

  //처음 랜딩되면 구독 정보 가져옴
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        if (registration.pushManager) {
          setPushSupport(true);
          registration.pushManager.getSubscription().then((subscription) => {
            setUserSubscription(subscription);
          });
        }
      });
    }
  }, []);

  useEffect(() => {
    if (Notification.permission === "denied") {
      setButtonText("알림 차단됨");
      return;
    }
    if (userSubscription) {
      setButtonText("알림 끄기");
    } else {
      setButtonText("알림 켜기");
    }
  }, [Notification, userSubscription]);

  const pushSubscribe = async () => {
    const response = await getPublicKey();
    const publicKey = urlB64ToUint8Array(response.data);
    navigator.serviceWorker.ready.then((registration) => {
      const option = {
        userVisibleOnly: true,
        applicationServerKey: publicKey,
      };
      registration.pushManager
        .subscribe(option)
        .then((subscription) => {
          setUserSubscription(subscription);
          updateSubscription(subscription);
          console.log("push subscribed!", subscription);
        })
        .catch((err) => {
          setUserSubscription(null);
          console.error(err);
          window.alert("푸시 알림을 구독할 수 없습니다");
        });
    });
  };

  // 푸시 구독 취소
  function pushUnsubscribe() {
    if (!userSubscription) {
      return;
    }
    userSubscription
      .unsubscribe()
      .then((result) => {
        console.log("push unsubscribed!: ", result);
        if (result) {
          updateSubscription(null);
          setUserSubscription(null);
        }
      })
      .catch((err) => console.error("push unsubscribe failed!:", err));
  }
  // 구독 정보 서버로 전달
  function updateSubscription(subscription) {
    postSubscription(iduser, subscription);
  }

  const onSubscriptBtnHandler = () => {
    if (!pushSupport) {
      return;
    } else {
      Notification.requestPermission().then((permission) => {
        console.log("push permission : ", permission);
        if (Notification.permission !== "granted") {
          return;
        } else {
          if (userSubscription) {
            pushUnsubscribe();
          } else {
            pushSubscribe();
          }
        }
      });
    }
  };

  return (
    <div className="page-container home-container">
      <Header /> <FastMenu />
      <div className="page-body home-body">
        <button
          className={`alert-button ${buttonText === " "}`}
          onClick={onSubscriptBtnHandler}
        >
          {buttonText}
        </button>

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
