import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./Notice.css";

import Header from "../../components/FixedCpnt/Header";
import FastMenu from "../../components/FixedCpnt/FastMenu";
import Footer from "../../components/FixedCpnt/Footer";
import SubHeader from "../../components/FixedCpnt/SubHeader";
import CreatePost from "../../components/Post/CreatePost";
import ReadPost, { Post } from "../../components/Post/ReadPost";

function Notice() {
  const [mode, setMode] = useState("read");

  let { sub, post } = useParams();

  useEffect(() => {
    if (post !== undefined) {
      setMode("post");
    } else {
      setMode("read");
    }
  }, [post]);

  const setParams = (mode) => {
    setMode(mode);
  };

  const throwMessage = (e) => {
    if (mode === "create") {
      if (window.confirm("작성하던 내용이 삭제됩니다. 이동하시겠습니까?")) {
        setMode("read");
      } else {
        e.preventDefault();
      }
    }
  };

  const getContent = (mode) => {
    let content = "";
    switch (mode) {
      case "post":
        content = <Post data={"와랄랄라"} />;
        break;
      case "read":
        content = <ReadPost setMode={setParams} category={sub} />;
        break;
      case "create":
        content = <CreatePost setMode={setParams} />;
        break;
      case "update":
        break;
      case "delete":
        break;
      default:
        break;
    }
    return content;
  };

  return (
    <div className="notice-container page-container">
      <Header />
      <FastMenu />
      <div className="notice-body">
        <SubHeader title={"공지사항"} index={3} sub={sub} />
        {/* {getContent(mode)} */}
      </div>
      <Footer />
    </div>
  );
}

export default Notice;
