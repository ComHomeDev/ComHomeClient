export function SlideMain() {
  return (
    <div className="main-container">
      <div className="box">
        <div className="content-box">
          <div className="title">
            <div className="line"></div>
            진로 현황
          </div>
          <div className="content">
            컴퓨터공학과에서 전공 지식과 현장 중심의 실무 능력을 체계적으로 쌓은
            후 졸업을 하면 다양한 분야로 진출할 수 있습니다. 대학원에 진학하여
            컴퓨터공학 세부 분야 전문가가 되는 길을 택할 수도 있고, 공공기업이나
            대기업 등에 취업하여 전공을 살려 우리나라의 IT 기술 발전에 기여하는
            길을 택할 수도 있습니다. 컴퓨터공학과에서는 교직 과정도 있기 때문에
            향후 중고등학교 정보 교사의 길을 선택하는 것도 가능합니다.
            <br />
            <br />
            스마트폰은 물론 곧 실용화될 무인자동차 등 우리 주변에서 흔히 볼 수
            있는 기기의 가장 중요한 부분이 소프트웨어입니다. 많은 직업들이
            인공지능 서비스로 대체될 가까운 미래에도 마지막까지 살아남을 직업은
            인공지능 관련 회사들의 소프트웨어 전문가들입니다. 이에 따라 컴퓨터
            소프트웨어 전문가에 대한 수요는 현재는 물론 미래에도 꾸준히 증가할
            것입니다.
            <br />
            <br />
            여성공학인재 양성을 지향하는 성신여자대학교 컴퓨터공학과 졸업생들의
            취업률은 매우 높은 편입니다. 취업의 양에서도 좋은 결과를 보이지만
            취업의 질적인 면에서 상당수의 학생이 IT 분야 대기업 및 중견기업에서
            본인의 전공을 살리며 우리나라의 IT 기술 발전에 일조를 하고 있습니다.
            <br />
          </div>
        </div>
        <div className="image"></div>
      </div>
    </div>
  );
}

export function SlideSecond() {
  return (
    <div className="slide-second-container">
      <div className="second-box">
        <div className="second-image"></div>
        <div className="content-box">
          <div className="title">
            <div className="line"></div>
            동문들의 사회활동
          </div>
          <div className="content">
            컴퓨터공학과 졸업생들은 다음과 같은 다양한 분야에 진출하여 본인의
            능력을 발휘하고 있습니다. 어떤 컴퓨터 분야로 진출하여도 든든한
            성신여대 선배들이 기다리고 있습니다.
            <br />
            <br />
            - 삼성전자, 삼성 SDS, LG전자, LG CNS 등의 IT 분야 대기업
            <br />
            - 네이버, 카카오 등의 대형 IT 플랫폼 관련 기업
            <br />
            - 엔씨소프트, 넷마블, 넥슨, 카카오게임즈 등의 게임 기업
            <br />
            - 구글, 페이스북, 마이크로소프트, IBM 등의 해외 유명 IT 기업
            <br />
            - 전자통신연구원 등의 국책연구소, 한국토지공사 등의 정부 산하기관
            <br />
            - 주요 금융기관의 전산직
            <br />
            - 교직 이수를 통한 중·고등학교 교사
            <br />
            - 9급, 7급 전산직 공무원
            <br />
            - 컴퓨터 관련 회사 창업
            <br />
            - 국내외 유명 대학원 석·박사 과정에 진학
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SlideThird() {
  return (
    <div className="slide-third-container">
      <div className="third-box">
        <div className="third-line"></div>
        <div className="third-title">상세 진로 분류</div>
        <div className="content">
          <div className="table-box">
            <table className="content-table-one">
              {tableArrOne.map((t) => {
                return (
                  <tr className="third-tr">
                    <th className="third-th">{t.title}</th>
                    <td className="third-td">
                      {t.content}
                      <br />
                      {t.ex}
                    </td>
                  </tr>
                );
              })}
            </table>
            <table className="content-table-two">
              {tableArrTwo.map((t) => {
                return (
                  <tr className="third-tr">
                    <th className="third-th">{t.title}</th>
                    <td className="third-td">
                      {t.content}
                      <br />
                      {t.ex}
                    </td>
                  </tr>
                );
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
    title: "IT기반 플랫폼 기업",
    content: "B2C 서비스를 위한 플랫폼을 개발 및 운영",
    ex: "e.g. 네이버, 카카오, 비바리퍼블리카, 우아한형제들 등",
  },
  {
    title: "B2B 솔루션 기업",
    content:
      "타 기업에 판매하기 위한 소프트웨어 솔루션을 개발하고 판매한 솔루션의 설치 및 유지보수를 담당 ",
    ex: "e.g. 티맥스소프트, 안랩 등",
  },
  {
    title: "모바일/PC 게임 기업",
    content: "온라인 게임의 개발 및 운영",
    ex: "e.g. 엔씨소프트, 넷마블, 넥슨, 크래프톤 등",
  },
  {
    title: "비IT기업의 IT부서(전산직)",
    content:
      "금융/제조 등 다양한 회사의 전산직군으로 입사하여, 해당 회사의 IT 시스템을 개발 및 운영",
    ex: "e.g. 삼성전자, LG전자, KB국민은행, 현대자동차",
  },
  {
    title: `SI/SM 기업(System Integration/\nSystem Maintenance)`,
    content: "비IT기업으로부터 외주 받은 IT 시스템을 개발/운영/유지보수",
    ex: "e.g. 삼성 SDS, LG CNS, SK C&C 등",
  },
  {
    title: "스타트업",
    content: "IT 관련 벤처에 취업 또는 창업",
    ex: null,
  },
];

const tableArrTwo = [
  {
    title: "공공기관",
    content:
      "공익을 목적으로 하는 기관에 전산직으로 입사하여 시스템 개발 및 운영",
    ex: "e.g. 한국은행, 금융결제원, 한국산업은행, 금융보안원 등",
  },
  {
    title: "연구소",
    content:
      "국책 연구기관이나 기업 산하 연구소에서 컴퓨터 관련 연구개발을 수행",
    ex: "e.g. 티맥스소프트, 안랩 등",
  },
  {
    title: "교사",
    content: "교직과정 이수 후 중고등학교에서 컴퓨터, 정보 분야 교과목 교육",
    ex: null,
  },
  {
    title: "전산직 공무원",
    content:
      "공개채용 과정을 거쳐 9급/7급 전산직 공무원으로 입사 후, 전산개발/정보보호 관련 기술/행정 업무 전반 담당",
    ex: null,
  },
  {
    title: `변리사`,
    content: "변리사 자격 시험 합격 후, 컴퓨터공학 관련 분야의 특허업무 수행",
    ex: null,
  },
  {
    title: "대학원 진학 및 해외 유학",
    content:
      "국내외 컴퓨터공학 관련 대학원에 진학하여 인공지능이나 보안 등 첨단 분야 석사, 박사 학위 취득 (성신여자대학교 대학원 컴퓨터학과)",
    ex: null,
  },
];
