import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaAward } from "react-icons/fa";

import "./StudentActivity.css";

import Header from "../../components/Header/Header";
import FastMenu from "../../components/Menu/FastMenu";
import Footer from "../../components/ScrollPages/Footer";

import Card from "../../components/Card";
import SubHeader from "../../components/Header/SubHeader";

function StudentActivity() {
  const [mode, setMode] = useState("read");
  let { sub } = useParams();
  return (
    <div className="page-container student-container">
      <Header /> <FastMenu />
      <div className="page-body student-body">
        <SubHeader title={"학생 활동"} index={4} sub={sub} />
        ss
      </div>
      <Footer />
    </div>
  );
}

export default StudentActivity;
