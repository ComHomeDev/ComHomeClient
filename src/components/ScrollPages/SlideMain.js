import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { AiOutlineSearch } from "react-icons/ai";
import { simpleBodyContent } from "../../components/variables";
import Title from "../Header/Title";
import "./SlideMain.css";

function SlideMain() {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };
  return (
    <div className="main-container">
      <button className="main-expand-btn" onClick={routeChange}>
        모든 메뉴
        <br />
        모아보기
      </button>
      <div className="main-head">
        <div className="main-title">
          <Title title={"ComHome"} />
        </div>
        <form
          className="main-search-form"
          onSubmit={() => window.alert("submit")}
        >
          <input type="text" className="main-search" />
          <button type="submit" className="main-search-button">
            <AiOutlineSearch />
          </button>
        </form>
        <button className="main-head-login">로그인</button>
      </div>

      <div className="main-content">
        {simpleBodyContent.map((data) => {
          return (
            <Card
              className="slide-card"
              hover={false}
              shadowColor={"rgba(var(--basic-blue), 1);"}
            >
              <div className="simple-card">
                <div className="simple-card-name">{data.name}</div>
                <div className="simple-card-icon">{data.icon}</div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default SlideMain;
