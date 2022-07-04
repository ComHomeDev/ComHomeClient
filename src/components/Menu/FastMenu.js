import React from "react";
import { fastMenu } from "../variables";
import styled from "styled-components";

function FastMenu() {
  return (
    <StyledFast>
      <div className="menu-fastmenu">
        {fastMenu.map((data) => {
          return (
            <div
              className="menu-fast"
              onClick={() => window.open(data.address)}
            >
              {data.name}
            </div>
          );
        })}
      </div>
    </StyledFast>
  );
}

export default FastMenu;

const StyledFast = styled.div`
  .menu-fastmenu {
    position: fixed;
    right: 0;

    top: 20px;
    writing-mode: vertical-rl;
    display: flex;
    flex-direction: row;
    cursor: pointer;
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
  .menu-fastmenu .menu-fast:hover {
    background-color: #e6e6e6;
    color: rgb(var(--blue));
  }
`;
