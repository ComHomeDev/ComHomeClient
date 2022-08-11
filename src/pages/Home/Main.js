import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsBellFill, BsBellSlash } from "react-icons/bs";
import Menu from "../../components/FixedCpnt/Menu";
import Footer from "../../components/FixedCpnt/Footer";

import Card from "../../components/Card";
import Calendar from "../../components/Calendar/Calendar";
import "./Main.css";

import { fastMenu } from "../../components/variables";

const menus = [
  { name: "학과공지", address: "/notice/csnotice?page=1", subscribe: true },
  {
    name: "학생회공지",
    address: "/studentcouncil/student_council_notice?page=1",
    subscribe: true,
  },
  { name: "학생회달력", address: "/studentcouncil/calendar", subscribe: null },
  {
    name: "교육/공모전",
    address: "/notice/edu_contest?page=1",
    subscribe: true,
  },
  {
    name: "대외활동 후기",
    address: "/community/extra_review?page=1",
    subscribe: false,
  },
  {
    name: "채용/인턴십",
    address: "/notice/recruit_internship?page=1",
    subscribe: true,
  },
];

function Main() {
  const [noticeList, setNoticeList] = useState(postList.data.data_det);
  // const userId = window.localStorage.getItem("userID");
  const userId = "aaaaaaaaaaaa";
  console.log(userId);
  return (
    <div className="main-container-test">
      <Menu />
      <div className="main-grid-container">
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
            <Notice userId={userId} menus={menus} noticeList={noticeList} />
          </div>
          <div className="block">
            <div className="main-fast-block">
              {fastMenu.map((menu, i) => {
                return (
                  <Link
                    to={menu.address}
                    target={i >= 2 ? "_blank" : null}
                    rel="noreferrer noopener"
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

export default Main;

function Notice({ userId, menus, noticeList }) {
  return (
    <div className="cardddd">
      {menus.map((menu) => {
        return (
          <Card
            key={menu}
            hover={false}
            shadowColor="#e0e0e0"
            className="menu-card"
          >
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
                {userId === null ? null : menu.subscribe === true ? (
                  <BsBellFill className={`subscribe-button getsub`} />
                ) : menu.subscribe === false ? (
                  <BsBellSlash className={`subscribe-button unsub`} />
                ) : null}
              </div>
              <hr style={{ width: "100%" }} />
              {menu.name === "학생회달력" ? (
                <Calendar />
              ) : menu.name === "대외활동 후기" && userId === null ? (
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "12px",
                    paddingTop: "65%",
                    color: "gray",
                  }}
                >
                  로그인 후 이용하세요
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
      })}
    </div>
  );
}

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