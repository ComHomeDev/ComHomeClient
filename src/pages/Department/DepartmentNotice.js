import React from "react";
import Header from "../../components/Header/Header";
import FastMenu from "../../components/Menu/FastMenu";

import {

} from "../../components/variables";
import "./Department.css";

function DepartmentNotice() {
  return (
    <div className="home-container">
      <Header />
        <div className="main-container">
          <div className="department-notice">
            학과소개
          </div>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="notice-text">
            컴퓨터공학과에서는 컴퓨터공학 분야의 기초 이론을 바탕으로 현장 적응이 가능한 실무 능력을 쌓음으로써 디지털 컨버전스와 4차 산업혁명 사회를 선도할 전문성과 독창성을 지닌 전문가를 양성하는 것을 목표로 합니다.
          </div>
          <div className="education-track">교육과정 트랙</div>
          <div track-applied-sw>d</div>
          <img className="track-sw-architect" alt="소프트웨어아키텍트트랙" src="../../../public/software_architect_track.png" />
          <div className="track-sw-architect-text"> <p>소프트웨어 아키텍트 트랙</p>전문적인 소프트웨어 설계자 양성을 위한 교육과정</div>
          <img className="track-applied-sw" alt="응용소프트웨어트랙" src="../../../public/applied_software_track.png" />
          <div className="track-applied-sw-text"> <p>응용소프트웨어 트랙</p>전문적인 소프트웨어 개발자 양성을 위한 교육과정</div>
          <img className="track-database-ai" alt="데이터베이스인공지능트랙" src="../../../public/database_ai_track.png" />
          <div className="track-database-ai-text"><p>데이터베이스 및 인공지능 트랙</p>데이터베이스 및 인공지능 전문가 양성을 위한 교육과정</div>
          <div className="line-3"></div>
          <div className="education-goal">교육 목표</div>
          <div className="education-goal-text">
            현실 문제에 대한 표준 해법을 도출하고 이를 소프트웨어로 구현하는데 필요한 기초이론과 실무능력을 배양합니다. 급속히 발전하는 IT 분야의 다양한 신기술에 창의적으로 대응하는 데 필요한 전문 소양 및 사고 능력을 배양합니다. 산학연 공조를 통해 산업 현장에서 필요로 하는 실무형 여성 전문 인력을 양성합니다.
          </div>
          <div className="right-people">인재상</div>
          <div className="right-people-text">
            컴퓨터공학 분야의 기초 이론을 바탕으로, IT 분야의 신산업에 대응 및 선도할 수 있는 문제 해결 능력과 실무능력을 겸비한 융합형 소프트웨어 전문가입니다.
          </div>
          
          <div className="line-4"></div>

          
          <div className="line-5"></div>
        </div>
      <FastMenu />
    </div>
  );
}

export default DepartmentNotice;
