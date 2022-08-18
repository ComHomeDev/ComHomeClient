import React from "react";
import { useParams } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./Bachelor.css";
import { classes } from "../../components/variables";

import DnDContainer from "../../components/DnD/DnDContainer";
const option = {
  enableMouseEvents: true,
};

function Bachelor() {
  let { sub } = useParams();
  console.log(classes.first.map((case1) => console.log(case1)));
  const getContent = (category) => {
    let content = "'";
    switch (category) {
      case "curriculum":
        content = (
          <div className="bachelor-curriculum">
            <div className="bachelor-gird">
              {classes.first.map((case1) => {
                return <div className="classes">{case1.name}</div>;
              })}
              {classes.second.map((case1) => {
                return <div className="classes">{case1.name}</div>;
              })}
              {classes.third.map((case1) => {
                return <div className="classes">{case1.name}</div>;
              })}
              {classes.fourth.map((case1) => {
                return <div className="classes">{case1.name}</div>;
              })}
            </div>
          </div>
        );
        break;
      case "track":
        content = (
          <div className="bachelor-track page-content">
            {/* <DndProvider backend={TouchBackend} options={option}> */}
            <DndProvider backend={HTML5Backend} options={option}>
              <DnDContainer />
            </DndProvider>
          </div>
        );
        break;
      case "connect":
        content = "";
        // content = <ReadPost category={sub} />;
        break;
      default:
        break;
    }
    return content;
  };
  return (
    <div className="page-container bachelor-container">{getContent(sub)}</div>
  );
}

export default Bachelor;
