import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { AiOutlineGithub, AiOutlineAppstore } from "react-icons/ai";

import "./StudentActivity.css";
import img from "./icons.png";

import Header from "../../components/FixedCpnt/Header";
import SubHeader from "../../components/FixedCpnt/SubHeader";
import FastMenu from "../../components/FixedCpnt/FastMenu";
import Footer from "../../components/FixedCpnt/Footer";

import Modal from "../../components/Modal/Modal";
import Card from "../../components/Card";

function StudentActivity() {
  const [mode, setMode] = useState("read");
  const [modalState, setModalState] = useState(false);
  let { sub } = useParams();

  const openModal = (data) => {
    setModalState(true);
  };

  const closeModal = (event) => {
    event.preventDefault();
    setModalState(false);
  };

  console.log(sub);
  return (
    <div className="page-container student-container">
      <Header /> <FastMenu />
      <div className="page-body student-body">
        <SubHeader title={"학생 활동"} index={4} sub={sub} />
        {sub === "club" ? (
          <div className="student-club">
            {clubArr.map((club) => {
              return (
                <div className={club.name}>
                  <Card className={"club-card"} hover={false}>
                    {club.name}
                  </Card>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="student-project">
            {projectArr.map((pro, index) => {
              return (
                <div key={pro.title + index} className="project-container">
                  <Card
                    key={pro.title}
                    className={"project-card"}
                    hover={false}
                  >
                    <img src={img} alt="img" className="display-modal-img" />
                    <div className="project-simple-info">
                      {pro.title} | {pro.developer}
                    </div>
                    {/* <button onClick={openModal}>butto</button> */}
                  </Card>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <button onClick={openModal}>butto</button>
      {modalState && (
        <Modal
          className="new__review__modal"
          onClose={closeModal}
          maskClosable={true}
          visible={true}
          background={"#fff8c9"}
          color={"#000000"}
        >
          <ProjectModal project={project} />
        </Modal>
      )}
      <Footer />
    </div>
  );
}

export default StudentActivity;

const ProjectModal = ({ project }) => {
  return (
    <div className="display-modal">
      <div className="display-modal-btn"></div>
      <div className="display-modal-container">
        <div className="display-title-container">
          <img src={img} alt="img" className="display-modal-img" />
          <div className="display-simple-desc">
            <div className="display-title">{project.title}</div>
            <div className="display-developer">{project.developer}</div>
            <div className="display-tag">
              {project.tag.map((data, i) => {
                if (i === project.tag.length - 1) {
                  return data;
                }
                return data + " | ";
              })}
            </div>
          </div>
        </div>
        <div className="display-desc-container">
          {project.link.map((data) => {
            return (
              <button
                key={data.linkname}
                className={`display-link ${
                  data.linkname === "github" ? `git` : ""
                }`}
                onClick={() => window.open(data.url, "_blank")}
              >
                {data.linkname === "github" ? (
                  <AiOutlineGithub size={"1.3em"} />
                ) : (
                  <AiOutlineAppstore size={"1.3em"} />
                )}
                &nbsp;
                {data.linkname === "github"
                  ? "깃허브로 이동하기"
                  : "웹 / 앱으로 이동하기"}
              </button>
            );
          })}

          <div className="display-desc-box">
            <div className="display-box-title">프로젝트 소개</div>
            <div className="display-box-desc">{project.introduce}</div>
          </div>
          <div className="display-row">
            <div className="display-desc-box">
              <div className="display-box-title">사용 스택/ 프레임워크</div>
              <div className="display-box-desc">{project.stack}</div>
            </div>
            <div className="display-desc-box">
              <div className="display-box-title">
                참가한 공모전/ 대회/ 동아리
              </div>
              <div className="display-box-desc">{project.competition}</div>
            </div>
          </div>
          <div className="display-desc-box">
            <div className="display-box-title">구현 화면</div>
            <div className="display-box-desc"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const clubArr = [
  {
    name: "init",
    desc: "init은 컴퓨터공학과 학생들을 위한 학과 동아리로 2020년에 결성되었습니다. init은 컴퓨터공학과 내 선후배 간의 네트워크 구축 도모라는 목표에서 시작하였습니다. 주요 동아리 활동으로 동아리원의 최신 IT 기술 발표 및 운영진의 알고리즘 교육을 매주 진행합니다. 뿐만 아니라 웹, 앱, 게임 등의 트랙별로 나누어진 팀 프로젝트와 자체 해커톤까지 준비되어 보다 많은 경험을 쌓을 수 있습니다. 컴퓨터공학 주전공생들이기에 돈독한 유대감을 형성하고, 선후배 간의 정보 공유를 통해 모두에게 도움이 될 수 있는 과 동아리입니다. init의 활동은 인스타그램 @sswu_init에서 확인하실 수 있습니다.",
    link: "https://www.instagram.com/sswu_init/",
  },
  {
    name: "C.O.M.",
    desc: "C.O.M.은 Computer Operating Mania의 약자로, 2000년에 결성된 오랜 전통을 가진 소모임으로 현재는 컴퓨터공학과, 정보시스템공학과, AI융합학부 학생들로 구성되어있습니다. 짝선배, 짝후배 제도를 통해서 선후배 간의 소통을 활성화 하고 MT, 소풍 등을 통한 친목 도모 활동을 통해 선후배 및 학과 간의 교류를 활발히 합니다. 1학기에는 파이썬을, 2학기에는 C++ 코딩 스터디를 통해 학교 강의를 심화적으로 공부하고 복습할 수 있는 기회를 제공합니다. 이외에도 다양한 정보를 제공함으로써 전공에 대한 관심도를 높여주는 길잡이 역할을 하고 있습니다.",
    link: null,
  },
  {
    name: "ChemiCom",
    desc: "ChemiCom은 Chemistry와 Computer의 합성어로 1987년 성신여대 전산학과와 한양대 화학응용과(현 유기나노공학과)와 함께 만든 조인트 소모임입니다. 현재는 성신여대 컴퓨터공학과, 정보시스템공학과, AI융합학부 그리고 한양대 유기나노공학과 학생들이 함께하고 있습니다. 일주일에 한 번씩 모여 컴퓨터 관련 스터디 및 친목 도모 활동을 합니다.",
    link: null,
  },
];

const projectArr = [
  {
    title: "Comhome",
    developer: "개발의 성지",
    img: "./icons.png",
  },

  {
    title: "CO-IN",
    developer: "Coin",
    img: "./icons.png",
  },
  {
    title: "수정물산",
    developer: "CrystalProduct3",
    img: "./icons.png",
  },
  {
    title: "Comhome",
    developer: "개발의 성지",
    img: "./icons.png",
  },

  {
    title: "CO-IN",
    developer: "Coin",
    img: "./icons.png",
  },
  {
    title: "수정물산",
    developer: "CrystalProduct3",
    img: "./icons.png",
  },
];

const project = {
  img: "./icons.png",
  title: "ComHome",
  developer: "개발의 성지",
  tag: ["웹", "2022 소웨경", "PWA"],
  link: [
    { linkname: "web", url: "www.naver.com" },
    { linkname: "github", url: "https://github.com/ComHomeDev" },
  ],
  introduce:
    "컴퓨터공학과 공식 홈페이지 개선을 위한 프로젝트!선배와의 대화, 나의 작품 전시, 다양한 대외활동 모집 및 참여가 가능합니다!",
  stack: "FE: React.js, BE:Node.js, MySQL",
  competition: "2022 성신여자대학교 소프트웨어 경진대회",
};
