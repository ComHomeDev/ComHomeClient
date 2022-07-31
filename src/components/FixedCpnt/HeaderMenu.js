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
      <Link to={data.address} className="headerLink">
        <div className="headerButton" onClick={onClickHandler}>
          {data.name}
        </div>
      </Link>
      <div className="headerHoverMenu">
        {check() &&
          data.detail.map((details) => {
            return (
              <Link to={details.address} className="headerLink">
                <div className="hoverMenuButton" key={details.name}>
                  {details.name}
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default HeaderMenu;
