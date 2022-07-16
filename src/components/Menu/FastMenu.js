import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fastMenu } from "../variables";
import styled from "styled-components";

function FastMenu() {
  const navigate = useNavigate();
  const [menuToggle, setmenuToggle] = useState(true);
  return (
    <StyledFast>
      <div className={`menu-fastmenu ${menuToggle ? "show" : "hide"}`}>
        <div className="menu-fast basic" onClick={() => navigate("/2")}>
          넓은 화면 보기
        </div>
        {fastMenu.map((data) => {
          return (
            <div
              key={data.name}
              className="menu-fast basic"
              onClick={() => window.open(data.address)}
            >
              {data.name}
            </div>
          );
        })}
        <div
          className="menu-fast toggle"
          onClick={() => setmenuToggle(!menuToggle)}
        >
          {menuToggle ? "빠른 메뉴 접기↑" : "빠른 메뉴 펼치기↓"}
        </div>
      </div>
    </StyledFast>
  );
}

export default FastMenu;

const StyledFast = styled.div`
  .menu-fastmenu {
    position: fixed;
    right: 0;

    bottom: 20px;
    writing-mode: vertical-rl;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    z-index: 100;
  }
  .menu-fastmenu.hide .basic {
    display: none;
  }

  .menu-fastmenu .menu-fast {
    padding: 10px 5px;
    color: white;
    border-radius: 10px 0 0 10px;
  }

  .menu-fastmenu .menu-fast:nth-child(2n-1) {
    background-color: #8da9e1;
  }
  .menu-fastmenu .menu-fast:nth-child(2n) {
    background-color: #748cbd;
  }
  .menu-fastmenu .menu-fast.toggle {
    background-color: rgb(var(--blue));
  }

  .menu-fastmenu .menu-fast:hover {
    background-color: #e6e6e6;
    color: rgb(var(--blue));
  }
  .menu-fastmenu .menu-fast.toggle:hover {
    background-color: #8da9e1;
    color: rgb(var(--blue));
  }
  @media (max-width: 500px) {
    .menu-fastmenu {
      display: none;
    }
  }
`;
