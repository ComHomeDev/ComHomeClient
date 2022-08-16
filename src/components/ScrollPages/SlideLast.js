import React from "react";
import Footer from "./Footer";
import "./SlideLast.css";

function SlideLast() {
  return (
    <div className="slide-last-container">
      <div className="box">
        <div className="title">진출 분야 및 관련 직무</div>
        <div className="content">
        ■ AI/빅데이터<br/>
- 데이터 엔지니어: 데이터 전처리 및 수집, 빅데이터 처리 파이프라인 구축 - 머신러닝 엔지니어: AI 모델 개발 및 AI 솔루션 응용 개발 - 데이터 과학자(Data Scientist): 수많은 구조화/비구조화 데이터를 체계화 및 분석하여 비즈니스 인사이트를 도출<br/>

■ 클라우드<br/>
- 클라우드 아키텍트: 기업 내외 클라우드 아키텍처 설계 및 구축<br/>
- 클라우드 운영자: 클라우드의 운영 및 장애 해결<br/>

■ IoT/임베디드<br/>
- 임베디드 소프트웨어 개발자: IoT 장치, 가전제품, 자동차 등 하드웨어를 제어할 수 있는 프로그램과 특수 목적으로 사용되는 응용프로그램을 개발<br/>

■ ICT개발 (게임/금융/보안/제조 등)<br/>
- 웹 프론트엔드 개발자: 웹 브라우저를 통해 사용자에게 보여지는 프론트 단의 비즈니스 로직과 사용자 영역의 개발을 담당<br/>
- 서버 개발자(백엔드 개발자): 대규모 트래픽을 감당하기 위한 고가용성의 확장 가능한 시스템을 설계<br/>
- 모바일 앱 개발자: Android/IOS 애플리케이션 개발<br/>
- 소프트웨어 품질 엔지니어: 소프트웨어의 품질 보증(QA) 및 검증 업무 진행<br/>
- DevOps 엔지니어: 개발자들이 서비스를 손쉽게 배포할 수 있도록 배포 파이프라인을 고도화<br/>

■ ICT인프라<br/>
- 시스템 엔지니어: 서버 구축과 운영 관리를 담당하며, 시스템 장애에 대한 트러블 슈팅 담당<br/>
- 네트워크 엔지니어: 네트워크 운영 및 설계/구축/기술지원 수행<br/>
- 데이터베이스 관리자(DBA): DB 설치, 장애 대응, SQL Tuning 등 전반적인 DB 운영 업무 수행<br/>
- 보안 엔지니어: 보안사고 위협 탐지 및 대응과 정보보안 솔루션 운영<br/>
        </div>
      </div>
    </div>
  );
}

export default SlideLast;