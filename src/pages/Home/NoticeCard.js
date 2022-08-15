import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsBellFill, BsBellSlash } from "react-icons/bs";
import Card from "../../components/Card";
import Calendar from "../../components/Calendar/Calendar";
import {
  getSubscription,
  postBoardSubscription,
  postBoardUnsubscription,
} from "../../api/main";

function NoticeCard({ userId, menu, noticeList }) {
  const [pushSupport, setPushSupport] = useState(false);
  const [buttonText, setButtonText] = useState("알림 설정");
  const [userBoardSubscribe, setUserBoardSubscribe] = useState(0);

  //처음 랜딩되면 구독 정보 가져옴
  useEffect(() => {
    if ("serviceWorker" in navigator && userId !== null) {
      navigator.serviceWorker.ready.then((registration) => {
        if (registration.pushManager) {
          setPushSupport(true);
          registration.pushManager.getSubscription().then((subscription) => {
            Notification.requestPermission().then((permission) => {
              console.log("push permission : ", permission);
              if (Notification.permission !== "granted") {
                return;
              } else {
                getSubArr();
              }
            });
          });
        }
      });
    }
  }, [menu]);

  const getSubArr = async () => {
    const response = await getSubscription(userId);
    const data = await response.data[0];
    console.log(data);
    switch (menu.eng) {
      case "cs_notice":
        setUserBoardSubscribe(data.cs_notice);
        break;
      case "recruit_intern":
        setUserBoardSubscribe(data.recruit_intern);
        break;
      case "edu_contest":
        setUserBoardSubscribe(data.edu_contest);
        break;
      case "student_council_notice":
        setUserBoardSubscribe(data.student_council_notice);
        break;
      case "extra_review":
        setUserBoardSubscribe(data.extra_review);
        break;
      case "job_review":
        setUserBoardSubscribe(data.job_review);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    //권한 여부
    if (Notification.permission === "denied") {
      setButtonText("알림 차단됨");
      setUserBoardSubscribe(null);
      return;
    }
    //알림 지원/로그인 여부
    if (!pushSupport) {
      setButtonText("알림 불가");
      return;
    }
    //게시판 구독 여부
    if (userBoardSubscribe) {
      setButtonText("알림 설정됨");
    } else {
      setButtonText("알림 해제됨");
    }
  }, [Notification, userBoardSubscribe, pushSupport]);

  const onSubscriptBtnHandler = (pushSupport) => {
    if (!pushSupport) {
      return;
    } else {
      Notification.requestPermission().then((permission) => {
        console.log("push permission : ", permission);
        if (Notification.permission !== "granted") {
          window.alert("알림 권한을 설정해주세요!");
          return;
        } else {
          updateBoardSubscription(menu.eng, userBoardSubscribe);
        }
      });
    }
  };

  const updateBoardSubscription = (type, isSubscribe) => {
    if (isSubscribe) {
      postBoardUnsubscription(userId, type);
      setUserBoardSubscribe(0);
    } else {
      postBoardSubscription(userId, type);
      setUserBoardSubscribe(1);
    }
  };

  return (
    <Card key={menu} className="menu-card">
      <div className="bulletin">
        <div
          className={`bulletin-title ${
            userBoardSubscribe === 1
              ? "sub"
              : userBoardSubscribe === 0
              ? "unsub"
              : "cantsub"
          }`}
        >
          <Link to={menu.address} className="bulletin-link">
            {menu.name}
          </Link>
          {userId !== null && userBoardSubscribe === 1 ? (
            <BsBellFill
              className={`subscribe-button getsub`}
              onClick={onSubscriptBtnHandler}
            />
          ) : userId !== null && userBoardSubscribe === 0 ? (
            <BsBellSlash
              className={`subscribe-button unsub`}
              onClick={onSubscriptBtnHandler}
            />
          ) : null}
          {menu.name !== "학생회달력" && (
            <div className="button-text">{buttonText}</div>
          )}
        </div>
        <hr style={{ width: "100%" }} />
        {menu.name === "학생회달력" ? (
          <Calendar />
        ) : (menu.name === "대외활동 후기" || menu.name === "취업 후기") &&
          userId === null ? (
          <div
            style={{
              textAlign: "center",
              fontSize: "12px",
              paddingTop: "65%",
              color: "gray",
            }}
          >
            로그인 후 이용하세요!
          </div>
        ) : (
          <div className="bulletin-content">
            {noticeList.slice(0, 10).map((data) => {
              return (
                <div key={data.no} className="bulletin-post">
                  {data.title}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
}

export default NoticeCard;
