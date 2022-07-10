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
  margin-top: 20px;
  .scroll-btn {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 50px;
    height: 50px;
    background-color: rgb(var(--basic-blue));
    border-radius: 25px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    animation: motion 1.3s linear 0s 3;
  }
  .scroll-btn:first-child {
    bottom: 110px;
  }
  .disabled {
    display: none;
  }

  @media (max-width: 630px) {
    .scroll-btn {
      position: absolute;
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

  @keyframes motion {
    0% {
      margin-bottom: 0px;
    }
    20% {
      margin-bottom: 10px;
    }
    40% {
      margin-bottom: 0px;
    }
    60% {
      margin-bottom: 10px;
    }
    80% {
      margin-bottom: 0px;
    }
    100% {
      margin-bottom: 0px;
    }
  }
`;
