import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsBellFill, BsBellSlash } from "react-icons/bs";
import Card from "../../components/Card";
import Calendar from "../../components/Calendar/Calendar";
import { getPublicKey, postBoardSubscription } from "../../api/main";
import { urlB64ToUint8Array } from "../../components/util";

function NoticeCard({
  userId,
  menu,
  noticeList,
  pushSupport,
  userSubscription,
  userBoardSubscription,
}) {
  const [buttonText, setButtonText] = useState("알림 설정");
  const [userBoardSubscribe, setUserBoardSubscribe] = useState(
    userBoardSubscription
  );

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
  }, [Notification, userSubscription, pushSupport]);

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
          if (userBoardSubscribe) {
            console.log("here");
            pushUnsubscribe();
          } else {
            console.log("here2");
            pushSubscribe();
          }
        }
      });
    }
  };

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
          setUserBoardSubscribe(true);
          updateBoardSubscription(true);
          console.log("push subscribed!", subscription);
        })
        .catch((err) => {
          console.error(err);
          window.alert("푸시 알림을 구독할 수 없습니다");
        });
    });
  };

  const pushUnsubscribe = () => {
    if (!userSubscription) {
      return;
    }
    userSubscription
      .unsubscribe()
      .then((result) => {
        console.log("push unsubscribed!: ", result);
        if (result) {
          setUserBoardSubscribe(false);
          updateBoardSubscription(false);
        }
      })
      .catch((err) => console.error("push unsubscribe failed!:", err));
  };

  const updateBoardSubscription = (isSubscribe) => {
    postBoardSubscription(userId, menu.eng, isSubscribe);
  };

  return (
    <Card key={menu} className="menu-card">
      <div className="bulletin">
        <div
          className={`bulletin-title ${
            menu.subscribe === true
              ? "sub"
              : menu.subscribe === false
              ? "unsub"
              : "cantsub"
          }`}
        >
          <Link to={menu.address} className="bulletin-link">
            {menu.name}
          </Link>
          {userId !== null && userBoardSubscribe === true ? (
            <BsBellFill
              className={`subscribe-button getsub`}
              onClick={onSubscriptBtnHandler}
            />
          ) : userId !== null && userBoardSubscribe === false ? (
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
