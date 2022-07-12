import React from "react";
import Card from "../../components/Card";
import { AiOutlineSearch } from "react-icons/ai";
import { simpleBodyContent } from "../../components/variables";
import "./SlideMain.css";

function SlideMain() {
  return (
    <div className="main-container">
      <div className="main-head">
        <div className="main-title">ComHome</div>
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
