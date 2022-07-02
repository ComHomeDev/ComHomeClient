import React, { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { headerMenu } from "../variables";
import "./Header.css";

function Header() {
  const [menuToggle, setmenuToggle] = useState(false);

  return (
    <div className={`headerWrap ${!menuToggle ? "none" : "block"}`}>
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
        {headerMenu.map((data) => {
          return (
            <div className="headerButtonWrap" key={data.name}>
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
        {!menuToggle ? (
          <IoIosMenu
            className="mobileMenuIcon"
            alt="메뉴 펼치기 버튼"
            onClick={() => setmenuToggle(true)}
          />
        ) : (
          <IoMdClose
            className="mobileMenuIcon"
            alt="메뉴 닫기 버튼"
            onClick={() => setmenuToggle(false)}
          />
        )}
        {headerMenu.map((data) => {
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
    </div>
  );
}

export default Header;
