import React, { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [menuToggle, setmenuToggle] = useState(false);
  const menu = [
    {
      name: "학과소개",
      address: "/",
      detail: [
        { name: "학과 소개", address: "/" },
        { name: "교수 소개", address: "/" },
        { name: "졸업 후 진로", address: "/" },
        { name: "입학 안내", address: "/" },
      ],
    },
    {
      name: "학사정보",
      address: "/",
      detail: [
        { name: "교육과정", address: "/" },
        { name: "커리큘럼 구성도", address: "/" },
        { name: "학·석사 연계과정", address: "/" },
      ],
    },
    {
      name: "공지사항",
      address: "/",
      detail: [
        { name: "학과 공지", address: "/" },
        { name: "채용/인턴십", address: "/" },
        { name: "교육/공모전", address: "/" },
      ],
    },
    {
      name: "학생회",
      address: "/",
      detail: [
        { name: "학생회 소개", address: "/" },
        { name: "학생회 공지", address: "/" },
        { name: "학생회 달력", address: "/" },
      ],
    },
    {
      name: "학생 활동",
      address: "/",
      detail: [
        { name: "동아리 소개", address: "/" },
        { name: "학생 수상작", address: "/" },
        { name: "작품 전시", address: "/" },
      ],
    },
    {
      name: "커뮤니티",
      address: "/",
      detail: [
        { name: "대외활동 후기", address: "/" },
        { name: "취업 후기", address: "/" },
        { name: "졸업생 인터뷰", address: "/" },
      ],
    },
  ];
  console.log(menuToggle);
  return (
    <div className="headerWrap">
      <div className="headerTitle">
        ComHome{" "}
        <div className="headerDesc">
          Sungshin W. University {<br />} Computer Engineering
        </div>
      </div>
      <div
        className="headerMenu web"
        onMouseEnter={() => setmenuToggle(true)}
        onMouseLeave={() => setmenuToggle(false)}
      >
        <div className="headerColor" />
        {menu.map((data) => {
          return (
            <div className="headerButtonWrap">
              <div className="headerButton">
                <a href={data.address} className="headerLink">
                  {data.name}
                </a>
              </div>
              <div
                className={`headerHoverMenu ${!menuToggle ? "none" : "block"}`}
              >
                {data.detail.map((details) => {
                  return (
                    <div className="hoverMenuButton">
                      <a href={details.address} className="headerLink">
                        {details.name}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div
        className={`headerMenu mobile ${
          !menuToggle ? "menuBox" : "menuBoxHidden"
        }`}
      >
        {/* <div className="headerColor" />
        {menu.map((data) => {
          return (
            <div className="headerButton">
              <a href={data.address} className="headerLink">
                {data.name}
              </a>
            </div>
          );
        })} */}
        somthing
      </div>
    </div>
  );
}

export default Header;
