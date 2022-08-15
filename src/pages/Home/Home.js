import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Menu from "../../components/FixedCpnt/Menu";
import Footer from "../../components/FixedCpnt/Footer";
import NoticeCard from "./NoticeCard";

import { postSubscription, getPublicKey } from "../../api/main";

import "./Home.css";
import { fastMenu } from "../../components/variables";
import { urlB64ToUint8Array } from "../../components/util";

function Home() {
  const [pushSupport, setPushSupport] = useState(false);
  const [userSubscription, setUserSubscription] = useState(null);
  const [noticeList, setNoticeList] = useState(postList.data.data_det);
  const userId = window.localStorage.getItem("userID");
  // const userId = "aaaaaaaaaaaa";

  //처음 랜딩되면 구독 정보 가져옴
  useEffect(() => {
    if ("serviceWorker" in navigator && userId !== null) {
      navigator.serviceWorker.ready.then((registration) => {
        if (registration.pushManager) {
          setPushSupport(true);
          registration.pushManager.getSubscription().then((subscription) => {
            setUserSubscription(subscription);
            Notification.requestPermission().then((permission) => {
              console.log("push permission : ", permission);
              if (Notification.permission !== "granted") {
                updateSubscription(subscription, false);
                return;
              } else {
                pushSubscribe();
              }
            });
          });
        }
      });
    }
  }, [userId]);

  const pushSubscribe = async () => {
    const response = await getPublicKey();
    if (response === undefined) return;
    const publicKey = urlB64ToUint8Array(response);
    navigator.serviceWorker.ready.then((registration) => {
      const option = {
        userVisibleOnly: true,
        applicationServerKey: publicKey,
      };
      registration.pushManager
        .subscribe(option)
        .then((subscription) => {
          setUserSubscription(subscription);
          updateSubscription(subscription, true);
          console.log("push subscribed!", subscription);
        })
        .catch((err) => {
          console.error(err);
          window.alert("푸시 알림을 구독할 수 없습니다");
        });
    });
  };

  // 구독 정보 서버로 전달
  function updateSubscription(subscription, isSubscribe) {
    postSubscription(userId, subscription, isSubscribe);
  }

  return (
    <div className="page-container">
      <Menu />
      <div className="page-bodyy">
        <div className="main-content-test">
          <div className="block">
            <div className="main-info-title"> 공지사항 한눈에 보기</div>

            <img
              className="notice-arrow-img"
              alt="화살표"
              src={`${process.env.PUBLIC_URL}/img/arrow.svg`}
            />
          </div>
          <div className="block menu-card-container">
            <div className="scroll-card">
              {menus.map((menu) => {
                return (
                  <NoticeCard
                    key={menu.name + menu.subscribe}
                    userId={userId}
                    menu={menu}
                    noticeList={noticeList}
                    pushSupport={pushSupport}
                    userSubscription={userSubscription}
                  />
                );
              })}
            </div>
          </div>
          <div className="block">
            <div className="main-fast-block">
              {fastMenu.map((menu, i) => {
                return (
                  <Link
                    to={menu.address}
                    target={i >= 2 ? "_blank" : null}
                    rel="noreferrer noopener"
                    key={menu + i + menu.address}
                    className="fast-block"
                  >
                    {menu.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="block main-interact-container">
            <Link to="/notice/edu_contest?page=1" className="main-interact">
              진행중인 프로그램 알아보기
            </Link>
            <Link to="/student/exhibition?page=1" className="main-interact">
              학생 작품 보러가기
            </Link>
            <Link
              to="/community/interview?page=1"
              className={`main-interact ${
                userId === null ? "not-contact" : ""
              }`}
            >
              {userId === null && (
                <div className="please-login">로그인 후 이용하세요!</div>
              )}
              졸업생과 이야기 나누기
            </Link>
          </div>
          <div className="block">
            <div className="main-info-title">다양한 학생 활동 보기</div>
            <img
              className="st-act-arrow-img"
              alt="화살표"
              src={`${process.env.PUBLIC_URL}/img/arrow.svg`}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;

const menus = [
  {
    name: "학과공지",
    eng: "cs_notice",
    address: "/notice/cs_notice?page=list",
  },
  {
    name: "학생회공지",
    eng: "student_council_notice",
    address: "/studentcouncil/student_council_notice?page=list",
  },
  {
    name: "학생회달력",
    eng: "student_council_notice",
    address: "/studentcouncil/calendar",
  },
  {
    name: "교육/공모전",
    eng: "edu_contest",
    address: "/notice/edu_contest?page=list",
  },
  {
    name: "채용/인턴십",
    eng: "recruit_intern",
    address: "/notice/recruit_intern?page=list",
  },
  {
    name: "대외활동 후기",
    eng: "extra_review",
    address: "/community/extra_review?page=list",
  },
  {
    name: "취업 후기",
    eng: "job_review",
    address: "/community/extra_review?page=chat",
  },
];

const postList = {
  data: {
    data_det: [
      {
        no: 2,
        title: "a1111",
        review_cont: "a",
        upload_time: "2022-07-24T11:24:16.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 1,
        title: "취업후기글제목",
        review_cont: "취업후기글내용",
        upload_time: "2022-07-17T12:02:42.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 4,
        title: "wdwfwdadsadfasdfaaaaaaaaaaaaa",
        review_cont: "a",
        upload_time: "2022-07-24T11:24:16.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 5,
        title: "취업후기글제목",
        review_cont: "취업후기글내용",
        upload_time: "2022-07-17T12:02:42.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 6,
        title: "정성스러운후기...",
        review_cont: "a",
        upload_time: "2022-07-24T11:24:16.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 7,
        title: "취업후기글제목",
        review_cont: "취업후기글내용",
        upload_time: "2022-07-17T12:02:42.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 8,
        title: "어떤공지사항....",
        review_cont: "a",
        upload_time: "2022-07-24T11:24:16.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 9,
        title: "취업후기글제목",
        review_cont: "취업후기글내용",
        upload_time: "2022-07-17T12:02:42.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 10,
        title: "오호라",
        review_cont: "a",
        upload_time: "2022-07-24T11:24:16.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 12,
        title: "취업후기글제목",
        review_cont: "취업후기글내용",
        upload_time: "2022-07-17T12:02:42.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 32,
        title: "뿅뿅",
        review_cont: "a",
        upload_time: "2022-07-24T11:24:16.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 13,
        title: "취업후기글제목2222",
        review_cont: "취업후기글내용",
        upload_time: "2022-07-17T12:02:42.000Z",
        iduser: "111865899156782818991",
      },
    ],
  },
};
