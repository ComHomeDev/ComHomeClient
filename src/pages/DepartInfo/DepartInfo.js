import React from "react";
import "./DepartInfo.css";

import Card from "../../components/Card";

import { useParams } from "react-router-dom";

function DepartInfo() {
  let { sub, post } = useParams();
  console.log(sub);

  const getContent = (sub) => {
    let content = "";
    switch (sub) {
      case "info":
        content = (
          <div className="main-container">
            <div className="department-notice">학과소개</div>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="notice-text">
              컴퓨터공학과에서는 컴퓨터공학 분야의 기초 이론을 바탕으로 현장
              적응이 가능한 실무 능력을 쌓음으로써 디지털 컨버전스와 4차
              산업혁명 사회를 선도할 전문성과 독창성을 지닌 전문가를 양성하는
              것을 목표로 합니다.
            </div>
            <div className="education-track">교육과정 트랙</div>
            {/* <div track-applied-sw></div> */}
            <div className="track-sw-architect"></div>
            <div className="track-sw-architect-text">
              {" "}
              <p>소프트웨어 아키텍트 트랙</p>전문적인 소프트웨어 설계자 양성을
              위한 교육과정
            </div>
            <div className="track-applied-sw"></div>
            <div className="track-applied-sw-text">
              {" "}
              <p>응용소프트웨어 트랙</p>전문적인 소프트웨어 개발자 양성을 위한
              교육과정
            </div>
            <div className="track-database-ai"></div>
            <div className="track-database-ai-text">
              <p>데이터베이스 및 인공지능 트랙</p>데이터베이스 및 인공지능
              전문가 양성을 위한 교육과정
            </div>
            <div className="line-3"></div>
            <div className="education-goal">교육 목표</div>
            <div className="education-goal-text">
              현실 문제에 대한 표준 해법을 도출하고 이를 소프트웨어로 구현하는데
              필요한 기초이론과 실무능력을 배양합니다. 급속히 발전하는 IT 분야의
              다양한 신기술에 창의적으로 대응하는 데 필요한 전문 소양 및 사고
              능력을 배양합니다. 산학연 공조를 통해 산업 현장에서 필요로 하는
              실무형 여성 전문 인력을 양성합니다.
            </div>
            <div className="right-people">인재상</div>
            <div className="right-people-text">
              컴퓨터공학 분야의 기초 이론을 바탕으로, IT 분야의 신산업에 대응 및
              선도할 수 있는 문제 해결 능력과 실무능력을 겸비한 융합형
              소프트웨어 전문가입니다.
            </div>

            <div className="line-4"></div>
            <div className="line-5"></div>
          </div>
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
                  <table className="prof-table" border="0">
                    <tr>
                      <td>성명</td>
                      <td>{prof.name}</td>
                    </tr>
                    <tr>
                      <td>연구분야</td>
                      <td>{prof.research}</td>
                    </tr>
                    <tr>
                      <td>담당과목</td>
                      <td>{prof.subject}</td>
                    </tr>
                    <tr>
                      <td>연구실</td>
                      <td>{prof.lab}</td>
                    </tr>
                    <tr>
                      <td>전화번호</td>
                      <td>{prof.tel}</td>
                    </tr>
                    <tr>
                      <td>이메일</td>
                      <td>{prof.email}</td>
                    </tr>
                    <tr>
                      <td>홈페이지</td>
                      <td>{prof.page}</td>
                    </tr>
                  </table>
                </Card>
              );
            })}
          </div>
        );
        break;

      case "course":
        content = (
          <div>
            진로 현황 컴퓨터공학과에서 전공 지식과 현장 중심의 실무 능력을
            체계적으로 쌓은 후 졸업을 하면 다양한 분야로 진출할 수 있습니다.
            대학원에 진학하여 컴퓨터공학 세부 분야 전문가가 되는 길을 택할 수도
            있고, 공공기업이나 대기업 등에 취업하여 전공을 살려 우리나라의 IT
            기술 발전에 기여하는 길을 택할 수도 있습니다. 컴퓨터공학과에서는
            교직 과정도 있기 때문에 향후 중고등학교 정보 교사의 길을 선택하는
            것도 가능합니다. 스마트폰은 물론 곧 실용화될 무인자동차 등 우리
            주변에서 흔히 볼 수 있는 기기의 가장 중요한 부분이 소프트웨어입니다.
            많은 직업들이 인공지능 서비스로 대체될 가까운 미래에도 마지막까지
            살아남을 직업은 인공지능 관련 회사들의 소프트웨어 전문가들입니다.
            이에 따라 컴퓨터 소프트웨어 전문가에 대한 수요는 현재는 물론
            미래에도 꾸준히 증가할 것입니다. 여성공학인재 양성을 지향하는
            성신여자대학교 컴퓨터공학과 졸업생들의 취업률은 매우 높은 편입니다.
            취업의 양에서도 좋은 결과를 보이지만 취업의 질적인 면에서 상당수의
            학생이 IT 분야 대기업 및 중견기업에서 본인의 전공을 살리며
            우리나라의 IT 기술 발전에 일조를 하고 있습니다. 동문들의 사회활동
            컴퓨터공학과 졸업생들은 다음과 같은 다양한 분야에 진출하여 본인의
            능력을 발휘하고 있습니다. 어떤 컴퓨터 분야로 진출하여도 든든한
            성신여대 선배들이 기다리고 있습니다. - 삼성전자, 삼성 SDS, LG전자,
            LG CNS 등의 IT 분야 대기업 - 네이버, 카카오 등의 대형 IT 플랫폼 관련
            기업 - 엔씨소프트, 넷마블, 넥슨, 카카오게임즈 등의 게임 기업 - 구글,
            페이스북, 마이크로소프트, IBM 등의 해외 유명 IT 기업 -
            전자통신연구원 등의 국책연구소, 한국토지공사 등의 정부 산하기관 -
            주요 금융기관의 전산직 - 교직 이수를 통한 중·고등학교 교사 - 9급,
            7급 전산직 공무원 - 컴퓨터 관련 회사 창업 - 국내외 유명 대학원
            석·박사 과정에 진학 상세 진로 분류 - IT기반 플랫폼 기업: B2C
            서비스를 위한 플랫폼을 개발 및 운영 (e.g., 네이버, 카카오,
            비바리퍼블리카, 우아한형제들 등) - B2B 솔루션 기업: 타 기업에
            판매하기 위한 소프트웨어 솔루션을 개발하고 판매한 솔루션의 설치 및
            유지보수를 담당 (e.g., 티맥스소프트, 안랩 등) - 모바일/PC 게임 기업:
            온라인 게임의 개발 및 운영 (e.g., 엔씨소프트, 넷마블, 넥슨, 크래프톤
            등) - 비IT기업의 IT부서(전산직): 금융/제조 등 다양한 회사의
            전산직군으로 입사하여, 해당 회사의 IT 시스템을 개발 및 운영 (e.g.,
            삼성전자, LG전자, KB국민은행, 현대자동차 등) - SI/SM (System
            Integration/System Maintenance) 기업: 비IT기업으로부터 외주 받은 IT
            시스템을 개발/운영/유지보수 (e.g., 삼성 SDS, LG CNS, SK C&C 등) -
            스타트업: IT 관련 벤처에 취업 또는 창업 - 공공기관: 공익을 목적으로
            하는 기관에 전산직으로 입사하여 시스템 개발 및 운영 (한국은행,
            금융결제원, 한국산업은행, 금융보안원 등) - 연구소: 국책 연구기관이나
            기업 산하 연구소에서 컴퓨터 관련 연구개발을 수행 (e.g.,
            한국전자통신연구원 등) - 교사: 교직과정 이수 후 중고등학교에서
            컴퓨터, 정보 분야 교과목 교육 - 전산직 공무원: 공개채용 과정을 거쳐
            9급/7급 전산직 공무원으로 입사 후, 전산개발/정보보호 관련 기술/행정
            업무 전반 담당 - 변리사: 변리사 자격 시험 합격 후, 컴퓨터공학 관련
            분야의 특허업무 수행 - 대학원 진학 및 해외 유학: 국내외 컴퓨터공학
            관련 대학원에 진학하여 인공지능이나 보안 등 첨단 분야 석사, 박사
            학위 취득 (성신여자대학교 대학원 컴퓨터학과) 진출 분야 및 관련 직무
            ■ AI/빅데이터 - 데이터 엔지니어: 데이터 전처리 및 수집, 빅데이터
            처리 파이프라인 구축 - 머신러닝 엔지니어: AI 모델 개발 및 AI 솔루션
            응용 개발 - 데이터 과학자(Data Scientist): 수많은 구조화/비구조화
            데이터를 체계화 및 분석하여 비즈니스 인사이트를 도출 ■ 클라우드 -
            클라우드 아키텍트: 기업 내외 클라우드 아키텍처 설계 및 구축 -
            클라우드 운영자: 클라우드의 운영 및 장애 해결 ■ IoT/임베디드 -
            임베디드 소프트웨어 개발자: IoT 장치, 가전제품, 자동차 등 하드웨어를
            제어할 수 있는 프로그램과 특수 목적으로 사용되는 응용프로그램을 개발
            ■ ICT개발 (게임/금융/보안/제조 등) - 웹 프론트엔드 개발자: 웹
            브라우저를 통해 사용자에게 보여지는 프론트 단의 비즈니스 로직과
            사용자 영역의 개발을 담당 - 서버 개발자(백엔드 개발자): 대규모
            트래픽을 감당하기 위한 고가용성의 확장 가능한 시스템을 설계 - 모바일
            앱 개발자: Android/IOS 애플리케이션 개발 - 소프트웨어 품질 엔지니어:
            소프트웨어의 품질 보증(QA) 및 검증 업무 진행 - DevOps 엔지니어:
            개발자들이 서비스를 손쉽게 배포할 수 있도록 배포 파이프라인을 고도화
            ■ ICT인프라 - 시스템 엔지니어: 서버 구축과 운영 관리를 담당하며,
            시스템 장애에 대한 트러블 슈팅 담당 - 네트워크 엔지니어: 네트워크
            운영 및 설계/구축/기술지원 수행 - 데이터베이스 관리자(DBA): DB 설치,
            장애 대응, SQL Tuning 등 전반적인 DB 운영 업무 수행 - 보안 엔지니어:
            보안사고 위협 탐지 및 대응과 정보보안 솔루션 운영
          </div>
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
