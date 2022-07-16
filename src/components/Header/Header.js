import React, { useState } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { headerMenu } from "../variables";
import Menu from "../Menu/HeaderMenu";
import "./Header.css";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className={`headerWrap ${!menuToggle ? "none" : "block"}`}>
      <div className="headerTitle">
        ComHome{" "}
        <div className="headerDesc">
          Sungshin W. University {<br />} Computer Engineering
        </div>
      </div>

      {/* 웹 */}
      <div
        className="headerMenu web"
        onMouseEnter={() => setMenuToggle(true)}
        onMouseLeave={() => setMenuToggle(false)}
      >
        {headerMenu.map((data) => (
          <Menu data={data} onClick={menuToggle} />
        ))}
      </div>

      {/* 모바일 */}
      <div
        className={`headerMenu mobile ${
          !menuToggle ? "menuBox" : "menuBoxHidden"
        }`}
      >
        {!menuToggle ? (
          <IoIosMenu
            className="mobileMenuIcon"
            alt="메뉴 펼치기 버튼"
            onClick={() => setMenuToggle(true)}
          />
        ) : (
          <IoMdClose
            className="mobileMenuIcon"
            alt="메뉴 닫기 버튼"
            onClick={() => setMenuToggle(false)}
          />
        )}
        {menuToggle &&
          headerMenu.map((data) => <Menu data={data} onClick={false} />)}
      </div>
    </div>
  );
}

export default Header;
