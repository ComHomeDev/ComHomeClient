import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import FastMenu from "../../components/Menu/FastMenu";
import "./Community.css";
import Footer from "../../components/ScrollPages/Footer";
import { headerMenu } from "../../components/variables";
import Card from "../../components/Card";
import CreatePost from "../../components/Post/CreatePost";
import ReadPost from "../../components/Post/ReadPost";

function Community() {
  const [mode, setMode] = useState("read");
  // const [searchParams, setSearchParams] = useSearchParams();
  let { sub } = useParams();

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
  console.log(mode);

  return (
    <div className="community-container">
      <Header />
      <FastMenu />
      <div className="community-body">
        <div className="community-menu" onClick={throwMessage}>
          {/* {headerMenu[5].detail.map((data) => {
            return (
              <Card
                key={data.address}
                className={"small-menu-card"}
                background={
                  sub === data.eng ? "rgb(var(--basic-blue))" : "white"
                }
                padding={"10px"}
                hover={false}
              >
                <Link to={data.address}>{data.name}</Link>
              </Card>
            );
          })} */}
        </div>
        {getContent(mode)}
      </div>
      <Footer />
    </div>
  );
}

export default Community;
