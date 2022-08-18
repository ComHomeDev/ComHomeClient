import React, { useState, useEffect } from "react";
import "./StudentCouncil.css";
import { useParams } from "react-router-dom";

import Card from "../../components/Card";

import Calendar from "../../components/Calendar/Calendar";

function StudentCouncil() {
  let { sub } = useParams();
  const [event, setEvent] = useState([]);

  const getContent = (category) => {
    let content = "";
    switch (category) {
      case "intro":
        content = <StudentCouncilInfo />;
        break;
      case "calendar":
        content = (
          <div className="council-calendar">
            <Card hover={false} className="council-calendar-card">
              <Calendar showEvent={false} postEvent={setEvent} />
            </Card>
            <div className="council-calendar-event">
              {event.map((data) => {
                return (
                  <div className="council-event">
                    <div className="council-event-name">{data.title}</div>
                    <div className="council-event-desc">
                      {data.content !== undefined &&
                        data.content.substring(0, 100)}
                      ...
                    </div>
                    <div className="council-event-date">
                      시작 날짜 : {data.start_date}
                    </div>
                    <div className="council-event-date">
                      마감 날짜 : {data.end_date}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
        break;
      default:
        break;
    }
    return content;
  };
  return <div className="student-body">{getContent(sub)}</div>;
}

export default StudentCouncil;

const StudentCouncilInfo = () => (
  <div className="council-info">
    <div className="council-title">학생회 안내</div>
    <br />
    <div className="council-explain">
      컴퓨터공학과 학생회는 학생회장단을 중심으로 각 학년의 과대표와 부과대표가
      소속되어 있는 학과운영위원회와 기획부, 홍보부, 복지부, 총무부, 학술부로
      이루어진 과학생회로 구성되어있습니다. <br />
      <br />
      학생회는 컴퓨터공학과의 발전과 활발한 소통을 목표로 다음과 같이 다양한
      행사를 진행하고 있습니다.
      <br /> <br />
      ⦁ 신입생 OT 및 MT, 신입생 환영회 <br />
      ⦁ 개강 파티, 종강 파티 <br />
      ⦁ 교수님과의 만남 <br />
      ⦁ 중간고사와 기말고사 간식행사 및 스터디위드인 <br />
      ⦁ E-Sports 대회 <br /> ⦁ 스승의 날 행사 <br /> ⦁ 짝선배 짝후배
      <br /> ⦁ 학교 축제에서 컴퓨터공학과 부스 운영 <br /> ⦁ 학술제
      <br /> ⦁ 학년별 프로젝트 <br /> ⦁ 만족도 조사, 중간 강의평가 등 다양한
      설문조사를 통한 소통 <br /> ⦁ 다양한 행사 진행
    </div>
    <br />
    <div className="council-title">
      컴퓨터공학과 학생회 조직도 및 부서별 역할
    </div>
    <br />
    <div className="council-img">
      <img
        className="council-map-img"
        alt="컴퓨터공학과 학생회 조직도"
        src={`${process.env.PUBLIC_URL}/img/council.png`}
      />
      <img
        className="council-roll-img"
        alt="컴퓨터공학과 학생회 부서별 역할"
        src={`${process.env.PUBLIC_URL}/img/council_roll.png`}
      />
    </div>
  </div>
);
