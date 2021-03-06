import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <StyledFooter>
      <div className="footer">
        <div className="footer-poly"></div>
        <div className="footer-content">
          <img className="footer-logo" src="./img/sswu.png" alt="로고" />
          <div className="footer-desc">
            (02844) 서울특별시 성북구 보문로 34다길 2 <br />
            (제3교학팀) Tel.02-920-7151 / college3@sungshin.ac.kr <br />
            copyright©2017 sungshin women’s university all rights reserved.
          </div>
        </div>
        <div className="footer-link">
          <Link to="/">개인정보처리방침</Link> |{" "}
          <Link to="/">이메일무단수집거부</Link>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;

const StyledFooter = styled.div`
  position: absolute;
  width: calc(100vw - 20px);
  height: 200px;
  margin-left: -20px;
  bottom: 0;
  overflow: hidden;
  .footer {
    margin-left: -20px;
    width: calc(100vw - 20px);
    height: 200px;
  }
  .footer-poly {
    position: absolute;
    width: 1500px;
    height: 200px;
    overflow: hidden;

    clip-path: polygon(
      0 100%,
      0 50%,
      9% 0,
      22% 36%,
      42% 17%,
      60% 41%,
      83% 25%,
      100% 68%,
      100% 100%
    );
    background-color: #aec9ff;
    left: 0vw;
    bottom: 0;
    z-index: 1;
  }

  .footer-content {
    padding-top: 100px;
    margin-left: 100px;
    position: absolute;
    width: 90vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    color: rgb(var(--blue));
    z-index: 10;
  }

  .footer-logo {
    width: 200px;
    margin-right: 20px;
  }
  .footer-link {
    color: white;
    position: absolute;
    bottom: 15px;
    right: 15px;
    z-index: 10;
  }

  .footer-link a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 785px) {
    .footer-content {
      padding-top: 0;
      margin-left: 30px;
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-content: flex-start;
    }

    .footer-poly {
      width: calc(100vw);
      min-width: 500px;
      clip-path: polygon(
        0 100%,
        0 24%,
        25% 0,
        49% 25%,
        76% 18%,
        100% 50%,
        100% 100%
      );
    }
    .footer-desc {
      font-size: 13px;
      top: -50px;
    }
    .footer-logo {
      margin-right: auto;
    }
    .footer-link a {
      font-size: 13px;
    }
  }

  @media (max-width: 500px) {
    width: 100vw;

    .footer-content {
      margin-left: 20px;
    }
    .footer-poly {
      width: calc(100vw);
      min-width: 500px;
      clip-path: polygon(
        0 100%,
        0 24%,
        25% 0,
        49% 25%,
        76% 18%,
        100% 50%,
        100% 100%
      );
    }
    .footer-logo {
      width: 130px;
    }
    .footer-desc {
      top: -20px;
    }
  }
`;
