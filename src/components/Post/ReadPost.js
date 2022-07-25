import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosAttach } from "react-icons/io";
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
              // onClick={() => openModal(data)}
            >
              <Link to={`${index}`}>
                <Card
                  key={data.title}
                  value={index}
                  className="post-list-cards"
                  hoverColor={"#DFE7F6"}
                  shadowColor={"#DFDFDF"}
                >
                  <div className="post-list-column">
                    <div className="post-list-title" value={index}>
                      {data.title}
                    </div>
                    <div className="post-list-row">
                      <div className="post-list-lookup">
                        조회수 {data.lookup}
                      </div>
                      {data.attachment && (
                        <IoIosAttach
                          size={"1.5em"}
                          style={{
                            transform: "rotate(45deg)",
                            marginLeft: "5px",
                          }}
                        />
                      )}
                    </div>
                  </div>

                  <div className="post-list-date" value={index}>
                    {data.date}
                  </div>
                </Card>
              </Link>
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

export function Post({ data2 }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = postData;

  return (
    <div className="article-container">
      <div className="article-title-wrap">
        <h2 className="article-title">{data.title}</h2>
        <div className="article-info">
          <div className="article-info-text">작성일 {data.createDate}</div>
          <div className="article-info-text">수정일 {data.updateDate}</div>
          <div className="article-info-text">조회수 {data.lookup}</div>
        </div>
      </div>
      <hr style={hrStyle} />
      <div className="article-attach">
        <div className="article-attach-tag">첨부파일</div>
        {data.attachment.length === 0 ? (
          <div>첨부파일이 없습니다.</div>
        ) : (
          <div>
            {data.attachment.map((file) => {
              return (
                <div className="article-attach-file">
                  <IoIosAttach
                    size={"1.5em"}
                    style={{
                      transform: "rotate(45deg)",
                      marginLeft: "5px",
                      marginTop: "5px",
                    }}
                  />
                  {file}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <hr style={hrStyle} />

      <div className="article-content">{text}</div>
    </div>
  );
}

export default ReadPost;

const hrStyle = {
  height: "1px",
  width: "calc(100% + 40px)",
  backgroundColor: "#b0c4eb",
  border: "none",
  margin: "20px 0 10px -20px",
};

const postData = {
  title: "[동아리] init 후기",
  desc: "aaaaaaaaaaaaaaaaabbbbbbbbbbbbbbcccccccccccccccccdddddddddddddd",
  createDate: "2022.06.14",
  updateDate: "2022.06.27",
  attachment: ["첨부파일1", "첨부파일2", "첨부파일3"],
  lookup: 13,
};

const postList = [
  {
    title: "[동아리] init 후기",
    desc: "",
    date: "2022-06-14",
    lookup: 3,
    attachment: true,
  },
  {
    title: "[대외활동] ssafy 후기",
    desc: "",
    date: "2022-06-17",
    lookup: 5,
    attachment: false,
  },
  {
    title: "[공모전] 어쩌구공모전 후기",
    desc: "",
    date: "2022-06-25",
    lookup: 12,
    attachment: true,
  },
  {
    title: "[공모전] 머시기저시기와랄ㄹ랄라",
    desc: "",
    date: "2022-07-13",
    lookup: 23,
    attachment: true,
  },
  {
    title: "[동아리] 멋쟁이 사자처럼 n기 후기",
    desc: "",
    date: "2022-07-02",
    lookup: 133,
    attachment: false,
  },
  {
    title: "[동아리] 어디더라 후기",
    desc: "",
    date: "2022-07-31",
    lookup: 73,
    attachment: false,
  },
  {
    title: "[해커톤] n차 어디 해커톤 후기",
    desc: "",
    date: "2022-06-22",
    lookup: 53,
    attachment: true,
  },
  {
    title: "[공모전] 배리어프리 공모전",
    desc: "",
    date: "2022-05-05",
    lookup: 63,
    attachment: false,
  },
  {
    title: "[동아리] 후기후기뿅뿅",
    desc: "",
    date: "2022-05-21",
    lookup: 23,
    attachment: false,
  },
];
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta ut mauris quis dignissim. Curabitur dictum, tellus a faucibus porttitor, sem magna euismod elit, ac posuere enim nibh tempor est. Vivamus iaculis dictum purus. Duis eget nibh tincidunt, vestibulum metus ut, condimentum erat. Curabitur eleifend eu massa quis efficitur. Sed vel ipsum turpis. Curabitur vel pretium lectus. Proin ultrices bibendum feugiat. Etiam diam dolor, blandit sed commodo at, pellentesque eu neque. Cras vel dictum neque. Ut tellus felis, hendrerit sit amet efficitur at, tincidunt sed turpis. Fusce dignissim magna eu elit posuere, eu dapibus magna dapibus. Nam vestibulum sem nibh, non tempus lorem efficitur in. Suspendisse ac aliquam nisl.Cras quis tincidunt erat. Vestibulum bibendum, lectus quis fermentum iaculis, eros diam vulputate velit, varius pellentesque tortor ligula vitae nisl. Curabitur quis ante vitae orci dictum tempor. Ut vitae risus placerat, venenatis nisl eget, iaculis justo. Pellentesque congue pulvinar ante, congue egestas tellus euismod at. Sed finibus neque sed leo commodo, viverra eleifend ex hendrerit. Integer ex velit, fringilla eu auctor in, laoreet et elit. In hac habitasse platea dictumst. Pellentesque id convallis diam. Phasellus ac ultricies ligula, eu rutrum lectus. Donec elementum id ligula at tristique. Fusce nec diam leo. In eu efficitur lectus, vitae sodales enim. Suspendisse nec lorem eget purus elementum tristique. Donec tellus tellus, tristique eu dapibus in, venenatis nec dui. Curabitur feugiat ipsum risus. Nunc ex ligula, vulputate in semper fringilla, pellentesque bibendum orci. In hac habitasse platea dictumst. Pellentesque eleifend luctus massa vitae facilisis. Praesent eget leo sed justo hendrerit varius quis in quam. Aenean in ex id enim vehicula sollicitudin id id dui. Sed ac sem sit amet lectus consectetur dignissim. Vestibulum ut erat vitae urna gravida vulputate. Curabitur et aliquam dolor, in rhoncus purus. In in pharetra urna, id porta lorem. Morbi maximus est in volutpat consequat. Vivamus non vestibulum mi. Proin eu ex accumsan metus eleifend consequat ac feugiat nisi. Nulla iaculis, neque vitae feugiat cursus, urna ligula auctor velit, id hendrerit mi nulla in felis. Fusce eget dui tellus. Morbi aliquet magna metus, nec varius lorem sollicitudin at. Pellentesque erat lectus, tincidunt eu pretium nec, condimentum a lectus. Donec tempus hendrerit augue facilisis viverra. Aenean consectetur imperdiet porta. Morbi mollis sem nec gravida mattis. Nunc in elementum diam, sit amet gravida justo. Aliquam erat volutpat.";
