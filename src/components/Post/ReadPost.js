import React, { useState } from "react";
import Card from "../Card";
import Modal from "../Modal/Modal";
import "./Post.css";
import logo512 from "./logo512.png";

function ReadPost({ setMode }) {
  const [modalState, setModalState] = useState(false);
  const [displayContent, setDisplayContent] = useState({});
  const openModal = (data) => {
    console.log(data);
    setDisplayContent(data);
    setModalState(true);
  };

  const closeModal = (event) => {
    event.preventDefault();
    setModalState(false);
  };

  return (
    <div className="read-post-container">
      <button
        className="new-post"
        onClick={() => {
          setMode("create");
        }}
      >
        글 작성하기
      </button>
      <div className="post-list">
        {postList.map((data, index) => {
          return (
            <div
              key={data.title + index}
              value={index}
              onClick={() => openModal(data)}
            >
              <Card
                key={data.title}
                value={index}
                className="post-list-cards"
                hoverColor={"#DFE7F6"}
                shadowColor={"#DFDFDF"}
              >
                <div className="post-list-number" value={index}>
                  {index}
                </div>
                <div className="post-list-title" value={index}>
                  {data.title}
                </div>
                <div className="post-list-date" value={index}>
                  {data.date}
                </div>
              </Card>
            </div>
          );
        })}
      </div>
      {modalState && (
        <Modal
          className="new__review__modal"
          onClose={closeModal}
          maskClosable={true}
          visible={true}
          background={"#fff8c9"}
          color={"#000000"}
        >
          <div className="display-modal">
            <img src={logo512} alt="image" width={"150px"} height={"150px"} />
            <div className="post-list-title">{displayContent.title}</div>
            <div className="post-list-date">{displayContent.date}</div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export function Post({ data }) {
  return <div>post : {data}</div>;
}

export default ReadPost;

const postList = [
  { title: "[동아리] init 후기", desc: "", date: "2022-06-14" },
  { title: "[대외활동] ssafy 후기", desc: "", date: "2022-06-17" },
  {
    title: "[공모전] 어쩌구공모전 후기",
    desc: "",
    date: "2022-06-25",
  },
  { title: "[공모전] 머시기저시기와랄ㄹ랄라", desc: "", date: "2022-07-13" },
  { title: "[동아리] 멋쟁이 사자처럼 n기 후기", desc: "", date: "2022-07-02" },
  { title: "[동아리] 어디더라 후기", desc: "", date: "2022-07-31" },
  { title: "[해커톤] n차 어디 해커톤 후기", desc: "", date: "2022-06-22" },
  { title: "[공모전] 배리어프리 공모전", desc: "", date: "2022-05-05" },
  { title: "[동아리] 후기후기뿅뿅", desc: "", date: "2022-05-21" },
];
