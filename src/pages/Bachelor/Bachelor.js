import React from "react";
import { useParams } from "react-router-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./Bachelor.css";

import DnDContainer from "../../components/DnD/DnDContainer";
const option = {
  enableMouseEvents: true,
};

function Bachelor() {
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
        content = (
          <div className="connect-box">
            <div className="connect-title">학·석사 연계과정</div>
            {connArr.map((c) => {
            return <div className="connect-content-box">
              <div className="line"></div>
              <div className="connect-subtitle">{c.title}</div>
              <div className="connect-content">{c.content}</div>
            </div>
            })}
          </div>
        );
        
        break;
      default:
        break;
    }
    return content;
  };
  return (
    <div className="page-container bachelor-container">{getContent(sub)}</div>
  );
}

const connArr = [
  {
    title: "학·석사 연계과정",
    content: `가. 학사과정과 석사과정을 연계하여 학사 및 석사학위를 취득하는 조기학위취득 프로그램
    나. 학부를 한 학기 단축하여 7학기에 졸업하고, 대학원을 한 학기 단축하여 3학기에 졸업하는 제도로서 총 1년을 단축
      - 일반대학원: 학사 7학기(3.5년)+석사 3학기(1.5년) = 10학기(5년)
      `
  },

  {
    title: "지원자격",
    content: `가. 선발시기에 학부 5학기 이수자이면서 6학기 이수 예정자인 재학생, 휴학생(편입생 포함)
    나. 학부 졸업에 필요한 소정의 전 과정을 7학기에 이수할 수 있는 자
    다. 신청학기 전까지의 총 평점평균이 3.30 이상인 자
    라. 소속 학과(부)장의 추천을 받은 자
    마. 대학원 지원학과(전공)는 학부과정의 주전공, 복수전공, 연계전공 및 부전공과 관련된 학과(전공)
    또는 동일계열 학과(전공)에 한하며, 복수지원은 불허함
    
    ※ 자세한 사항은 대학원 홈페이지 학사안내->학칙 및 시행세칙(학석사 연계과정 운영시행세칙) 참조
    `
  },

  {
    title: "이수 프로세스",
    content: `가. 5학기(3학년 1학기) 7월중 학·석사 연계과정 신청 및 선발

    나. 선발된 자는 6~7학기(3학년 2학기~4학년 1학기)에 대학원 기초공통과목을 6~12학점 이수해야 함
    
    다. 7학기(4학년 1학기) 8월말 조기졸업 후 9월에 대학원 입학
    `
  },

  {
    title: "특전 및 장학제도",
    content: `가. 6학기 초에 대학원 지도교수를 배정받음

    나. 6~7학기 매학기 학부 과목을 최대 3학점까지 추가로 수강신청 가능
    
    다. 학부 재학 중 대학원의 각종 연구 활동에 참여할 수 있는 기회를 부여받음
    
    라. 학부 졸업시 주전공의 졸업논문을 면제할 수 있음(단, 복수·연계전공자는 선발된 대학원 학과의 전공에 해당하는 졸업논문만 면제할 수 있음)
    
    마. 대학원 입학 시 특별전형에 지원할 수 있음
    
    바. 대학원 학·석사 연계 장학금 : 대학원 마지막 1개 학기 등록금 전액 면제
    
    사. 대학원 난향장학금 : 대학원 입학금 전액 감면
    `
  },
  {
    title: "모집학과",
    content: `학부 관련학과(부·복수·연계전공 포함) 또는 동일계열 학과(전공)
    제외학과 없음
    `
  },

];



export default Bachelor;
