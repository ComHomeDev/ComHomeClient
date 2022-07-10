import React from "react";
import styled from "styled-components";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";

function MainScrollBtn({ page, onClick }) {
  const onClickHandler = (direction) => onClick(direction);
  return (
    <StyledScrollBtn>
      <div
        className={`bounce-top scroll-btn ${page === 0 ? "disabled" : ""}`}
        onClick={() => onClickHandler("up")}
      >
        <BsArrowUpShort
          size={40}
          style={{ position: "absolute", top: "5px", left: "5px" }}
        />
      </div>
      <div
        className={`bounce-top scroll-btn ${page === 2 ? "disabled" : ""}`}
        onClick={() => onClickHandler("down")}
      >
        <BsArrowDownShort
          size={40}
          style={{ position: "absolute", top: "5px", left: "5px" }}
        />
      </div>
    </StyledScrollBtn>
  );
}

export default MainScrollBtn;

const StyledScrollBtn = styled.div`
  .scroll-btn {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 50px;
    height: 50px;
    background-color: rgb(var(--basic-blue));
    border-radius: 25px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  .scroll-btn:first-child {
    position: fixed;
    bottom: 110px;
    right: 50px;
    width: 50px;
    height: 50px;
    background-color: rgb(var(--basic-blue));
    border-radius: 25px;
  }
  .disabled {
    display: none;
  }

  .bounce-top {
    -webkit-animation: bounce-top 0.9s both;
    animation: bounce-top 0.9s both;
  }

  @media (max-width: 630px) {
    .scroll-btn {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      background-color: rgb(var(--basic-blue));
      border-radius: 25px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    .scroll-btn:first-child {
      position: fixed;
      bottom: 90px;
      right: 30px;
      width: 50px;
      height: 50px;
      background-color: rgb(var(--basic-blue));
      border-radius: 25px;
    }
  }

  /* ----------------------------------------------
 * Generated by Animista on 2022-7-10 17:51:52
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation bounce-top
 * ----------------------------------------
 */
  @-webkit-keyframes bounce-top {
    0% {
      -webkit-transform: translateY(-45px);
      transform: translateY(-45px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    40% {
      -webkit-transform: translateY(-24px);
      transform: translateY(-24px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    65% {
      -webkit-transform: translateY(-12px);
      transform: translateY(-12px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    82% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    93% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
  }
  @keyframes bounce-top {
    0% {
      -webkit-transform: translateY(-45px);
      transform: translateY(-45px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 1;
    }
    24% {
      opacity: 1;
    }
    40% {
      -webkit-transform: translateY(-24px);
      transform: translateY(-24px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    65% {
      -webkit-transform: translateY(-12px);
      transform: translateY(-12px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    82% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    93% {
      -webkit-transform: translateY(-4px);
      transform: translateY(-4px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
  }
`;
