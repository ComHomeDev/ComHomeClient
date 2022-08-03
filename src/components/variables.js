import { MdPermDeviceInformation } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlinePartition } from "react-icons/ai";
import { SiStarship } from "react-icons/si";
import { FaRegObjectGroup } from "react-icons/fa";

export const fastMenu = [
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
    address: "/bachelor/curriculum",
    detail: [
      { name: "교육과정", eng: "curriculum", address: "/bachelor/curriculum" },
      {
        name: "트랙 구성도",
        eng: "track",
        address: "/bachelor/track",
      },
      {
        name: "학·석사 연계과정",
        eng: "connect",
        address: "/bachelor/connect",
      },
    ],
  },
  {
    name: "공지사항",
    address: "/notice/csnotice?page=1",
    detail: [
      {
        name: "학과 공지",
        eng: "csnotice",
        address: "/notice/csnotice?page=1",
      },
      {
        name: "채용/인턴십",
        eng: "recruit_internship",
        address: "/notice/recruit_internship?page=1",
      },
      {
        name: "교육/공모전",
        eng: "edu_contest",
        address: "/notice/edu_contest?page=1",
      },
    ],
  },
  {
    name: "학생회",
    address: "/studentcouncil/intro",
    detail: [
      { name: "학생회 소개", eng: "intro", address: "/studentcouncil/intro" },
      {
        name: "학생회 공지",
        eng: "student_council_notice",
        address: "/studentcouncil/student_council_notice?page=1",
      },
      {
        name: "학생회 달력",
        eng: "calendar",
        address: "/studentcouncil/calendar",
      },
    ],
  },
  {
    name: "학생 활동",
    address: "/student/club?page=1",
    detail: [
      { name: "동아리 소개", eng: "club", address: "/student/club?page=1" },
      {
        name: "작품 전시",
        eng: "exhibition",
        address: "/student/exhibition?page=1",
      },
    ],
  },
  {
    name: "커뮤니티",
    address: "/community/extra_review?page=1",
    detail: [
      {
        name: "대외활동 후기",
        eng: "extra_review",
        address: "/community/extra_review?page=1",
      },
      {
        name: "취업 후기",
        eng: "job_review",
        address: "/community/job_review?page=1",
      },
      {
        name: "졸업생 인터뷰",
        eng: "interview",
        address: "/community/interview?page=1",
      },
    ],
  },
];

export const simpleBodyContent = [
  {
    name: "학과 소개\n | 학사 정보",
    address: "/",
    icon: <MdPermDeviceInformation />,
  },
  {
    name: "교수 소개",
    address: "/",
    icon: <BsFillPersonLinesFill />,
  },
  {
    name: "교육과정",
    address: "/bachelor/curriculum",
    icon: <AiOutlinePartition />,
  },
];
export const detailBodyContent = [
  {
    name: "학생 활동",
    address: "/student/club?page=1",
    icon: <SiStarship />,
    detail: [
      { name: "동아리 소개", eng: "club", address: "/student/club?page=1" },
      {
        name: "작품 전시",
        eng: "exhibition",
        address: "/student/exhibition?page=1",
      },
    ],
  },
  {
    name: "커뮤니티",
    address: "/community/extra_review?page=1",
    icon: <FaRegObjectGroup />,
    detail: [
      {
        name: "대외활동 후기",
        eng: "extra_review",
        address: "/community/extra_review?page=1",
      },
      {
        name: "취업 후기",
        eng: "job_review",
        address: "/community/job_review?page=1",
      },
      {
        name: "졸업생 인터뷰",
        eng: "interview",
        address: "/community/interview?page=1",
      },
    ],
  },
  {
    name: "교육과정",
    address: "/bachelor/curriculum",
    icon: <AiOutlinePartition />,
    detail: [
      { name: "작품전시게시판", address: "/" },
      { name: "동아리,소모임 소개", address: "/" },
    ],
  },
];

export const curriculum = [
  {
    id: 1,
    name: "소프트웨어 아키텍트 트랙",
    ability: "소프트웨어 아키텍트 및 프로젝트 관리 전문성",
    grade: [
      [
        { name: "파이썬 프로그래밍", term: "1-1" },
        { name: "C++ 프로그래밍", term: "1-2" },
      ],
      [
        { name: "고급C++ 프로그래밍", term: "2-1" },
        { name: "자바 프로그래밍", term: "2-1" },
        { name: "고급자바 프로그래밍", term: "2-2" },
        { name: "자료구조", term: "2-1" },
        { name: "고급자료구조", term: "2-2" },
      ],
      [
        { name: "소프트웨어분석및설계", term: "3-1" },
        { name: "소프트웨어공학", term: "3-1" },
        { name: "서버시스템구축실습", term: "3-1" },
      ],
      [
        { name: "소프트웨어 디자인패턴", term: "4-1" },
        { name: "소프트웨어 아키텍처", term: "4-2" },
        { name: "캡스톤 디자인", term: "4-1" },
        { name: "융합 캡스톤 디자인", term: "4-2" },
      ],
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
    grade: [
      [
        { name: "파이썬 프로그래밍", term: "1-1" },
        { name: "C++ 프로그래밍", term: "1-2" },
      ],
      [
        { name: "고급C++ 프로그래밍", term: "2-1" },
        { name: "자료구조", term: "2-1" },
        { name: "컴퓨터시스템관리", term: "2-2" },
        { name: "컴퓨터구조", term: "2-2" },
        { name: "운영체제", term: "2-2" },
        { name: "컴퓨터네트워크", term: "2-2" },
        { name: "데이터베이스", term: "2-2" },
      ],
      [
        { name: "시스템 프로그래밍", term: "3-1" },
        { name: "모바일 프로그래밍", term: "3-2" },
        { name: "프로그래밍 언어론", term: "3-2" },
        { name: "오픈소스 소프트웨어", term: "3-2" },
      ],
      [
        { name: "컴파일러", term: "4-1" },
        { name: "캡스톤 디자인", term: "4-1" },
        { name: "융합 캡스톤 디자인", term: "4-2" },
      ],
    ],
    extracurri: [
      "오픈소스 GIT 교육 프로그램",
      "동계 SW 역량 강화 블렌디드 러닝 프로그램",
      "여름방학 코딩테스트 취업준비과정 프로그램",
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
    grade: [
      [
        { name: "파이썬 프로그래밍", term: "1-1" },
        { name: "C++ 프로그래밍", term: "1-2" },
        { name: "기초통계학", term: "1-1" },
        { name: "미적분과벡터해석기초", term: "1-2" },
        { name: "이산수학", term: "1-2" },
      ],
      [
        { name: "고급C++ 프로그래밍", term: "2-1" },
        { name: "자료구조", term: "2-1" },
        { name: "고급자료구조", term: "2-2" },
        { name: "데이터베이스", term: "2-2" },
        { name: "인공지능", term: "2-2" },
      ],
      [
        { name: "알고리즘", term: "3-1" },
        { name: "기계학습", term: "3-1" },
        { name: "정보검색", term: "3-2" },
        { name: "오픈소스 소프트웨어", term: "3-2" },
      ],
      [
        { name: "캡스톤 디자인", term: "4-1" },
        { name: "융합 캡스톤 디자인", term: "4-2" },
      ],
    ],
    extracurri: [],
    job: ["데이터 엔지니어"],
  },
];
