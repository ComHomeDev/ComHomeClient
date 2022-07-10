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
    address: "/",
    detail: [
      { name: "교육과정", address: "/" },
      { name: "커리큘럼 구성도", address: "/" },
      { name: "학·석사 연계과정", address: "/" },
    ],
  },
  {
    name: "공지사항",
    address: "/",
    detail: [
      { name: "학과 공지", address: "/DepartmentNotice" },
      { name: "채용/인턴십", address: "/" },
      { name: "교육/공모전", address: "/" },
    ],
  },
  {
    name: "학생회",
    address: "/",
    detail: [
      { name: "학생회 소개", address: "/" },
      { name: "학생회 공지", address: "/" },
      { name: "학생회 달력", address: "/" },
    ],
  },
  {
    name: "학생 활동",
    address: "/",
    detail: [
      { name: "동아리 소개", address: "/" },
      { name: "학생 수상작", address: "/" },
      { name: "작품 전시", address: "/" },
    ],
  },
  {
    name: "커뮤니티",
    address: "/",
    detail: [
      { name: "대외활동 후기", address: "/" },
      { name: "취업 후기", address: "/" },
      { name: "졸업생 인터뷰", address: "/" },
    ],
  },
];

export const simpleBodyContent = [
  {
    name: "학과 소개 | 학사 정보",
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
    address: "/",
    icon: <AiOutlinePartition />,
  },
];
export const detailBodyContent = [
  {
    name: "학생 활동",
    address: "/",
    icon: <SiStarship />,
    detail: [
      { name: "학생 수상작", address: "/" },
      { name: "작품 전시", address: "/" },
      { name: "동아리/소모임 소개", address: "/" },
    ],
  },
  {
    name: "커뮤니티",
    address: "/",
    icon: <FaRegObjectGroup />,
    detail: [
      { name: "대외활동 후기", address: "/" },
      { name: "취업 후기", address: "/" },
      { name: "졸업생 인터뷰", address: "/" },
    ],
  },
  {
    name: "교육과정",
    address: "/",
    icon: <AiOutlinePartition />,
    detail: [
      { name: "학생별수상작", address: "/" },
      { name: "작품전시게시판", address: "/" },
      { name: "동아리,소모임 소개", address: "/" },
    ],
  },
];
