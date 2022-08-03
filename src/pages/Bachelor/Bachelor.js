import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./Bachelor.css";

import Header from "../../components/FixedCpnt/Header";
import SubHeader from "../../components/FixedCpnt/SubHeader";
import FastMenu from "../../components/FixedCpnt/FastMenu";
import Footer from "../../components/FixedCpnt/Footer";

import DnDContainer from "../../components/DnD/DnDContainer";
import { TouchBackend } from "react-dnd-touch-backend";

const option = {
  enableMouseEvents: true,
};

function Bachelor() {
  const [mode, setMode] = useState("read");

  let { sub } = useParams();

  const getContent = (category) => {
    let content = "'";
    switch (category) {
      case "curriculum":
        content = (
          <div
            className="bachelor-curriculum"
            style={{
              height: "500px",
              backgroundColor: "gray",
              marginBottom: "20px",
            }}
          ></div>
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
    <div className="page-container bachelor-container">
      <Header /> <FastMenu />
      <div className="page-body bachelor-body">
        <SubHeader title={"학사정보"} index={1} sub={sub} />
        {getContent(sub)}
      </div>
      <Footer />
    </div>
  );
}

export default Bachelor;
