import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import FastMenu from "../../components/Menu/FastMenu";
import "./Community.css";
import Footer from "../../components/ScrollPages/Footer";
import { headerMenu } from "../../components/variables";
import Card from "../../components/Card";
import Title from "../../components/Header/Title";
import CreatePost from "../../components/Post/CreatePost";
import ReadPost, { Post } from "../../components/Post/ReadPost";
import { AiOutlineSearch } from "react-icons/ai";

function Community() {
  const [mode, setMode] = useState("read");
  // const [searchParams, setSearchParams] = useSearchParams();
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
  console.log(post);

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
        content = <ReadPost setMode={setParams} />;
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
    <div className="community-container">
      <Header />
      <FastMenu />
      <div className="community-body">
        <div className="community-menu">
          <Title title={"커뮤니티"} fontSize="36px" />
          {headerMenu[5].detail.map((data) => {
            return (
              <Link
                key={data.eng + data.name}
                to={data.address}
                className={`community-sub-title ${
                  data.eng === sub ? "selected" : ""
                }`}
                onClick={throwMessage}
              >
                {data.name}
              </Link>
            );
          })}
          <form
            className="sub-search-form"
            onSubmit={() => window.alert("submit")}
          >
            <input
              type="text"
              className="sub-search"
              placeholder="검색어를 입력하세요"
            />
            <button type="submit" className="sub-search-button">
              <AiOutlineSearch size={26} />
            </button>
          </form>
        </div>
        <hr
          style={{
            height: "2px",
            backgroundColor: "#b0c4eb",
            border: "none",
            marginBottom: "10px",
          }}
        />
        {getContent(mode)}
      </div>
      <Footer />
    </div>
  );
}

export default Community;
