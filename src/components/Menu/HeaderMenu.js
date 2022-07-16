import React, { useState } from "react";

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
    <div className="headerButtonWrap" key={data.name}>
      <div className="headerButton" onClick={onClickHandler}>
        <a href={data.address} className="headerLink">
          {data.name}
        </a>
      </div>
      <div className={`headerHoverMenu`}>
        {check() &&
          data.detail.map((details) => {
            return (
              <div className="hoverMenuButton" key={details.name}>
                <a href={details.address} className="headerLink">
                  {details.name}
                </a>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default HeaderMenu;
