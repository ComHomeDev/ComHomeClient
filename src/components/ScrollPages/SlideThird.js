import React from "react";
import "./SlideThird.css";

function SlideThird() {
    return (
        <div className="slide-third-container">
            <div className="third-box">
            <div className="third-line"></div>
                <div className="third-title">상세 진로 분류</div>
                <div className="content">
                    <div className="table-box">
                        <table className="content-table-one">
                            {tableArrOne.map((t)=>{
                                return(
                                <tr className="third-tr">
                                    <th className="third-th">{t.title}</th>
                                    <td className="third-td">{t.content}<br/>{t.ex}</td>
                                </tr>
                                )
                            })}
                        </table>
                        <table className="content-table-two">
                            {tableArrTwo.map((t)=>{
                                return(
                                <tr className="third-tr">
                                    <th className="third-th">{t.title}</th>
                                    <td className="third-td">{t.content}<br/>{t.ex}</td>
                                </tr>
                                )
                            })}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

const tableArrOne = [
    {
        title:"IT기반 플랫폼 기업",
        content:"B2C 서비스를 위한 플랫폼을 개발 및 운영",
        ex:"e.g. 네이버, 카카오, 비바리퍼블리카, 우아한형제들 등",
    },
    {
        title:"B2B 솔루션 기업",
        content:"타 기업에 판매하기 위한 소프트웨어 솔루션을 개발하고 판매한 솔루션의 설치 및 유지보수를 담당 ",
        ex:"e.g. 티맥스소프트, 안랩 등",
    },
    {
        title:"모바일/PC 게임 기업",
        content:"온라인 게임의 개발 및 운영",
        ex:"e.g. 엔씨소프트, 넷마블, 넥슨, 크래프톤 등",
    },
    {
        title:"비IT기업의 IT부서(전산직)",
        content:"금융/제조 등 다양한 회사의 전산직군으로 입사하여, 해당 회사의 IT 시스템을 개발 및 운영",
        ex:"e.g. 삼성전자, LG전자, KB국민은행, 현대자동차",
    },
    {
        title:`SI/SM 기업(System Integration/\nSystem Maintenance)`,
        content:"비IT기업으로부터 외주 받은 IT 시스템을 개발/운영/유지보수",
        ex:"e.g. 삼성 SDS, LG CNS, SK C&C 등",
    },
    {
        title:"스타트업",
        content:"IT 관련 벤처에 취업 또는 창업",
        ex:null,
    },
];

const tableArrTwo = [
    {
        title:"공공기관",
        content:"공익을 목적으로 하는 기관에 전산직으로 입사하여 시스템 개발 및 운영",
        ex:"e.g. 한국은행, 금융결제원, 한국산업은행, 금융보안원 등",
    },
    {
        title:"연구소",
        content:"국책 연구기관이나 기업 산하 연구소에서 컴퓨터 관련 연구개발을 수행",
        ex:"e.g. 티맥스소프트, 안랩 등",
    },
    {
        title:"교사",
        content:"교직과정 이수 후 중고등학교에서 컴퓨터, 정보 분야 교과목 교육",
        ex:null,
    },
    {
        title:"전산직 공무원",
        content:"공개채용 과정을 거쳐 9급/7급 전산직 공무원으로 입사 후, 전산개발/정보보호 관련 기술/행정 업무 전반 담당",
        ex:null,
    },
    {
        title:`변리사`,
        content:"변리사 자격 시험 합격 후, 컴퓨터공학 관련 분야의 특허업무 수행",
        ex:null,
    },
    {
        title:"대학원 진학 및 해외 유학",
        content:"국내외 컴퓨터공학 관련 대학원에 진학하여 인공지능이나 보안 등 첨단 분야 석사, 박사 학위 취득 (성신여자대학교 대학원 컴퓨터학과)",
        ex:null,
    },
];

export default SlideThird;