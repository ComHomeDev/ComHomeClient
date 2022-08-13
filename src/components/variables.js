import { MdPermDeviceInformation } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlinePartition } from "react-icons/ai";
import { SiStarship } from "react-icons/si";
import { FaRegObjectGroup } from "react-icons/fa";

export const fastMenu = [
  {
    name: "교수 소개",
    address: "/",
  },
  {
    name: "교육과정",
    address: "/bachelor/curriculum",
  },
  {
    name: "공식 홈페이지",
    address: "https://www.sungshin.ac.kr/sites/main_kor/main.jsp",
  },
  {
    name: "성신 포탈",
    address: "https://portal.sungshin.ac.kr/sso/login.jsp",
  },
  {
    name: "교육 시스템",
    address: "https://lms.sungshin.ac.kr/ilos/main/main_form.acl",
  },
  {
    name: "입학 안내",
    address: "https://ipsi.sungshin.ac.kr/main.htm",
  },
];

//IoAnalyticsOutline;IoGitBranchOutline;MdTimeline;

export const headerMenu = [
  {
    name: "학과소개",
    address: "/",
    detail: [
      { name: "학과 소개", address: "/" },
      { name: "교수 소개", address: "/" },
      { name: "졸업 후 진로", address: "/" },
      { name: "입학 안내", address: "/" },
    ],
  },
  {
    name: "학사정보",
    eng: "bachelor",
    address: "/bachelor/curriculum?page=info",
    detail: [
      {
        name: "교육과정",
        eng: "curriculum",
        address: "/bachelor/curriculum?page=info",
      },
      {
        name: "트랙 구성도",
        eng: "track",
        address: "/bachelor/track?page=info",
      },
      {
        name: "학·석사 연계과정",
        eng: "connect",
        address: "/bachelor/connect?page=info",
      },
    ],
  },
  {
    name: "공지사항",
    eng: "notice",
    address: "/notice/csnotice?page=list",
    detail: [
      {
        name: "학과 공지",
        eng: "csnotice",
        address: "/notice/csnotice?page=list",
      },
      {
        name: "채용/인턴십",
        eng: "recruit_internship",
        address: "/notice/recruit_internship?page=list",
      },
      {
        name: "교육/공모전",
        eng: "edu_contest",
        address: "/notice/edu_contest?page=list",
      },
    ],
  },
  {
    name: "학생회",
    eng: "studentcouncil",
    address: "/studentcouncil/intro?page=info",
    detail: [
      {
        name: "학생회 소개",
        eng: "intro",
        address: "/studentcouncil/intro?page=info",
      },
      {
        name: "학생회 공지",
        eng: "student_council_notice",
        address: "/studentcouncil/student_council_notice?page=list",
      },
      {
        name: "학생회 달력",
        eng: "calendar",
        address: "/studentcouncil/calendar?page=info",
      },
    ],
  },
  {
    name: "학생 활동",
    eng: "student",
    address: "/student/club?page=true",
    detail: [
      { name: "동아리 소개", eng: "club", address: "/student/club?page=info" },
      {
        name: "작품 전시",
        eng: "exhibition",
        address: "/student/exhibition?page=display",
      },
    ],
  },
  {
    name: "커뮤니티",
    eng: "community",
    address: "/community/extra_review?page=list",
    detail: [
      {
        name: "대외활동 후기",
        eng: "extra_review",
        address: "/community/extra_review?page=list",
      },
      {
        name: "취업 후기",
        eng: "job_review",
        address: "/community/job_review?page=list",
      },
      {
        name: "졸업생 인터뷰",
        eng: "interview",
        address: "/community/interview?page=list",
      },
    ],
  },
];

export const curriculum = [
  {
    id: 1,
    name: "소프트웨어 아키텍트 트랙",
    ability: "소프트웨어 아키텍트 및 프로젝트 관리 전문성",
    detail:
      "소프트웨어 설계 전문가, 소프트웨어 엔지니어, 소프트웨어 시스템 컨설턴트로 삼성, 네이버, 카카오 등과 같은 국내 IT 관련 기업으로 진출할 수 있으며, 기회가 된다면 해외 IT 관련 기업으로도 진출할 수 있다. 교직 이수를 통해 정보 분야 교사가 될 수도 있고, 정부 산하의 IT 관련 기관으로 진출할 수도 있다.",
    grade: [
      {
        class: [
          { name: "파이썬 프로그래밍", term: "1-1" },
          { name: "C++ 프로그래밍", term: "1-2" },
        ],
      },
      {
        class: [
          { name: "고급C++ 프로그래밍", term: "2-1" },
          { name: "자료구조", term: "2-1" },
          { name: "고급자료구조", term: "2-2" },
          { name: "자바 프로그래밍", term: "2-1" },
          { name: "고급자바 프로그래밍", term: "2-2" },
        ],
      },
      {
        class: [
          { name: "소프트웨어분석및설계", term: "3-1" },
          { name: "소프트웨어공학", term: "3-1" },
          { name: "서버시스템구축실습", term: "3-1" },
        ],
      },
      {
        class: [
          { name: "소프트웨어 디자인패턴", term: "4-1" },
          { name: "소프트웨어 아키텍처", term: "4-2" },
          { name: "캡스톤 디자인", term: "4-1" },
          { name: "융합 캡스톤 디자인", term: "4-2" },
        ],
      },
    ],
    extracurri: [
      "오픈소스 GIT 교육 프로그램",
      "동계 SW 역량 강화 블렌디드 러닝 프로그램",
      "여름방학 코딩테스트 취업준비과정 프로그램",
    ],
    job: [
      "소프트웨어 엔지니어",
      "소프트웨어 설계 전문가",
      "소프트웨어 시스템 컨설턴트",
    ],
  },
  {
    id: 2,
    name: "응용소프트웨어 트랙",
    ability: "응용소프트웨어 및 시스템소프트웨어 전문성",
    detail:
      "시스템 엔지니어, 응용 소프트웨어 개발자, 시스템 소프트웨어 개발자로 삼성, 네이버, 카카오 등과 같은 국내 IT 관련 기업으로 진출할 수 있으며, 기회가 된다면 해외 IT 관련 기업으로도 진출할 수 있다. 교직 이수를 통해 정보 분야 교사가 될 수도 있고, 정부 산하의 IT 관련 기관으로 진출할 수도 있다.",
    grade: [
      {
        class: [
          { name: "파이썬 프로그래밍", term: "1-1" },
          { name: "C++ 프로그래밍", term: "1-2" },
        ],
      },

      {
        class: [
          { name: "고급C++ 프로그래밍", term: "2-1" },
          { name: "자료구조", term: "2-1" },
          { name: "컴퓨터시스템관리", term: "2-2" },
          { name: "컴퓨터구조", term: "2-2" },
          { name: "운영체제", term: "2-2" },
          { name: "컴퓨터네트워크", term: "2-2" },
          { name: "데이터베이스", term: "2-2" },
        ],
      },
      {
        class: [
          { name: "시스템 프로그래밍", term: "3-1" },
          { name: "모바일 프로그래밍", term: "3-2" },
          { name: "프로그래밍 언어론", term: "3-2" },
          { name: "오픈소스 소프트웨어", term: "3-2" },
        ],
      },
      {
        class: [
          { name: "컴파일러", term: "4-1" },
          { name: "캡스톤 디자인", term: "4-1" },
          { name: "융합 캡스톤 디자인", term: "4-2" },
        ],
      },
    ],
    extracurri: [
      "오픈소스 GIT 교육 프로그램",
      "동계 SW 역량 강화 블렌디드 러닝 프로그램",
      "여름방학 코딩테스트 취업준비과정 프로그램",
      "네트워크 보안(융보공)",
      "데이터베이스 보안(융보공)",
      "시스템 보안(융보공)",
    ],
    job: [
      "시스템 엔지니어",
      "응용 소프트웨어 개발자",
      "시스템 소프트웨어 개발자",
    ],
  },
  {
    id: 3,
    name: "데이터베이스 및 인공지능 트랙",
    ability: "데이터베이스 및 인공지능 전문성",
    detail:
      "데이터 엔지니어, DB 전문가로 삼성, 네이버, 카카오 등과 같은 국내 IT 관련 기업으로 진출할 수 있으며, 기회가 된다면 해외 IT 관련 기업으로도 진출할 수 있다. 교직 이수를 통해 정보 분야 교사가 될 수도 있고, 정부 산하의 IT 관련 기관으로 진출할 수도 있다.",
    grade: [
      {
        class: [
          { name: "파이썬 프로그래밍", term: "1-1" },
          { name: "C++ 프로그래밍", term: "1-2" },
          { name: "기초통계학", term: "1-1" },
          { name: "미적분과벡터해석기초", term: "1-2" },
          { name: "이산수학", term: "1-2" },
        ],
      },
      {
        class: [
          { name: "고급C++ 프로그래밍", term: "2-1" },
          { name: "자료구조", term: "2-1" },
          { name: "고급자료구조", term: "2-2" },
          { name: "데이터베이스", term: "2-2" },
          { name: "인공지능", term: "2-2" },
        ],
      },
      {
        class: [
          { name: "알고리즘", term: "3-1" },
          { name: "기계학습", term: "3-1" },
          { name: "정보검색", term: "3-2" },
          { name: "오픈소스 소프트웨어", term: "3-2" },
        ],
      },
      {
        class: [
          { name: "캡스톤 디자인", term: "4-1" },
          { name: "융합 캡스톤 디자인", term: "4-2" },
        ],
      },
    ],
    extracurri: [
      "자연어 처리(정시공)",
      "머신비전(정시공)",
      "컴퓨터 그래픽스(정시공)",
    ],
    job: ["데이터 엔지니어"],
  },
];

const classes = {
  first: [
    {
      name: "IT개론",
      isue: "핵심전공",
      dept: "지식서비스공과대학",
      semester: 1,
    },
    {
      name: "웹프로그래밍기초",
      isue: "핵심전공",
      dept: "지식서비스공과대학",
      semester: 1,
    },
    {
      name: "파이썬 프로그래밍",
      isue: "공통교양",
      dept: "지식서비스공과대학",
      semester: 1,
    },
    {
      name: "기초통계학",
      isue: "공통교양",
      dept: "지식서비스공과대학",
      semester: 1,
    },
    {
      name: "소프트웨어 융합기술개론",
      isue: "핵심전공",
      dept: "지식서비스공과대학",
      semester: 2,
    },
    {
      name: "디지털컨텐츠",
      isue: "핵심전공",
      dept: "지식서비스공과대학",
      semester: 2,
    },
    {
      name: "C++프로그래밍",
      isue: "핵심전공",
      dept: "지식서비스공과대학",
      semester: 2,
    },
    {
      name: "미적분과 벡터해석 기초",
      isue: "공통교양",
      dept: "지식서비스공과대학",
      semester: 2,
    },
    {
      name: "이산수학",
      isue: "핵심전공",
      dept: "지식서비스공과대학",
      semester: 2,
    },
  ],
  second: [
    {
      name: "컴퓨터시스템관리",
      isue: "핵심전공",
      dept: "컴퓨터공학과",
      semester: 1,
    },
    {
      name: "컴퓨터구조",
      isue: "핵심전공",
      dept: "지식서비스공과대학",
      semester: 1,
    },
    {
      name: "고급C++프로그래밍",
      isue: "핵심전공",
      dept: "지식서비스공과대학",
      semester: 1,
    },
    {
      name: "자료구조",
      isue: "핵심전공",
      dept: "지식서비스공과대학",
      semester: 1,
    },
    {
      name: "자바프로그래밍",
      isue: "핵심전공",
      dept: "지식서비스공과대학",
      semester: 1,
    },
    {
      name: "데이터베이스",
      isue: "핵심전공",
      dept: "지식서비스공과대학",
      semester: 2,
    },
    {
      name: "운영체제",
      isue: "핵심전공",
      dept: "지식서비스공과대학",
      semester: 2,
    },
    {
      name: "컴퓨터네트워크",
      isue: "핵심전공",
      dept: "지식서비스공과대학",
      semester: 2,
    },
    {
      name: "인공지능",
      isue: "핵심전공",
      dept: "지식서비스공과대학",
      semester: 2,
    },
    {
      name: "고급자료구조",
      isue: "핵심전공",
      dept: "컴퓨터공학과",
      semester: 2,
    },
    {
      name: "고급자바프로그래밍",
      isue: "핵심전공",
      dept: "컴퓨터공학과",
      semester: 2,
    },
  ],
  third: [
    {
      name: "서버시스템구축실습",
      isue: "심화전공",
      dept: "컴퓨터공학과",
      semester: 1,
    },
    {
      name: "시스템 프로그래밍",
      isue: "심화전공",
      dept: "컴퓨터공학과",
      semester: 1,
    },
    {
      name: "소프트웨어 분석및설계",
      isue: "심화전공",
      dept: "컴퓨터공학과",
      semester: 1,
    },
    { name: "기계학습", isue: "심화전공", dept: "컴퓨터공학과", semester: 1 },
    { name: "알고리즘", isue: "심화전공", dept: "컴퓨터공학과", semester: 1 },
    {
      name: "오픈소스 소프트웨어",
      isue: "심화전공",
      dept: "컴퓨터공학과",
      semester: 2,
    },
    {
      name: "소프트웨어 공학",
      isue: "심화전공",
      dept: "컴퓨터공학과",
      semester: 2,
    },
    { name: "정보검색", isue: "심화전공", dept: "컴퓨터공학과", semester: 2 },
    {
      name: "프로그래밍 언어론",
      isue: "심화전공",
      dept: "컴퓨터공학과",
      semester: 2,
    },
    {
      name: "모바일 프로그래밍",
      isue: "심화전공",
      dept: "컴퓨터공학과",
      semester: 2,
    },
  ],
  fourth: [
    { name: "", isue: "심화전공", dept: "컴퓨터공학과", semester: 1 },
    { name: "", isue: "심화전공", dept: "컴퓨터공학과", semester: 1 },
    { name: "", isue: "심화전공", dept: "컴퓨터공학과", semester: 1 },
    { name: "", isue: "심화전공", dept: "컴퓨터공학과", semester: 1 },
    { name: "", isue: "심화전공", dept: "컴퓨터공학과", semester: 1 },
    { name: "", isue: "심화전공", dept: "컴퓨터공학과", semester: 1 },
  ],
};
