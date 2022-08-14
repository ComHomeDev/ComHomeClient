import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

function SubHeader({ menu, sub, search }) {
  return (
    <>
      <StyledSubTitle>
        <div className="page-title">{menu.name}</div>
        <div className="page-details">
          {menu.detail.map((data) => {
            return (
              <Link
                key={data.eng + data.name}
                to={data.address}
                className={`subTitle student-sub-title ${
                  data.eng === sub ? "selected" : ""
                }`}
              >
                {data.name}
              </Link>
            );
          })}
        </div>

        {search && (
          <form
            className="sub-search-form"
            onSubmit={() => window.alert("submit")}
          >
            <input
              type="text"
              className="sub-search"
              placeholder="검색어를 입력하세요"
            />
            <button type="submit" className="sub-search-button">
              <AiOutlineSearch size={26} />
            </button>
          </form>
        )}
      </StyledSubTitle>
    </>
  );
}

SubHeader.defaultProps = {
  fontSize: "38px",
  search: true,
};
export default SubHeader;

const StyledSubTitle = styled.div`
  position: absolute;
  top: 80px;
  display: grid;
  width: 100%;
  grid-template-rows: 30px;
  grid-template-columns: 1fr 5fr 1fr;
  grid-gap: 2vw;
  align-items: center;
  height: 30px;
  word-break: keep-all;
  .page-title {
    font-size: 18px;
    font-weight: 600;
    padding-left: 3vw;
  }
  .subTitle {
    font-size: 1rem;
    text-decoration: none;
    color: #adadad;
  }
  .subTitle::after {
    content: "|";
    margin: 0 10px;
    color: black;
    font-weight: 400;
  }
  .subTitle:last-child::after {
    content: "";
    display: none;
  }
  .subTitle.selected {
    color: black;
    font-weight: 500;
  }
  .sub-search-form {
    margin: 0 10px 0 auto;
    position: relative;
    width: calc(175px + 40px);
    height: 30px;
  }
  .sub-search-form .sub-search {
    position: absolute;
    height: 30px;
    width: calc(100% - 50px);
    padding-right: 40px;
    padding-left: 10px;
    border: none;
    border-bottom: 2px solid rgb(var(--mid-gray));
  }
  .sub-search-form .sub-search::placeholder {
    margin-top: 7px;
    font-size: 14px;
  }
  .sub-search-form .sub-search-button {
    position: absolute;
    border: none;
    background-color: transparent;
    right: -3px;
    padding-top: 3px;
    cursor: pointer;
  }
  @media (max-width: 630px) {
    .subTitle {
      font-size: 15px;
    }
    .subTitle:nth-child(2) {
      margin-left: 10px;
    }
  }
  @media (max-width: 700px) {
    grid-template-rows: 30px 30px;
    grid-template-columns: 1fr 1fr;
    gap: 15px 2vw;
    .page-details {
      order: 3;
      grid-column: span 2;
      width: calc(100% - 4vw);
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 0 2vw;
    }
    .subTitle::after {
      content: "";
    }
  }
`;
