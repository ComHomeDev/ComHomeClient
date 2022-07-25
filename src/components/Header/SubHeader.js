import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { headerMenu } from "../../components/variables";

function SubHeader({ title, fontSize, index, sub }) {
  return (
    <div className="subMenu">
      <StyledTitle fontSize={fontSize}>
        <div className="page-title">{title}</div>
        <div className="roof">
          <div className="roof-line" />
          <div className="roof-line" />
        </div>
        <div className="roof-shadow" />
      </StyledTitle>
      {headerMenu[index].detail.map((data) => {
        return (
          <Link
            key={data.eng + data.name}
            to={data.address}
            className={`subTitle student-sub-title ${
              data.eng === sub ? "selected" : ""
            }`}
            // onClick={throwMessage}
          >
            {data.name}
          </Link>
        );
      })}
      <form className="sub-search-form" onSubmit={() => window.alert("submit")}>
        <input
          type="text"
          className="sub-search"
          placeholder="검색어를 입력하세요"
        />
        <button type="submit" className="sub-search-button">
          <AiOutlineSearch size={26} />
        </button>
      </form>
    </div>
  );
}

SubHeader.defaultProps = {
  fontSize: "38px",
};
export default SubHeader;

export const StyledTitle = styled.div`
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
