import React, { useState } from "react";
import { Link } from "react-router-dom";

function HeaderMenu({ data, onClick }) {
  const [toggle, setToggle] = useState(false);

  const onClickHandler = () => {
    if (!onClick) {
      setToggle(!toggle);
    }
  };
  const check = () => {
    return toggle || onClick;
  };
  return (
    <div
      className={`headerButtonWrap ${toggle ? "focus" : ""}`}
      key={data.name}
    >
      <div className="headerButton" onClick={onClickHandler}>
        <Link to={data.address} className="headerLink">
          {data.name}
        </Link>
      </div>
      <div className="headerHoverMenu">
        {check() &&
          data.detail.map((details) => {
            return (
              <div className="hoverMenuButton" key={details.name}>
                <Link to={details.address} className="headerLink">
                  {details.name}
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HeaderMenu;
