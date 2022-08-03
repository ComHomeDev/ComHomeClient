import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import Header from "../../components/FixedCpnt/Header";
import SubHeader from "../../components/FixedCpnt/SubHeader";
import FastMenu from "../../components/FixedCpnt/FastMenu";
import Footer from "../../components/FixedCpnt/Footer";

function Bachelor() {
  const [mode, setMode] = useState("read");

  let { sub } = useParams();

  const getContent = (category) => {
    let content = "'";
    switch (category) {
      case "curriculum":
        content = <div className="bachelor-curriculum"></div>;
        break;
      case "track":
        content = <div className="bachelor-track"></div>;
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
