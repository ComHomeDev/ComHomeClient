import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { headerMenu } from "../variables";
import Menu from "../Menu/HeaderMenu";
import "./Header.css";

function Header() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className={`headerWrap ${!menuToggle ? "none" : "block"}`}>
      <Link to="/" className="headerTitle">
        ComHome{" "}
        <div className="headerDesc">
          Sungshin W. University {<br />} Computer Engineering
        </div>
      </Link>

      {/* 웹 */}
      <div
        className="headerMenu web"
        onMouseEnter={() => setMenuToggle(true)}
        onMouseLeave={() => setMenuToggle(false)}
      >
        {headerMenu.map((data, index) => (
          <Menu key={data.name + index} data={data} onClick={menuToggle} />
        ))}
      </div>

      {/* 모바일 */}
      <div className={"headerMenu mobile"}>
        {!menuToggle ? (
          <IoMenuOutline
            className="mobileMenuIcon ham"
            alt="메뉴 펼치기 버튼"
            onClick={() => setMenuToggle(true)}
          />
        ) : (
          <IoIosClose
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
