import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="headerWrap">
      <div className="headerTitle">
        ComHome{" "}
        <div className="headerDesc">
          Sungshin W. University {<br />} Computer Engineering
        </div>
      </div>
      <div className="headerMenu">
        <div className="headerColor" />
        <div className="headerButton">
          <a href="/" className="headerLink">
            학과 소개
          </a>
        </div>
        <div className="headerButton">
          <a href="/" className="headerLink">
            학사 정보
          </a>
        </div>
        <div className="headerButton">
          <a href="/" className="headerLink">
            공지사항
          </a>
        </div>
        <div className="headerButton">
          <a href="/" className="headerLink">
            학생회
          </a>
        </div>
        <div className="headerButton">
          <a href="/" className="headerLink">
            학생 활동
          </a>
        </div>
        <div className="headerButton">
          <a href="/" className="headerLink">
            커뮤니티
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
