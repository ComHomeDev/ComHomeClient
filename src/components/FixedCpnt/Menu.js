import React, { useState } from "react";
import { Link } from "react-router-dom";
import { headerMenu } from "../variables";
import "./Menu.css";
import { IoLogIn } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMenu } from "react-icons/hi";

function Menu() {
  const [toggle, setToggle] = useState(false);
  const [select, setSelect] = useState("");
  const userId = window.localStorage.getItem("userID");

  return (
    <div className={`menu-container-test ${toggle ? "toggle" : ""}`}>
      <Link to="/" className="menu-title">
        ComHome
      </Link>

      <div
        className="menu-wrap-test web"
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
      >
        {headerMenu.map((menu) => {
          return (
            <div key={menu.name} className="menu-title-wrap">
              <Link to={`${menu.address}`} className="menu-title-link goto">
                {menu.name}
              </Link>
              {toggle && (
                <div className="menu-detail-wrap">
                  {menu.detail.map((detail, i) => {
                    return (
                      <Link
                        to={`${detail.address}`}
                        key={detail.name + i}
                        className="menu-detail-link goto"
                      >
                        {detail.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div
        className="menu-user web"
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
      >
        {userId === null || userId === undefined ? (
          <IoLogIn
            className="login-icon menu-icon"
            onClick={() => {
              window.localStorage.setItem("userID", "111865899156782818991");
              window.alert("로그인 되었습니다.");
            }}
          />
        ) : (
          <AiOutlineUser className="user-icon menu-icon" />
        )}
        {toggle && (
          <div className="menu-user-text">
            {userId === null || userId === undefined ? (
              <a href="http://xn--cf7b27k.xn--yq5b.xn--3e0b707e:5000/api/auth/login">
                {`성신 계정으로\n 로그인하기`}
              </a>
            ) : (
              <Link to="/mypage">마이페이지</Link>
            )}
          </div>
        )}
      </div>

      <div className="mobile menu-button" onClick={() => setToggle(!toggle)}>
        <HiOutlineMenu className="mobile menu-icon" />
      </div>
      {toggle && (
        <div className="menu-wrap-test mobile">
          <div className="menu-user-mobile">
            {userId === null || userId === undefined ? (
              <IoLogIn
                className="login-icon menu-icon"
                onClick={() => {
                  window.localStorage.setItem("userID", "565675675");
                  window.alert("로그인 되었습니다.");
                }}
              />
            ) : (
              <AiOutlineUser className="user-icon menu-icon" />
            )}

            <div className="menu-user-text-mobile">
              {userId === null || userId === undefined ? (
                <a href="http://xn--cf7b27k.xn--yq5b.xn--3e0b707e:5000/api/auth/login">
                  {`성신 계정으로\n 로그인하기`}
                </a>
              ) : (
                <Link to="/mypage">마이페이지</Link>
              )}
            </div>
          </div>
          {headerMenu.map((menu) => {
            return (
              <MobileMenu
                key={menu.name + menu.address}
                menu={menu}
                toggle={() => setToggle(false)}
                select={select === menu.name}
                setSelect={(op) => {
                  if (op === select) setSelect("");
                  else setSelect(op);
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Menu;

function MobileMenu({ menu, select, setSelect, toggle }) {
  return (
    <div key={menu.name} className="menu-title-wrap">
      <div
        className={`menu-title-link goto ${select ? "selected" : ""}`}
        onClick={() => setSelect(menu.name)}
      >
        {menu.name}
      </div>

      {select && (
        <div className="menu-detail-wrap">
          {menu.detail.map((detail, i) => {
            return (
              <Link
                onClick={toggle}
                to={`${detail.address}`}
                key={detail.name + i}
                className="menu-detail-link goto"
              >
                {detail.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
