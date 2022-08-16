import React from "react";
import styled from "styled-components";

function Title({ title, fontSize }) {
  return (
    <StyledTitle fontSize={fontSize}>
      <div className="page-title">{title}</div>
      <div className="roof">
        <div className="roof-line" />
        <div className="roof-line" />
      </div>
      <div className="roof-shadow" />
    </StyledTitle>
  );
}
Title.defaultProps = {
  fontSize: "38px",
};
export default Title;

const StyledTitle = styled.div`
  position: relative;
  width: 200px;
  height: 85px;

  .page-title {
    width: max-content;
    position: absolute;
    top: 25px;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "38px")};
    text-align: center;
    font-weight: 600;
    z-index: 10;
    right: 30px;
  }
  .roof {
    position: absolute;
    right: 1px;
    top: 10px;
    z-index: 10;
  }

  .roof-line {
    position: absolute;
    top: 0;
    width: 40px;
    height: 0px;
    background-color: black;
    border: 3px solid #000000;
    border-radius: 6px;
  }

  .roof-line:nth-child(1) {
    right: 55px;
    transform: rotate(140deg);
  }

  .roof-line:nth-child(2) {
    right: 24px;
    transform: rotate(40deg);
  }

  .roof-shadow {
    position: absolute;
    top: 3px;
    right: 4px;
    background: #aec9ff;
    box-shadow: inset 0px -25px 30px white;
    clip-path: polygon(0 100%, 35% 32%, 59% 0, 80% 28%, 100% 100%);
    width: 145px;
    height: 79px;
  }

  @media (max-width: 630px) {
    width: 120px;
    .page-title {
      font-size: 24px;
      right: 0;
    }
    .roof,
    .roof-shadow {
      display: none;
    }
  }
`;