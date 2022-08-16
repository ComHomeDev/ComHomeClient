import React from "react";
import "./DepartInfo.css";

import Card from "../../components/Card";
import InfoPage from "../../components/Info";
import CoursePage from "../../components/Course";

import { useParams } from "react-router-dom";

function DepartInfo() {
  let { sub, post } = useParams();
  console.log(sub);

  const getContent = (sub) => {
    let content = "";
    switch (sub) {
      case "info":
        content=(
          <InfoPage/>
        );
        break;
      case "profInfo":
        content = (
          <div>
            {profArr.map((prof) => {
              return (
                <Card
                  className="prof-card"
                  hoverColor={"#ededed"}
                  shadowColor={"#f5f5f5"}
                >
                  <img className="prof-img" src={prof.img} />
                  <a className="prof-card-link" href={prof.page}>
                  <table className="prof-table" border="0">
                    <tr>
                      <td className="table-item">성명</td>
                      <td>{prof.name}</td>
                    </tr>
                    <tr>
                      <td className="table-item">연구분야</td>
                      <td>{prof.research}</td>
                    </tr>
                    <tr>
                      <td className="table-item">담당과목</td>
                      <td>{prof.subject}</td>
                    </tr>
                    <tr>
                      <td className="table-item">연구실</td>
                      <td>{prof.lab}</td>
                    </tr>
                    <tr>
                      <td className="table-item">전화번호</td>
                      <td>{prof.tel}</td>
                    </tr>
                    <tr>
                      <td className="table-item">이메일</td>
                      <td>{prof.email}</td>
                    </tr>
                    <tr>
                      <td className="table-item">홈페이지</td>
                      <td>{prof.page}</td>
                    </tr>
                  </table>
                    
                  </a>
                </Card>
              );
            })}
          </div>
        );
        break;

      case "course":
              content=(
                <CoursePage/>
              );
              break;

      case "enroll":
        break;

      default:
        break;
    }
    return content;
  };

  return <div className="prof-body">{getContent(sub)}</div>;
}

const profArr = [
  {
    img: "/img/jjwoo.jpg",
    name: "우종정",
    research: "임베디드 시스템, 모바일 컴퓨팅",
    subject:
      "자바프로그래밍 기초, 자바프로그래밍, 모바일소프트웨어, 모바일프로그래밍",
    lab: "수정관 A-502",
    tel: "02-920-7193",
    email: "jwoo@sungshin.ac.kr",
    page: "",
  },
  {
    img: "/img/ksshim.jpg",
    name: "심광섭",
    research: "자연어처리, 인공지능, 정보검색",
    subject: "컴퓨터프로그래밍, 운영체제, 시스템프로그래밍, 웹정보검색",
    lab: "수정관 A-806",
    tel: "02-920-7461",
    email: "shim@sungshin.ac.kr",
    page: "",
  },
  {
    img: "/img/dsseo.jpg",
    name: "서동수(지식서비스공과대학 학장)",
    research:
      "Software Engineering, Secure Software Engineering, Formal Methods",
    subject: "객체지향설계, 소프트웨어공학, 컴퓨터 프로그래밍",
    lab: "수정관 A-807",
    tel: "02-920-7526",
    email: "dseo@sungshin.ac.kr",
    page: "",
  },
  {
    img: "/img/eshong.jpg",
    name: "홍의석",
    research:
      "Software Quality Prediction, Mining Software Repositories, Software Metrics",
    subject: "C++프로그래밍, Java 프로그래밍, 소프트웨어 디자인패턴",
    lab: "수정관 A-805",
    tel: "02-920-7369",
    email: "	hes@sungshin.ac.kr",
    page: "",
  },
  {
    img: "/img/jwpark.jpg",
    name: "박지웅(학과장)",
    research: "시스템소프트웨어 (운영체제, 데이터베이스, 분산시스템)",
    subject:
      "데이터베이스, 서버시스템구축실습, 오픈소스응용, 프로젝트개발및창업",
    lab: "수정관 A-711",
    tel: "02-920-7365",
    email: "jwpark12@sungshin.ac.kr",
    page: "https://sites.google.com/sungshin.ac.kr/ssl/home",
  },
  {
    img: "/img/gykim.jpg",
    name: "김규영",
    research: "컴퓨터네트워크, 인-네트워크 컴퓨팅, 데이터센터, 클라우드컴퓨팅",
    subject: "컴퓨터네트워크, 운영체제, 데이터베이스, 프로젝트설계 외",
    lab: "수정관 A-908",
    tel: "02-920-7366",
    email: "	gykim@sungshin.ac.kr",
    page: "https://sites.google.com/view/nslab-sswu",
  },
];




export default DepartInfo;
