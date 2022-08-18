import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiOutlineAppstore } from "react-icons/ai";

import "./StudentActivity.css";
import img from "./icons.png";

import Modal from "../../components/Modal/Modal";
import Card from "../../components/Card";

import { HrStyle } from "../../components/Post/ReadPost";
import { deletePost } from "../../api/main";

export default function StudentActivity({ data }) {
  const [projectArr, setProjectArr] = useState(data);
  const [modalState, setModalState] = useState(false);
  const [modalData, setModalData] = useState("");

  useEffect(() => {
    setProjectArr(data);
  }, [data]);

  const openModal = (data) => {
    setModalData(data);
    setModalState(true);
  };

  const closeModal = (event) => {
    event.preventDefault();
    setModalState(false);
  };

  return (
    <div className="student-container">
      <Link to="./new" className="list-create-button">
        글 작성하기
      </Link>

      <div className="student-project-wrap">
        {projectArr?.map((pro) => {
          return (
            <div
              key={pro.no}
              className="project-container"
              onClick={() => openModal(pro)}
            >
              <Card key={pro.no} className={"project-card"}>
                <img src={pro.img[0]} alt="img" className="display-modal-img" />
                <div className="project-simple-info">
                  {pro.title} | {pro.team}
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
          <ProjectModal project={modalData} />
        </Modal>
      )}
    </div>
  );
}

export function StudentClub() {
  return (
    <div className="student-club">
      {clubArr.map((club) => {
        return (
          <div key={club.id} className={`${club.id} club-card-container`}>
            <div className="club-card">
              <div className="front">
                <div className={`club-logo ${club.id}`} />
                <div className="club-name">{club.name}</div>
                <div className="club-short">{club.short}</div>
                <div className="club-hover-info">클릭하여 자세히 보기</div>
              </div>
              <div className="back">
                <div className="club-content">
                  <div className="club-name">{club.name}</div>
                  <hr style={HrStyle} />
                  <div className="club-info">&gt; 소개</div>
                  <div className="club-who">{club.info}</div>

                  <div className="club-info">&gt; 활동</div>
                  {club.what.map((act) => {
                    return <li className="club-what">{act}</li>;
                  })}
                  <div className="club-info">&gt; 링크</div>
                  <a className="club-link">{club.link}</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const ProjectModal = ({ project }) => {
  let { board, sub } = useParams();
  const navigate = useNavigate();
  const awardColor = (award) =>
    award === "금상"
      ? "gold"
      : award === "은상"
      ? "silver"
      : award === "동상"
      ? "bronze"
      : "award";

  const onDelete = () => {
    if (window.confirm("글이 삭제됩니다.\n정말 진행하시겠습니까?")) {
      //삭제 api
      deletePost(sub, project.no);
      navigate(`../${board}/${sub}?page=display`, { replace: true });
    }
  };
  return (
    <div className="display-modal">
      <div className="display-modal-btn"></div>
      <div className="display-modal-container">
        <div className="display-title-container">
          <img src={project.img[0]} alt="img" className="display-modal-img" />
          <div className="display-simple-desc">
            <div className="display-title">
              {project.title}
              {project.award !== "" && (
                <span className={`award-tag ${awardColor(project.award)}`}>
                  {project.award}
                </span>
              )}
            </div>
            <div className="display-developer">{project.team}</div>
            <div className="display-tag">
              {project.keyword.split(" ").map((data, i) => {
                if (i === project.keyword.split(" ").length - 1) {
                  return data;
                }
                return data + " | ";
              })}
            </div>
          </div>
          <div className="article-edit-buttons">
            {project.iduser === window.localStorage.getItem("userID") && ( //window.localStorage.getItem("userID")
              <>
                <Link
                  to={`/${board}/${sub}/update`}
                  className="article-edit"
                  state={{ data: project, files: null }}
                >
                  수정하기
                </Link>
                <button className="article-delete" onClick={onDelete}>
                  삭제하기
                </button>
              </>
            )}
          </div>
        </div>
        <div className="display-desc-container">
          {project.link_service !== "" && (
            <button
              key={project.linkname}
              className="display-link service"
              onClick={() => window.open(project.link_service, "_blank")}
            >
              <AiOutlineAppstore size={"1.3em"} />
              &nbsp;웹 / 앱으로 이동하기
            </button>
          )}
          {project.link_github !== "" && (
            <button
              key={project.linkname}
              className="display-link github"
              onClick={() => window.open(project.link_github, "_blank")}
            >
              <AiOutlineGithub size={"1.3em"} />
              &nbsp;깃허브로 이동하기
            </button>
          )}

          <div className="display-desc-box">
            <div className="display-box-title">프로젝트 소개</div>
            <div className="display-box-desc">{project.content}</div>
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
              <div className="display-box-desc">{project.contestName}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const clubArr = [
  {
    id: "com",
    name: "C.O.M.",
    short:
      "C.O.M.은 Computer Operating Mania의 약자로, 2000년에 결성된 오랜 전통을 가진 소모임입니다.",

    info: "C.O.M.은 Computer Operating Mania의 약자로, 2000년에 결성된 오랜 전통을 가진 소모임으로 현재는 컴퓨터공학과, 정보시스템공학과, AI융합학부 학생들로 구성되어있습니다.",
    what: [
      "짝선배, 짝후배 제도를 통해서 선후배 간의 소통을 활성화 하고 MT, 소풍 등을 통한 친목 도모 활동을 통해 선후배 및 학과 간의 교류를 활발히 합니다.",
      "1학기에 파이썬, 2학기에 C++ 코딩 스터디를 통해 학교 강의를 심화적으로 공부하고 복습할 수 있는 기회를 제공합니다.",
      "다양한 정보를 제공함으로써 전공에 대한 관심도를 높여주는 길잡이 역할을 하고 있습니다.",
    ],
    keyword: "",
    link: null,
  },
  {
    id: "init",
    name: "init",
    short:
      "init은 컴퓨터공학과 내 선후배 간의 네트워크 구축 도모라는 목표에서 시작한 학과 동아리입니다.",
    info: "컴퓨터공학 주전공생들이기에 돈독한 유대감을 형성하고, 선후배 간의 정보 공유를 통해 모두에게 도움이 될 수 있는 과 동아리입니다. init의 활동은 인스타그램 @sswu_init에서 확인하실 수 있습니다.",
    what: [
      "주요 동아리 활동으로 동아리원의 최신 IT 기술 발표 및 운영진의 알고리즘 교육을 매주 진행합니다.",
      "웹, 앱, 게임 등의 트랙별로 나누어진 팀 프로젝트를 진행합니다.",
      "자체 해커톤도 준비되어 보다 많은 경험을 쌓을 수 있습니다.",
    ],
    keyword: "",
    link: "https://www.instagram.com/sswu_init/",
  },

  {
    id: "chemicom",
    name: "ChemiCom",
    short:
      "ChemiCom은 Chemistry와 Computer의 합성어로, 1987년 성신여대 전산학과와 한양대 화학응용과(현 유기나노공학과)와 함께 만든 조인트 소모임입니다.",
    info: "ChemiCom은 Chemistry와 Computer의 합성어로, 1987년 성신여대 전산학과와 한양대 화학응용과(현 유기나노공학과)와 함께 만든 조인트 소모임입니다. 현재는 성신여대 컴퓨터공학과, 정보시스템공학과, AI융합학부 그리고 한양대 유기나노공학과 학생들이 함께하고 있습니다.",
    what: [
      "일주일에 한 번씩 모여 컴퓨터 관련 스터디 및 친목 도모 활동을 합니다.",
    ],
    keyword: "",
    link: null,
  },
];
