import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";

import Menu from "../../components/FixedCpnt/Menu";
import SubHeader from "../../components/FixedCpnt/SubHeader";
import Footer from "../../components/FixedCpnt/Footer";
import { headerMenu } from "../../components/variables";

import PostList from "../../components/Post/PostList";

import DepartInfo from "../DepartInfo/DepartInfo";
import Bachelor from "../Bachelor/Bachelor";
import StudentActivity, {
  StudentClub,
} from "../StudentActivity/StudentActivity";
import StudentCouncil from "../StudentCouncil/StudentCouncil";

import { getPostList, getExhibitList } from "../../api/main";
import Interview from "../Community/Interview";

const fetchPostList = async (category) => {
  if (category === "exhibition") {
    // const response = await getExhibitList();
    // const data = await response.data_det;
    const data = test_exhibition.data_det;
    // console.log(response.data_det);
    return data;
  } else {
    // const response = await getPostList(category);
    // const data = await response.data_det;
    let data = "";
    switch (category) {
      case "recruit_intern":
        data = test_recruit_intern.data_det;
        break;
      case "cs_notice":
        data = test_cs_notice.data_det;
        break;
      case "student_council_notice":
        data = test_student_council_notice.data_det;
        break;
      case "edu_contest":
        data = test_edu_contest.data_det;
        break;
      case "extra_review":
        data = test_extra_review.data_det;
        break;
      case "job_review":
        data = test_job_review.data_det;
      default:
        break;
    }
    // console.log(response.data_det);
    return data;
  }
};

function Board() {
  let { board, sub } = useParams();
  const queryClient = useQueryClient();

  const [currentMenu, setCurrentMenu] = useState(
    headerMenu.find((menu) => menu.eng === board)
  );
  const [searchParams, setSearchParams] = useSearchParams();
  let pageType = searchParams.get("page");

  const result = useQuery({
    queryKey: `${sub}`,
    queryFn: () =>
      pageType === "list" || pageType === "display" ? fetchPostList(sub) : {},
    retry: 0,
  });

  useEffect(() => {
    let current = headerMenu.find((menu) => menu.eng === board);
    setCurrentMenu(current);
  }, [board, sub, pageType]);

  const getInfoContent = (board) => {
    switch (board) {
      case "departInfo":
        return <DepartInfo />;
      case "bachelor":
        return <Bachelor />;
      case "studentcouncil":
        return <StudentCouncil />;
      case "student":
        return <StudentClub />;
      default:
        break;
    }
  };

  const getBodyContent = (pageType) => {
    let content = "";
    let getData = [];
    if (result.status === "success") {
      getData = queryClient.getQueryData(`${sub}`);
      console.log(getData);
    }
    switch (pageType) {
      case "info":
        content = getInfoContent(board);
        break;
      case "list":
        content = <PostList data={getData} />;
        break;
      case "display":
        content = <StudentActivity data={getData} />;
        break;
      case "chat":
        content = <Interview />;
      default:
        break;
    }
    return content;
  };

  return (
    <div className="page-container">
      <Menu />
      <SubHeader menu={currentMenu} sub={sub} />

      <div className={`page-body ${sub === "course" ? "scroll-fix" : ""}`}>
        {getBodyContent(pageType)}
      </div>

      {sub !== "course" && <Footer />}
    </div>
  );
}

export default Board;

export const test_exhibition = {
  data_det: [
    {
      no: 1,
      iduser: "109559345542221094986",
      title: "컴홈",
      content: "컴퓨터공학과 공식 홈페이지 개선을 위한 프로젝트",
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F%EC%BB%B4%ED%99%88%EB%A1%9C%EA%B3%A0.png?alt=media&token=5c3d0286-fef0-4e4a-b4d4-42f62304484f",
      ],
      award: "",
      stack: "nodejs React",
      keyword: "웹앱 컴퓨터공학과홈페이지",
      team: "개발의 성지",
      contestName: "소프트웨어 경진대회",
      link_github: "https://github.com/ComHomeDev",
      link_service: "https://comhome.dz32pkuapx7uy.amplifyapp.com/",
    },
    {
      no: 2,
      iduser: "109559345542221094986",
      title: "수정물산",
      content: "성신여대 굿즈 및 학잠 판매 및 구매를 할 수 있는 쇼핑몰 앱!",
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2Ficon%201.png?alt=media&token=03df06b2-387d-40f0-b219-8a4415818a43",
      ],
      award: "은상",
      stack: "java firebase",
      keyword: "공동구매 앱 굿즈",
      team: "수정물산",
      contestName: "소프트웨어 경진대회",
      link_github: "https://github.com/leejw-lu/crystal_product3",
      link_service: "",
    },
    {
      no: 3,
      iduser: "109559345542221094986",
      title: "coin",
      content: "코딩하는 사람들을 위한 웹사이트",
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F%EC%BD%94%EC%9D%B8.PNG?alt=media&token=adffb186-98b6-4887-aff7-0acb681e2423",
      ],
      award: "은상",
      stack: "java firebase",
      keyword: "웹 백준 코딩공부",
      team: "coin팀",
      contestName: "소프트웨어 경진대회",
      link_github: "https://github.com/choiyoorim/coin_repo",
      link_service: "",
    },
    {
      no: 4,
      iduser: "109559345542221094986",
      title: "공동장",
      content: "제로 웨이스트 실천이 가능한 신선 식품 공동구매 플랫폼",
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F%EA%B3%B5%EB%8F%99%EC%9E%A52.png?alt=media&token=f58b12e2-566e-47f9-aaa9-9cad7b1ea87a",
      ],
      award: "본상",
      stack: "nodejs java aws",
      keyword: "앱/웹 제로웨이스트 공동구매",
      team: "성신루키_공동장",
      contestName: "SKLOOKIE",
      link_github: "https://github.com/leejw-lu/consumer_server",
      link_service: "",
    },
    {
      no: 5,
      iduser: "109559345542221094986",
      title: "PLANet",
      content: "친환경 소비생활을 가이드 하는 가계부 앱",
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2FKakaoTalk_20220818_001233822.jpg?alt=media&token=c29de757-9188-454d-94b8-09f47dd2e440",
      ],
      award: "본상",
      stack: "react spring",
      keyword: "웹앱 가계부 친환경",
      team: "성신루키_PLANet팀",
      contestName: "SKLOOKIE",
      link_github: "https://github.com/PLANetDevelopment/PLANetFront",
      link_service: "https://main.d2f9fwhj50mv28.amplifyapp.com/",
    },
    {
      no: 6,
      iduser: "109559345542221094986",
      title: "식팟",
      content:
        "공강 시간에 밥은 먹어야 하는데 밥 먹을 친구가 없을 때 이용하는 웹 사이트",
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F%EC%8B%9D%ED%8C%9F.PNG?alt=media&token=e23b2090-800f-4ef6-af83-0d1ac8fba1e7",
      ],
      award: "",
      stack: "django javascript html",
      keyword: "웹 공강 밥친구",
      team: "식팟팀",
      contestName: "여자들이 기획하고 참여하는 해커톤",
      link_github: "https://github.com/Suanna01/sigpot_2022",
      link_service: "",
    },
    {
      no: 7,
      iduser: "109559345542221094986",
      title: "happeer",
      content: "난이도와 평가기능이 있는 팀프로젝트 동료찾기 웹서비스",
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2Fchart.png?alt=media&token=ec912d6f-cf46-4bfe-a3e6-b3336181c461",
      ],
      award: "",
      stack: "nodejs ejs",
      keyword: "웹 동료찾기 그래프",
      team: "happeer팀",
      contestName: "서버시스템구축실습 수업",
      link_github: "https://github.com/leejw-lu/hap-peer",
      link_service: "",
    },
    {
      no: 8,
      iduser: "109559345542221094986",
      title: "HowlsTheWeatherToday",
      content: "체질별, 위치별, 온도별로 알맞는 옷차림을 공유하는 웹사이트",
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F%EC%98%A4%EB%8A%98%EB%82%A0%EC%94%A8%EC%96%B4%EB%95%8C.PNG?alt=media&token=e760eb2a-08fe-4f75-a1de-eb8e454860cf",
      ],
      award: "",
      stack: "nodejs ejs",
      keyword: "웹 날씨 공유",
      team: "오늘날씨어때팀",
      contestName: "서버시스템구축실습 수업",
      link_github: "https://github.com/Suanna01/HowIsTheWeatherToday2",
      link_service: "",
    },
    {
      no: 9,
      iduser: "109559345542221094986",
      title: "MEOW",
      content:
        "게시글 형식으로 정보를 공유할 수 있는 SNS 형태의 맛집 추천 서비스",
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2Fmeow.PNG?alt=media&token=a1a8572b-55e7-4cff-9e49-a001841528fd",
      ],
      award: "",
      stack: "nodejs ejs html",
      keyword: "웹 sns 맛집",
      team: "Meow팀",
      contestName: "서버시스템구축실습 수업",
      link_github: "https://github.com/plum-king/Meow",
      link_service: "",
    },
  ],
};

export const test_recruit_intern = {
  data_det: [
    {
      no: 1,
      iduser: "111865899156782818991",
      title: "2022년 하반기 ICT 학점연계 프로젝트 인턴십",
      content:
        "하반기 ICT 학점연계 인턴십 모집하니 많은 지원 바랍니다. 자세한 참고사항은 첨부파일을 참고하세요.",
      upload_time: "2022-08-18T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 101,
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/ict%ED%95%99%EC%A0%90%EC%97%B0%EA%B3%84.PNG?alt=media&token=5fd8e450-38bf-4269-97af-0e2fe1359da3",
      ],
      file_status: 1,
      file: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/3.%202022%EB%85%84%20%ED%95%98%EB%B0%98%EA%B8%B0%20ICT%ED%95%99%EC%A0%90%EC%97%B0%EA%B3%84%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%9D%B8%ED%84%B4%EC%8B%AD%20%EC%97%B0%EC%88%98%EC%97%85%EC%B2%B4%20%EC%A3%BC%EC%9A%94%EC%A0%95%EB%B3%B4.pdf?alt=media&token=4cad5792-2b35-411e-9fa3-439a6e7d9190",
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/1.%202022%EB%85%84%20ICT%ED%95%99%EC%A0%90%EC%97%B0%EA%B3%84%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%9D%B8%ED%84%B4%EC%8B%AD%20%EC%B0%B8%EC%97%AC%EB%8C%80%ED%95%99%20%EB%AA%A8%EC%A7%91%20%EA%B3%B5%EA%B3%A0.pdf?alt=media&token=4ed66939-6c33-4c8d-9602-8519299c8793",
      ],
    },
    {
      no: 2,
      iduser: "111865899156782818991",
      title: "[데브시스터즈] 2022년 서버 개발 인턴십 채용",
      content: `
1. 담당업무
-백엔드 인프라 구축 및 관리
-API 서버 개발 및 백오피스 툴 개발

2. 지원자격
-4년제 대학 이공계 전공자 중 기초 프로그래밍 역량이 있는 분

3. 우대조건
-웹 개발 및 라이브 서비스 경험
-Interpreter 기반언어 개발 및 운영 경험
-코드 품질 향상을 위해 지속적으로 리팩토링을 진행한 경험
-OOP 및 FP 등 프로그래밍 패러다임에 관심이 많으신 분

4. 공통 지원사격
-해외 여행에 결격 사유가 없으신 분

5. 기타
데브시스터즈 채용페이지: https://careers.devsister.com/`,
      upload_time: "2022-08-17T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 89,
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/%EB%8D%B0%EB%B8%8C%EC%8B%9C%EC%8A%A4%ED%84%B0%EC%A6%88.PNG?alt=media&token=3637fc58-3c03-4764-b241-85c664c820c2",
      ],
      file_status: 0,
      file: [],
    },
    {
      no: 3,
      iduser: "111865899156782818991",
      title: "개발본부 내 기술연구소 신입사원 채용",
      content: "내용",
      upload_time: "2022-08-16T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 66,
      img: [],
      file: [],
    },
    {
      no: 4,
      iduser: "111865899156782818991",
      title: "2022 하반기 신입 공개채용 ",
      content: "내용",
      upload_time: "2022-08-15T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 13,
      img: [],
      file: [],
    },
    {
      no: 5,
      iduser: "111865899156782818991",
      title: "[엠씨엠코리아] IT MANAGER 채용",
      content: "내용",
      upload_time: "2022-08-14T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 50,
      img: [],
      file: [],
    },
    {
      no: 6,
      iduser: "111865899156782818991",
      title: "[동아일보] 프론트엔드 개발자 인턴 모집",
      content: "내용",
      upload_time: "2022-08-13T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 45,
      img: [],
      file: [],
    },
    {
      no: 7,
      iduser: "111865899156782818991",
      title: "데잇걸즈 5기 모집",
      content: "내용",
      upload_time: "2022-08-12T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 50,
      img: [],
      file: [],
    },
    {
      no: 8,
      iduser: "111865899156782818991",
      title: "삼성SDS 2022 하계 알고리즘 특강 안내",
      content: "내용",
      upload_time: "2022-08-11T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 4,
      img: [],
      file: [],
    },
    {
      no: 9,
      iduser: "111865899156782818991",
      title: "배리어프리 앱 개발 콘테스트",
      content: "내용",
      upload_time: "2022-08-10T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 12,
      img: [],
      file: [],
    },
    {
      no: 10,
      iduser: "111865899156782818991",
      title: "인공지능 큐레이터 양성과정",
      content: "내용",
      upload_time: "2022-08-10T00:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 3,
      img: [],
      file: [],
    },
  ],
};

export const test_cs_notice = {
  data_det: [
    {
      no: 1,
      iduser: "111865899156782818991",
      title: "IT공통과목 관련 안내사항",
      content:
        "1. 분홍생으로 표시된 과목은 실습과목입니다. 2. 각 과목별 분반 기준: 주전공 학과 공지사항을 참고하세요.",
      upload_time: "2022-08-18T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 4,
      img: [""],
      file_status: 1,
      file: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/2020%ED%95%99%EB%B2%88%20%EC%9D%B4%ED%9B%84%20%EA%B5%90%EC%96%91%EA%B5%90%EC%9C%A1%EA%B3%BC%EC%A0%95%20%EC%95%88%EB%82%B4.hwp?alt=media&token=94a2b015-b057-405f-9ff7-0d7af7602477",
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/IT%EA%B3%84%EC%97%B4%EA%B3%B5%ED%86%B5%EA%B3%BC%EB%AA%A9-%EA%B3%B5%EC%A7%80%20(22.07.29.).pdf?alt=media&token=5a6143da-8b1f-46d3-b26c-2fb434cca9da",
      ],
      file_name: [
        "2020학번 이후 교양교육과정 안내.hwp",
        "IT계열공통과목-공지 (22.07.29.).pdf",
      ],
    },
    {
      no: 2,
      iduser: "111865899156782818991",
      title: "2022-2학기 교내장학금 신청 안내",
      content: "붙임 1. 022-2학기 교내장학금 신청안내문 1부.",
      upload_time: "2022-08-17T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 89,
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/%EC%9E%A5%ED%95%99%EA%B3%B5%EC%A7%80.PNG?alt=media&token=eecefbec-afbd-44b6-a09d-06f982d4ad97",
      ],
      file_status: 1,
      file: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/%EB%B6%99%EC%9E%841._(%EA%B3%B5%EC%A7%80)2022-2_%EA%B5%90%EB%82%B4%EC%9E%A5%ED%95%99%EA%B8%88_%EC%8B%A0%EC%B2%AD%EC%95%88%EB%82%B4%EB%AC%B8.pdf?alt=media&token=6b7d86e5-d013-4b8f-a721-a503c96a4cb6",
      ],
      file_name: ["붙임1._(공지)2022-2_교내장학금_신청안내문.pdf"],
    },
    {
      no: 3,
      iduser: "111865899156782818991",
      title: "졸업예정자 대상 진로.취업계획 조사",
      content: "내용",
      upload_time: "2022-08-16T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 66,
      img: [],
      file: [],
    },
    {
      no: 4,
      iduser: "111865899156782818991",
      title: "2022 소프트웨어 경진대회 작품제출 안내 ",
      content: "내용",
      upload_time: "2022-08-15T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 13,
      img: [],
      file: [],
    },
    {
      no: 5,
      iduser: "111865899156782818991",
      title: "2022년 제3차 평생교육사 자격증 발급 신청 접수 안내",
      content: "내용",
      upload_time: "2022-08-14T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 50,
      file_status: 1,
      img: [],
      file: [],
    },
    {
      no: 6,
      iduser: "111865899156782818991",
      title: "[필독] 전공필수과목 폐지 안내",
      content: "내용",
      upload_time: "2022-08-13T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 45,
      img: [],
      file: [],
    },
    {
      no: 7,
      iduser: "111865899156782818991",
      title: "마이 핀테크 서비스 개발경진대회",
      content: "내용",
      upload_time: "2022-08-12T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 50,
      img: [],
      file: [],
    },
    {
      no: 8,
      iduser: "111865899156782818991",
      title: "[교직이수] 컴퓨터공학과 교직 기본 이수과목 안내",
      content: "내용",
      upload_time: "2022-08-11T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 4,
      img: [],
      file: [],
    },
    {
      no: 9,
      iduser: "111865899156782818991",
      title: "컴퓨터공학과 졸업생 취업특강안내",
      content: "내용",
      upload_time: "2022-08-10T01:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 12,
      img: [],
      file: [],
    },
    {
      no: 10,
      iduser: "111865899156782818991",
      title: "제20기 예비교사를 위한 즐거운 교수법 교실",
      content: "내용",
      upload_time: "2022-08-10T00:05:08.000Z",
      edited_date: "2022-08-18T10:05:08.000Z",
      views: 3,
      img: [],
      file: [],
    },
  ],
};

export const test_student_council_notice = {
  data_det: [
    {
      no: 0,
      iduser: "111865899156782818991",
      title: "[리액트 컴퓨터공학과 행사 수요조사]",
      content: `안녕하세요. 컴퓨터공학과 제 6대 학생회 리액트입니다! <br />
    저희가 드디어 3년만에 컴공 MT를 진행하게 되었습니다! <br />
    아래사항들을 참고하시고 구글폼 작성과 mt비용 입금을 해주셔야 신청이 됩니다! <br />
    이전 수요조사 폼을 작성하신 분들도 꼭 이 폼을 작성해주셔야합니다! <br />
    코로나19의 여파로 저희 학생회도 엠티 경험이 전무하여 부족함이 있을 수 있으니 학우분들의 너른 양해 부탁드립니다!`,
      upload_time: "2022-08-18T01:05:08.000Z",
      edited_date: "2022-08-27T10:05:08.000Z",
      views: 5,
      img: [""],
      file_status: 0,
      file: [],
      file_name: [],
    },
    {
      no: 1,
      iduser: "111865899156782818991",
      title: "[미래융합기술공학과 2022년 9월1일 입학 대상 추가모집]",
      content: `*본 공지는 융합보안공학과의 요청으로 게시합니다.<br />

미래융합기술공학과에서는 산업보안전문인력양성사업과 ICT혁신인재4.0사업을 통해 융합산업보안 및 인공지능 보안 분야 인재를 양성하고 있습니다.<br /> 이번에 ICT혁신인재4.0사업에 선정되어 추가 모집 선발 가능하게 되어 공지 드립니다.
<br />
<br />
📌 원서접수: 7/8(금) 10:00 ~ 7/12(화) 17:00 <br />
👉 유웨이어플라이 www.uwayapply.com<br />
<br />
📌 서류제출: 7/8(금) 10:00 ~ 7/13(수) 17:00<br /> 
👉 원서 접수 시 pdf 파일로 제출 서류 업로드<br />
<br />
📌 면접전형: 7/22(금)<br />
👉 상세 시간 및 장소는 별도 공지<br />
<br />
📌 합격자발표: 8/1(월)<br />
📌 합격자등록: 8/2(화)~8/4(목)<br />
📌 입학: 9/1(목)<br />
<br />
첨부1) 미래융합기술공학과 소개자료<br />
첨부2) 2022 후기 2차 일반대학원 모집요강<br />`,
      upload_time: "2022-08-18 00:41:25",
      edited_date: "2022-08-18 00:41:25",
      views: 52,
      img: [],
      start_date: "2022-07-08",
      end_date: "2022-07-12",
      file_status: 1,
      file: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/%EB%AF%B8%EB%9E%98%EC%9C%B5%ED%95%A9%EA%B8%B0%EC%88%A0%EA%B3%B5%ED%95%99%EA%B3%BC%20%EC%86%8C%EA%B0%9C.pdf?alt=media&token=fe986182-2c3b-4d0b-9d0b-bd6dfdec6475",
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/2022%20%ED%9B%84%EA%B8%B0%202%EC%B0%A8%20%EC%9D%BC%EB%B0%98%EB%8C%80%ED%95%99%EC%9B%90%20%EB%AA%A8%EC%A7%91%EC%9A%94%EA%B0%95%20(1).pdf?alt=media&token=d8c411a8-e614-4d4d-8d3f-7f480d97ef69",
      ],
      file_name: [
        "미래융합기술공학과 소개.pdf",
        "2022 후기 2차 일반대학원 모집요강 (1).pdf",
      ],
      scrap: 0,
    },
    {
      no: 2,
      iduser: "111865899156782818991",
      title: "[컴퓨터공학과 교학협의회 건의사항 동의율 조사]",
      content: `안녕하세요, 컴퓨터공학과 제 6대 학생회 리액트입니다. <br />
	<br />
	이전에 실시한 '컴퓨터공학과 교학협의회 건의사항 설문 조사'의 답변 내용을 바탕으로 오는 19일 컴퓨터공학과 학과장 교수님과 면담이 예정되어 있습니다.
	<br /><br />
	이에 컴퓨터공학과 학우분들의 각 안건에 대한 동의율을 조사하고자 합니다.
	<br /><br />
	각 안건(질문)에 대하여 전혀 동의하지 않으면 1점, 매우 동의하면 5점에 가깝게 선택해주세요. <br />모든 질문은 객관식 입니다. 모든 질문은 이전 설문조사의 답변을 그대로 작성한 것이니 참고 부탁 드립니다.
	<br /><br />
	폼: https://forms.gle/ZgxUY62MBrVFNFfe8
	<br /><br />
	본 설문조사는 면담 시 반드시 필요한 자료로 많은 참여 부탁 드립니다. 감사합니다!<br />`,
      upload_time: "2022-08-18 00:01:15",
      edited_date: "2022-08-18 00:01:15",
      views: 22,
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F%EA%B3%B5%EB%8C%80%EA%B5%90%ED%95%99%ED%98%91%EC%9D%98%ED%9A%8C.png?alt=media&token=28b09fa0-0803-4771-aaa7-34196714087c",
      ],
      start_date: "2022-08-18",
      end_date: "2022-08-25",
      file_status: 0,
      file: [],
      file_name: [],
      scrap: 0,
    },
    {
      no: 3,
      iduser: "111865899156782818991",
      title: "[총학생회비 집중납부기간]",
      content: `안녕하세요, 자주성신 제34대 총학생회 ‘찬란으로’입니다. <br />
<br />
총학생회비는 총학생회 운영에 사용되는 회비로, 1만 수정이들의 권리 보장 및 다양한 복지 혜택을 제공하기 위해 존재합니다.<br />
<br />
개강 이후 예정된 많은 행사들을 더 깊게, 더 즐겁게 즐길 수 있도록 총학생회비 납부에 많은 관심과 참여 부탁드립니다.<br />
<br />
📍 계좌: 국민 016701-04-140087 (성신여자대학교 총학생회)<br />
📍 집중 납부 기간: 08.17. (수) ~ 08.23. (화)<br />
<br />
⚠ 총학생회비는 원칙적으로 환불이 불가합니다. 반드시 확인 후 납부해 주시기 바랍니다.<br />
<br />
*문의: 카카오톡 채널 sswu_chonghak<br />
*찬란으로 노션: bit.ly/challannotion<br />`,
      upload_time: "2022-08-17 23:35:15",
      edited_date: "2022-08-17 23:35:15",
      views: 78,
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F%EC%B4%9D%ED%95%99%EC%83%9D%ED%9A%8C%EB%B9%84%EB%82%A9%EB%B6%80%EA%B8%B0%EA%B0%841.jpg?alt=media&token=295fc4f2-a23b-44b0-af8d-9450b4b0e804",
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F%EC%B4%9D%ED%95%99%EC%83%9D%ED%9A%8C%EB%B9%84%EB%82%A9%EB%B6%80%EA%B8%B0%EA%B0%842.jpg?alt=media&token=e185e507-e673-4f40-a906-ec797e4b1160",
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F%EC%B4%9D%ED%95%99%EC%83%9D%ED%9A%8C%EB%B9%84%EB%82%A9%EB%B6%80%EA%B8%B0%EA%B0%843.jpg?alt=media&token=f536de04-191c-4950-a618-c048576f8216",
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F%EC%B4%9D%ED%95%99%EC%83%9D%ED%9A%8C%EB%B9%84%EB%82%A9%EB%B6%80%EA%B8%B0%EA%B0%844.jpg?alt=media&token=dbfc00a1-128f-43eb-a3f5-096fc4530e10",
      ],
      start_date: "2022-08-17",
      end_date: "2022-08-23",
      file_status: 0,
      file: [],
      file_name: [],
      scrap: 0,
    },
    {
      no: 4,
      iduser: "111865899156782818991",
      title: "[🎉2022 신입생 OT 환영공연 참가자 모집]",
      content: `안녕하세요, 2022 사전 오티기획단입니다. 

2022년 신입생 OT 영상 콘텐츠에서 멋진 공연으로 신입생 수정이들을 환영할 참가자들을 모집합니다! 

재능있는 수정이들에게 더 많은 기회를 제공하기 위해 2022년 OT는 공연자를 공개모집하게 되었습니다!

🎈모집 안내
- 모집 대상: 새내기를 환영하고 싶은 수정이들 
   (개인 및 팀 형태 자유, 소속 무관)
- 모집 기간: 12.05. (일) ~ 12.12. (일)
- 참여 혜택: 연습실 지원, 장학금 지급
- 지원 방법: 이메일로 영상 제출 후 구글폼 작성 
   🔗bit.ly/2022오티공연모집폼
- 결과 발표: 12.14. (화) 개별 연락

*자세한 사항은 구글폼을 참고하시기 바랍니다.

문의: otsungshin@sungshin.ac.kr`,
      upload_time: "2022-08-17 18:22:34",
      edited_date: "2022-08-17 18:22:34",
      views: 62,
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F%EA%B3%B5%EB%8C%80%EA%B5%90%ED%95%99%ED%98%91%EC%9D%98%ED%9A%8C.png?alt=media&token=28b09fa0-0803-4771-aaa7-34196714087c",
      ],
      start_date: "2022-08-01",
      end_date: "2022-08-08",
      file_status: 0,
      file: [],
      file_name: [],
      scrap: 0,
    },
    {
      no: 5,
      iduser: "111865899156782818991",
      title: "[💥2022 수정대동제 학생 부스 모집 연장]",
      content: `안녕하세요, 자주성신 제34대 총학생회 ‘찬란으로’ 축제기획단입니다.

2022년 9월, 수정대동제에서 진행되는 학생 부스 운영 모집을 연장합니다. ✨

직접 제작한 소품 판매부터 재미있고 알찬 참여형 부스까지! 다채로운 학생 부스를 위한 많은 수정이들의 관심과 참여 부탁드립니다.

🔮 모집 대상: 성신여대 학부 재학생 및 휴학생으로 이루어진 개인 및 단체 (개인, 교내 단체, 동아리, 학생회, 소모임 등)
🔮 지원 방법: 신청서(bit.ly/2022수정대동제학생부스모집) 작성 후 이메일 제출 (링크 접속 후 파일을 다운로드 받아 작성)
🔮 모집 기간: 08.09.(화) ~ 08.21.(일) 23:59
🔮 결과 발표: 08.24.(수) (개별 연락)

📧 이메일: sungshinchonghak@sungshin.ac.kr

*동아리, 학생회 부스는 별도 모집하지 않고 학생 부스로 통합 모집하니 참고하여 신청 부탁드립니다!

*문의: 카카오톡 채널 sswu_chonghak 
*찬란으로 노션: bit.ly/challannotion`,
      upload_time: "2022-08-17 15:41:25",
      edited_date: "2022-08-17 15:41:25",
      views: 33,
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F%ED%95%99%EC%83%9D%EB%B6%80%EC%8A%A4%EB%AA%A8%EC%A7%91%EC%97%B0%EA%B0%951.jpg?alt=media&token=d6a38960-61ea-46e2-a929-b2485f4b546c",
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F%ED%95%99%EC%83%9D%EB%B6%80%EC%8A%A4%EB%AA%A8%EC%A7%91%EC%97%B0%EA%B0%952.jpg?alt=media&token=54cfe017-5aad-4d93-b842-4138b3da6577",
      ],
      start_date: "2022-08-18",
      end_date: "2022-08-25",
      file_status: 1,
      file: [],
      file_name: [],
      scrap: 0,
    },
    {
      no: 6,
      iduser: "111865899156782818991",
      title: "[2022 진로주간 메인포스터 공개🌊]",
      content: `안녕하세요, 자주성신 제34대 총학생회 '찬란으로'입니다.

2022년 9/5(월) ~ 9/8(목), 나흘 간 2022 진로주간 
🌊'항해ㅣ더 큰 바다로'가 개최됩니다.

본 2022 진로주간은 '찬란으로'의 교육 분야 공약으로, 대학일자리플러스센터와 함께 학우분들의 효율적이고 유익한 진로 탐색을 위해 기획하였습니다.

진로 초청 강연부터 진로영화제까지! 
다양한 진로 관련 프로그램이 여러분을 기다리고 있으니, 많은 관심 부탁드립니다.

넓은 바다 위 항해하는 배처럼, 
'찬란으로'는 자신만의 속도로 나아가는 수정이들을 응원하겠습니다.

감사합니다.

*문의: 카카오톡 채널 sswu_chonghak
*찬란으로 노션: bit.ly/challannotion`,
      upload_time: "2022-08-16 19:15:25",
      edited_date: "2022-08-16 19:53:46",
      views: 41,
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F2022%EC%A7%84%EB%A1%9C%EC%A3%BC%EA%B0%84%20%EB%8D%94%ED%81%B0%EB%B0%94%EB%8B%A4%EB%A1%9C.png?alt=media&token=0e1ac62c-0a18-4a3e-b47c-e9a42d094e1d",
      ],
      start_date: "2022-09-05",
      end_date: "2022-09-08",
      file: [],
      file_name: [],
      scrap: 0,
    },
    {
      no: 7,
      iduser: "111865899156782818991",
      title: "[2022 인권주간 페미니즘 예술문학제 작품 모집 D-7💫]",
      content: `안녕하세요, 자주성신 제34대 총학생회 '찬란으로'와 자주성신 제3대 학생·소수자인권위원회입니다.

2022 인권주간 페미니즘 예술문학제의 전시 작품 모집 기간 마감 7일 전입니다! 작품 분야별 우수작 1인을 선정하여 ✨상금✨도 지급할 예정이니 많은 관심과 참여 부탁드립니다!

💫 페미니즘 예술문학제란? '찬란으로'의 공약인 '페미니즘 문학제’에서 더 나아가, 문학과 예술로 페미니즘에 대한 의식을 고취할 수 있는 행사입니다.

🔗 지원서 링크: bit.ly/2022페미니즘예술문학제지원서양식

💫 모집 기간: 07.25. (월) ~ 08.20. (토)
💫 시상: 분야별 1인 선정 (총 3인) 10만 원

*자세한 사항은 지원서를 참고해 주세요.

*문의
카카오톡 채널 sswu_chonghak
카카오톡 채널 성신여대학생소수자인권위원회`,
      upload_time: "2022-08-14 19:22:53",
      edited_date: "2022-08-14 19:24:15",
      views: 34,
      img: [
        "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F2022%EC%9D%B8%EA%B6%8C%EC%A3%BC%EA%B0%84%20%ED%8E%98%EB%AF%B8%EB%8B%88%EC%A6%98%EC%98%88%EC%88%A0%EB%AC%B8%ED%95%99%EC%A0%9C.jpg?alt=media&token=dd4880b9-f201-4c19-b984-441d64e642ad",
      ],
      start_date: "2022-09-05",
      end_date: "2022-09-08",
      file: [],
      file_name: [],
      scrap: 0,
    },
    {
      no: 8,
      iduser: "111865899156782818991",
      title: "[총학생회비 납부 안내]",
      content: `안녕하세요, 자주성신 제34대 총학생회 '찬란으로'입니다.

총학생회비는 총학생회 운영에 사용되는 회비로, 1만 수정이들의 권리 보장 및 다양한 복지 혜택을 제공하기 위해 존재합니다.

대동제 일부 관람석은 총학생회비 납부자 대상으로 제공되는 만큼! 
학생 복지의 첫걸음인 총학생회비 납부에 많은 관심과 참여 부탁드립니다.

📍 계좌: 국민 016701-04-140087 (성신여자대학교 총학생회)
📍 집중 납부 기간: 08.17. (수) ~ 08.23. (화)
📍 총학생회비는 원칙적으로 환불이 불가합니다. 반드시 확인 후 납부해 주시기 바랍니다.

앞으로도 '찬란으로'는 학생자치 활성화와 권리 보장을 위해 최선을 다하겠습니다. 감사합니다.

*문의: 카카오톡 채널 sswu_chonghak
*찬란으로 노션: bit.ly/challannotion`,
      upload_time: "2022-08-14 19:21:53",
      edited_date: "2022-08-14 19:22:15",
      views: 34,
      img: [],
      start_date: "2022-08-17",
      end_date: "2022-08-23",
      file: [],
      file_name: [],
      scrap: 0,
    },
    {
      no: 9,
      iduser: "111865899156782818991",
      title: "[학위수여식 관련 공지]",
      content: `안녕하세요, 자주성신 제34대 총학생회 '찬란으로'입니다

총학생회 '찬란으로'는 학위수여식 이벤트를 학사 일정에 맞추어 진행하고 있었습니다. 그러나 학교 본부에서 진행하는 학위수여식 학위복 대여, 포토존 관련 공지가 이루어지지 않는 상황에 대해 직접 문의하였습니다.`,
      upload_time: "2022-08-13 19:21:53",
      edited_date: "2022-08-13 19:22:15",
      views: 34,
      img: [],
      start_date: "2022-08-01",
      end_date: "2022-08-12",
      file: [],
      file_name: [],
      scrap: 0,
    },
    {
      no: 10,
      iduser: "111865899156782818991",
      title: "[🚨총학생회 입장문 연대 서명 기간 연장 안내🚨]",
      content: `안녕하세요, 자주성신 제34대 총학생회 ‘찬란으로’입니다.

우선 총학생회 입장문 <우리는 성신의 민주주의를 되찾을 때까지 봄을 외칠 것이다> 연서명에 참여해 주신 약 800명의 학우분들께 감사드리며, 현재 진행 중인 입장문 연대 서명 기간 연장에 대한 안내드립니다.

연장된 연대 서명 기간은 8월 14일 일요일까지이며, 지속적인 이사회 규탄을 위해 함께 목소리 내주시길 바랍니다.

📌 bit.ly/총학생회입장문연대서명

💡 연서명 대상: 개인 (휴학생, 졸업생 모두 가능), 교내 학생 단체 (학생회, 동아리, 소모임 등)
💡 연서명 기간: ~ 2022.08.14. (일)

학내 민주주의를 되찾기 위해 많은 연대와 관심 부탁드립니다. 
감사합니다.

*문의: 카카오톡 채널 sswu_chonghak
*찬란으로 노션: bit.ly/challannotion`,
      upload_time: "2022-08-13 14:32:53",
      edited_date: "2022-08-13 14:33:15",
      views: 62,
      img: [],
      start_date: "2022-08-13",
      end_date: "2022-08-14",
      file: [],
      file_name: [],
      scrap: 0,
    },
  ],
};

export const test_edu_contest = {
  data_det: [
    {
      no: 1,
      title: "교육실습 후기 및 수업자료 공모전 팀원 모집합니다!",
      content: "",
      upload_time: "2022-08-12 14:08:32",
      edited_date: "2022-08-12 14:08:33",
      img: [
        "https://www.sungshin.ac.kr/editorUpload/images/000228/%EA%B5%90%EC%9C%A1%EC%8B%A4%EC%8A%B5%EA%B3%B5%EB%AA%A8%EC%A0%84_%EC%B9%B4%EB%93%9C%EB%89%B4%EC%8A%A4_(1).png",
      ],
      views: 26,
      iduser: "111865899156782818991",
      end_date: "2022-08-27",
    },
    {
      no: 2,
      title: "한국콘텐츠진흥원 게임인재원 교육생 모집",
      content: "",
      upload_time: "2022-07-14 14:08:32",
      edited_date: "2022-07-14 14:08:33",
      img: [
        "http://www.sungshin.ac.kr/editorUpload/images/000227/20220614154722924_H7K9YS4B.png",
      ],
      views: 41,
      iduser: "111865899156782818991",
      end_date: "2022-08-24",
    },
    {
      no: 6,
      title: "2022 Qualcomm IT Tour",
      content: `이공계 대학생 미국 본사 방문 행사
일시: 2022년 8월 15일 - 8월 21일
자격
전국 4년제 대학 이공계 학부 혹은 석사과정 학생
만 21세 이상이고 학부 3학년 이상
미국여행에 결격사유가 없는 학생
지원자 접수
접수일정: 2022년 6월 1일 - 6월 30일
지원서류:
지도교수 추천서
이력서
자기 소개서
성적증명서
제안서 (A4 용지 4장 내외)
제안서 주제: 하기 주제중 한가지 기술에 기반한 새로운 서비스 제안
주제: 56, Connected Intelligent Edge, loT, Robotics, Al, XR, Priv
ate Network, Edge/cloud, Connected Car/Autonomous Driving
FCPA Compliance Questionnaire (다운로드)
궐컴 IT Tour 설명회
5월 25일(수) 오후 6시 - 7시: 아모레퍼시픽그룹 본사 2층 아모레홀 (서울시
용산구 한강대로 100 2층)
접수 방법등에 대한 자세한 사항은 스냅드래곤 인사이더즈 (https:/ /www.
q
ualcomm.com/kr/snapdragoninsiders) 참조
문의사항: it _ tour@qti.qualcomm.com 으로 e-mail 문의바랍니다.`,
      upload_time: "2022-05-06 14:08:32",
      edited_date: "2022-05-06 14:08:33",
      img: [],
      views: 41,
      iduser: "111865899156782818991",
      end_date: "2022-08-20",
    },
    {
      no: 5,
      title: "Ask Me Anything for Cloud Careers(AMA for CC)",
      content: `행사명 : Ask Me Anything for Cloud Careers(AMA for CC)
일정 :5 월 23일(월) - 26일(목
시간 저녁 7시 9시
>
장소 : Virtual(GoToWebinar or Zoom or Chime)
신청링크 : https://event.gotowebinar.com/event/1cf26158-
2db9-422f-8248-2e0b10534fa9
대상:메인 타겟은 대학생이지만 클라우드에 관심있는 누구나 참여
가능
세션발표 기업 : 마켓컬리, 당근마켓, Grepp, NRISE, AWS
특징 : -모든 발표자는 평균경력 5년이하로 대학생들과 눈높이가 맞
는 인터렉션 가능
일방적인 발표가 아닌 Q&A 형식
-AWS 채용 담당자(APAC Early Career 리크루터)의 신입채
용 설명회 세션`,
      upload_time: "2022-05-06 14:08:32",
      edited_date: "2022-05-06 14:08:33",
      img: [
        "https://www.sungshin.ac.kr/editorUpload/images/000216/image001.png",
      ],
      views: 79,
      iduser: "111865899156782818991",
      end_date: "2022-08-20",
    },

    {
      no: 4,
      title:
        "SK쉴더스 채용연계형 클라우드 기반 스마트 융합보안과정 교육생 모집",
      content: "",
      upload_time: "2022-05-03 14:08:32",
      edited_date: "2022-05-03 14:08:33",
      img: [
        "http://www.sungshin.ac.kr/editorUpload/images/000215/20220503110029162_K2CZPC78.png",
      ],
      views: 101,
      iduser: "111865899156782818991",
      end_date: "2022-08-21",
    },
    {
      no: 1,
      title: "성신여대-매스티나 브렌드 콘텐츠 교내 공모전",
      content: "",
      upload_time: "2022-03-16 14:08:32",
      edited_date: "2022-03-16 14:08:33",
      img: [],
      views: 44,
      iduser: "111865899156782818991",
      end_date: "2022-04-30",
    },
    {
      no: 2,
      title: "수유예술 창업마을 프로그램 참가신청 안내",
      content: "",
      upload_time: "2022-03-29 14:08:32",
      edited_date: "2022-03-29 14:08:33",
      img: [],
      views: 45,
      iduser: "111865899156782818991",
      end_date: "2022-04-15",
    },
    {
      no: 3,
      title: "「삼성 청년 SW 아카데미」8기 교육생 모집",
      content: "",
      upload_time: "2022-04-27 14:08:32",
      edited_date: "2022-04-27 14:08:33",
      img: [
        "http://www.sungshin.ac.kr/editorUpload/images/000214/8%EA%B8%B0_%EB%AA%A8%EC%A7%91_%EC%B9%B4%EB%93%9C%EB%89%B4%EC%8A%A4_1.jpg",
        "https://www.sungshin.ac.kr/editorUpload/images/000214/8%EA%B8%B0_%EB%AA%A8%EC%A7%91_%EC%B9%B4%EB%93%9C%EB%89%B4%EC%8A%A4_2.jpg",
        "http://www.sungshin.ac.kr/editorUpload/images/000214/8기_모집_카드뉴스_3.jpg",
      ],
      views: 52,
      iduser: "111865899156782818991",
      end_date: "2022-06-30",
    },
  ],

  comment: [
    {
      no: 1,
      content: "교육 실습 공모전 장학금 언제 들어오나요?",
      upload_time: "2022-03-16 14:10:32",
      iduser: "111865899156782818991",
      edu_contest_no: 8,
      secret_check: 0,
      anon_check: 1,
      recomment: "18일 장학수혜내역에 있습니다.",
      recomment_check: 1,
    },
    {
      no: 2,
      content: "입상 연락은 몇 시에 오나요?",
      upload_time: "2022-03-16 14:10:32",
      iduser: "111865899156782818991",
      edu_contest_no: 8,
      secret_check: 1,
      anon_check: 0,
      recomment: "오후 12시 쯤 문자로 전달될 예정입니다.",
      recomment_check: 1,
    },
    {
      no: 3,
      content: "내년에도 교육 실습 공모전 하나요??",
      upload_time: "2022-03-16 14:10:32",
      iduser: "111865899156782818991",
      edu_contest_no: 8,
      secret_check: 0,
      anon_check: 0,
      recomment: null,
      recomment_check: 0,
    },
    {
      no: 4,
      content: "혹시 이미 제출했는데 수정 가능한가요..?",
      upload_time: "2022-03-16 14:10:32",
      iduser: "111865899156782818991",
      edu_contest_no: 8,
      secret_check: 1,
      anon_check: 1,
      recomment: null,
      recomment_check: 0,
    },
  ],
};

export const test_extra_review = {
  data_det: [
    {
      no: 1,
      title: "[NH콕서포터즈] 1차합격 / 면접 / 최종합격 후기",
      content: `제 첫 대외활동이자 모든 것이 처음이었던 경험을 써보려고 합니다 ㅎㅎ<br />저는 현재 대학교 3학년 재학중으로조금은 뒤늦게 대외활동에 눈을 뜨게 되었답니다막상 하려고 찾아보니 제가 하고 싶은 것과 많이 다르기도 하고 고민을 많이 하다가 일단 여기저기 넣어 보자하고여러 군데에 지원을 했었는데 보통 서류 탈락이나 1차 합격만 하고 떨어지기 일쑤였습니다 ㅠㅅㅠ그러던 와중 누군가 제게 NH농협에서 서포터즈를 모집한다고 알려주고 난 뒤문득 생각나 '링커리어'에 접속을 했으나마감일이 그 당일 오후 5시였고제가 확인한 시간은 오후 4시였습니다...ㅋㅋㅋㅋ ㅠㅠ
그렇지만 저는 이 기회를 놓칠 수 없었고 부랴부랴 적기 시작했답니다...<br />
다행히도(?) 문항은 두 개뿐이여서 우다다다다 쏟아냈습니다 ㅋㅋ<br />이 문항은 앞서 나의 강점을 1,2,3순위로 정하는 부분이 있는데 이와 연계해서 적는 부분이었습니다.<br />저는 강점 키워드 기획 / 콘텐츠 / SNS / 마케팅 / 열정,성실,도전 중 제가 어필 할 수 있는 부분은오직 열정, 성실, 도전 뿐이었습니다...<br />제가 콘텐츠를 제작하고 기획하는데에 있어 그렇게 뛰어나지 않고 경험해본 적이 많이 없기에 솔직할 수 밖에 없었습니다<br />.고로,1순위 - 열정, 성실, 도전2순위 - SNS3순위 - 마케팅으로 정했답니다.<br />저는 지원서를 많이 작성해 본 적도 없고 또 이 서포터즈는 처음 시작하는 1기라 정보를 얻을 수 있는 곳이 많이 없기에(그리고 제겐 시간도 없었던...)<br />그저 생각나는 대로 적을 수 밖에 없었습니다.<br />우선적으로 소제목을 꼭 달았는데요.요 포인트는 정말 중요한 것 같습니다.<br /> 전체 내용을 포괄적으로 담을 수 있고 임팩트있는 한 문장으로 드러내 제 글에 관심을 갖게하기 때문입니다.<br />제가 1순위로 뽑았던 강점과 연계하여 기재해야 했기에 열정, 성실,도전에 비롯하여 저를 설명하였습니다.<br />저는"모든 역량은 열정, 성실, 도전에서 비롯된다고 생각한다."이 부분에 포인트를 맞춰 저을 설명하였고,차례로 2순위와 3순위인 SNS와 마케팅에도 저의 열정을 담아냈고,,,ㅋㅋㅋㅋ또 하나 포인트로 "나는 어느 곳이든 쉽게 녹아들 수 있다."는 점을 어필하였습니다.아무래도 이 대외활동이 여러 사람과 어울려 활동하는 것이 많다고 생각해 쉽게 적응할 수 있다는 점이가장 중요하다고 생각했기 때문입니다.
사실 이 부분이 더 걱정이었던게저의 창의력을 발휘하기엔 시간이 얼마 남지 않았고...일단 떠오르는 걸 적어보자 하고 적기 시작했습니당.저는 사실 이 문항을 적기 전까진 '상호금융'에 대해 잘 알지 못했습니다.그치만 서치해본 결과 제가 이미 이용하고 있는 타은행에서 이 개념을 이해할 수 있었습니다.(이미 제가 경험하고 있었던...) 저는 이 농협상호금융 브랜드 강화 방안에 대해MZ세대인 우리가 가장 많이 이용하는 앱은'인스타그램'과 '유튜브'라고 생각하였고그 중에서도 짧은 시간에 쉽게 정보를 얻을 수 있는 카드뉴스와 유튜브 '쇼츠'를 생각해냈습니다.솔직히 말해서 너무 뻔한 방안일지라도 제가 생각하였을때가장 효과적이고 확실한 방법이었기에 또 제가 요즘들어 많이 경험하고 깨달았던 것이었기에확신할 수 있었습니다.
그렇게 저는 마감 5분 전인오후 4시 55분에 제출을 할 수 있었고 며칠 후...
1차 서류합격 문자를 받게 되었답니다 !!!!!!!!!!!!!!!!!!너무 행복했답니다.제가 원하던 금융권 대외활동에드디어 제게도 이런 기회가 생겼다는게 ...그치만 기쁨은 얼마 가지 못했고 급 몰려오는 면접의 두려움 ...머리속에 어떡하지 라는 걱정으로 가득 찼답니다..
면접은 18일부터 20일까지 3일에 걸쳐 이루어졌는데요 저는 첫 날인 18일에 보게 되었답니다.사실 고민이 정말 많이 됐습니당제가 면접을 봐 본 경험이 한 번도 없기에 어떻게 준비해야 하는지도 몰랐고 무엇보다 지방에 살고 있기에 만만치 않은 교통비가 부담되었기 때문입니당우선 면접전형은5명이 1조로 30분동안 면접을 보게 되는데요30초 자기소개와1분 PR은 필수적으로 준비해야 했고추가적으로 포트폴리오를 준비해갈 수 있습니당저는 30초 자기소개와 1분 PR 그리고 지원동기와 이루고 싶은 것, 제 강점 등을 준비했지만 면접 전 날까지도 고민은 계속됐고이러한 면접을 또 언제 경험해보나 싶은 마음과 함께결국 해보지도 않고 후회하는 것보단 해보고 후회하는 것이 훨씬 낫다는 결론을 내려 바로 기차표를 예매하였답니당 ㅎㅅㅎ
저의 첫 혼자 서울행…솔직히 조금 설레기도 했지만  준비했던 말들이 입에 붙지 않아 상당히 두려웠던..면접은 농협중앙회 신관 3층에서 이루어졌는데요도착하셔서 안내데스크에 서포터즈 면접때문에 왔다고 말씀드리니친절히 알려주셨습니당여담으로 엘레베이터를 타는데 가는 층을 작은 모니터?에 입력하니 몇호기를 타라고 알려주는,,, 완전 신기했어요...면접 대기실에 도착하고 난 후 이름을 말하니 이름표를 주셨어요이름표를 받고 정보제공동의서?와 간단한 설문지를 주셨습니당 그러고 합격시 id카드에 들어갈 사진을 찍는데 저는 워낙 긴장하고 정신이 없어서 그냥 립도 안바른 초췌한 상태로 찍어버린... ㅋㅋㅋㅋㅋㅋ이미 맘속으론 반포기 상태였기에 이 사진이 쓰이겠어~.. 라는 마음에 ㅠ자리에 착석하고 NH콕 서포터즈 대행사..?분들이 계셨는데 긴장된 분위기를 풀어주려 노력해주셔서덕분에 긴장이 조금 풀렸던 것 같아요 ㅎㅎ시간이 되어 면접장에 들어가게 되었고..저는 그 전까지 긴장이 안됐었는데 들어가자마자 그냥 바로 염소가 되었습니다... 사실 1기 활동이기에 다음 기수분들께 도움을 주고자 이 글을 작성했는데요.. (기록용이였지만 도움을 주고싶어진,,)어떻게 했는지 기억도 잘 나지 않고 ㅠ...저는 정말 경험해보자! 하고 간거기에 합격한 비결! 이런건.. 없습니다요우선 저희 조는 5명이 한 조였지만 두 분이 오지 않아서3명이서 보게 되었습니다!면접관분들은 총 5명이였답니당면접 질문 리스트1. 30초 자기소개2. 지원동기3. 농협에 대해 어떻게 생각하는지4. 농협상호금융의 차이점5. 활동내용 중 마음에 드는 것..?6. 최근에 읽은 책 또는 영화 중 인상깊었던 것7. 이 서포터즈를 통해 얻고 싶은 것8. 내 강점9. 1분 자기PR면접 질문은아마.. 이정도 였던 것 같습니다.5명이서 30분 면접인데 저희 조는 3명뿐이라 더욱 많은 질문을 받은 것 같은,,,아 포트폴리오는 1분 자기PR 때 면접관분들께 드리면 되는데저는 준비해가지 않았답니다,, ^^그렇지만 이렇게 합격한 걸 보니 !!!! 아 저는 아무래도 처음이다보니 면접 준비를 하면서 여러 영상들과 글들을 참고했었는데요보통 자기소개와 저를 어필할 때에 본인의 경험을 통해 얻은 것 등 ...경험과 함께 어필하는 것이 좋다고 그랬었는데 저에겐 그럴만한 경험도 없었기에 그저 솔직한 제 자신 그대로를 어필해야겠다고 생각해저의 성격, 장점들을 말한 것 같아요그러다보니 이렇게 좋은 결과가,,, ^^아무튼 그렇게 면접이 끝나고 대기실로 돌아오니인터뷰 같은 것도 하더라구요!나중에 합격하고 발대식에서 쓰일 영상이라구,,,저는 뭐 면접끝난 순간부터 이미 반포기여서 횡설수설했고...다행히도 영상엔 담기지 않아서 정말정말 다행입니다요 ..ㅎㅎ

대학생 대외활동 공모전 채용 사이트 링커리어 https://linkareer.com/
`,
      upload_time: "2022-08-16 15:00:25",
      edited_date: "2022-08-16 15:00:25",
      views: 62,
      iduser: "111865899156782818991",
    },
    {
      no: 2,
      title: "[하이트진로 서포터즈] 하이파이브 인천, 부천 4기 합격 후기",
      content: `안녕하세요! 오늘은 비록 합격 발표를 받은 지 기간이 조금 지났지만..![하이트진로 서포터즈 '하이파이브' 인천 부천 4기]합격 후기 및 서류 / 면접 TIP을 공유해 볼까 합니다 🌟
평소 술🍻 (특히 테라, 참이슬....), 술자리를 좋아하는 저였기에..하이트진로 서포터즈 공고가 올라왔을 때,' 이건 지원 안 할 수가 없다! '라는 들뜬 심정으로 지원하게 되었는데요!하이트진로 서포터즈 자체가 지역 별로 나눠서 뽑고 인천 부천의 경우에는 이번이 4기인 만큼 정보가 많지 않았기에 .. 제대로 지원하고 있는 게 맞나..? 싶었는데다행히 합격했더라구요 😮(올해는 하이트진로 맥주, 소주를 열심히 들이킬 예정입니다 하하)아무튼 그래서 오늘은 제가 작성했던 '하이파이브' 지원서,받았던 면접 질문들을 바탕으로간단한 팁을 여러분들과 함께공유해 보고자 합니다..!부디 도움이 되면..! 좋겠어요! 🤠🤠1. 서류✔ 1차 서류 전형 서류는 네이버 폼을 통해서 작성할 수 있었어요!이번 지원서에 주어졌던 질문들은 다음과 같습니다 ❗❗하이트진로 서포터즈에 지원하게 된 동기는 ? 200자 제한첫 번째 질문은 지원 동기였는데요!사실 대외활동 지원서 및 면접에서 빠질 수 없는 질문이죠 🤔우선 저 같은 경우에는 이전에교내 학술제에서 타사의 주류 상품을 대상으로경쟁 PT를 진행했던 경험이 있었어요.그래서! 저는 주류회사 경쟁 PT를 통해 주류 마케팅에 흥미를 느끼게 되었다는 점을먼저 언급했어요.또 기획에만 참여하고 실행은 할 수 없는경쟁 PT의 특성상 아쉬움이 있었지만이번 서포터즈는 평소 애정 하는 하이트진로와프로젝트 및 홍보를 진행해 볼 수 있는 만큼나에게는 연장선 같은 의미이다 ~~~~~이런 식으로 내용을 작성했었어요!저는 경험을 기반으로 내용을 작성했지만 합격하신 다른 분들은하이트진로 상품들에 대한 애정!을많이 강조했었다고 들었어요.리더형, 기획형, 홍보형, 촬영형, 콘텐츠형 중 나에게 해당하는 것은?  200자 제한이 질문은 위의 다섯 가지 유형 중에 나에 해당하는 것은 무엇이고그렇게 생각하는 이유로 경력, 경험, 강점 등을 근거로 들어 설명하는 질문이었어요!저는 콘텐츠형을 선택했고영상 콘텐츠 -> 교내 영상 학회 팀장 활동카드 뉴스 콘텐츠 -> 카드 뉴스 제작 경험 및 포토샵, 일러스트레이터 활용 가능이렇게 경험을 통해서 두 가지 유형의 콘텐츠를 모두 제작할 수 있다는 점을 강조해서 표현했어요.200자로 분량이 매우 짧기에여러분도 자신의 강점에 맞게 편하게작성하시면 충분할 것 같아요!하이트진로를 온, 오프라인에서 효과적으로 알릴 수 있는 홍보 방안 및 아이디어 300자 제한어떻게 보면 지원서에서 가장 메인이라고 할 수 있는질문이죠!' 하이트진로 어떻게 홍보할래 !? ' 저는 하이트진로 메타버스 축제를 적었습니다.하이트진로가 대학교를 주기적으로 선정하여주류 상품을 협찬하고 선정된 대학교 학생들이 하이트진로의 주류 상품과 함께 메타버스 내에서 만남의 장을 갖는 .....(코로나로 인해서 대학생들이 네트워킹을 하기 힘든 문제를 언급했어요.)조금은 뻔한 아이디어죠!? 이런 뻔한 아이디어를 적은 저도합격했기에...! 생각하시는 아이디어를 자유롭게 적어주시는 것만으로도충분할 거라고 생각해요 ()2. 면접✔ 2차 면접 전형 두둥 탁! 서류 전형에서 다행히도 합격해서이렇게 면접 안내 문자가 도착했습니다!

대학생 대외활동 공모전 채용 사이트 링커리어 https://linkareer.com/`,
      upload_time: "2022-08-11 15:02:25",
      edited_date: "2022-08-11 15:02:25",
      views: 82,
      iduser: "111865899156782818991",
    },
    {
      no: 3,
      title: "[KT&G 상상유니브 마케팅 스쿨] 2022 상상유니브 합격후기",
      content: `6월말쯤, 국가근로를 하고 있던 중, 교내 홍보물 부착문제로 KT&G 관계자분이 오신적이 있었다.내가 이걸 기억하는 이유는, 이번 겨울에,,, 상상프렌즈 14기를 서류에서 뜨거운 합격을해서...😂그런데 사실 상프 했다면 학점을 정말 제대로 말아먹었거나, 상프를 제대로 못했거나 했을 거 같다. 주변에 했다는 사람들 물어보면 다들 휴학하고 하는 걸 추천할 정도로...그래서 사실 이번 15기는 지원할 생각이 없다. 내년에 시간표 널널해지면 그때 지원해볼 생각...아무튼 그때 마케팅스쿨 교육을 모집한다는 걸 보아서 방학 때 이걸 지원해보아야겠다고 생각했다.아무튼 그렇게 접했고 지난주 일요일, 마지막날에 최종제출을 마무리했다.
그런데 아무래도 기말고사 + 계절학기 크리를 맞아서 바빴고, 또 이번달에는 약속도 너무 많았어서..ㅎㅎㅎㅎ 전날에는 자소서 작성하고 당일에는 포트폴리오를 만들었다.사실 모집인원이 많아서 상상프렌즈처럼 경쟁이 빡세지 않다고 생각했는데, 웬걸 이것도 기본은 10:1은 넘어간다고 한다. 상상프렌즈 때와 마찬가지로,,, 포트폴리오는 개별선택이지만 암묵적 필수이다.가끔 포트폴리오를 제출하지않고도 붙는 사람들이 있는데.. 정말 리스펙...
USP라고 하면 Unique Selling Proposition의 약자로, 사전상으로는 '고유의 강점'이라고 이야기하고, 마케팅에서는 특징을 강조해서 가치로 바꾸는 것 정도로 이해하면 된다. 결국 나라는 상품을 고객에게 어필해야 하는 것.그래서 일반 자기소개서보다는 조금 더 딥하게 '나'라는 재화를 어필하는 쪽으로 갔다. 항상 자기소개서를 쓸 때마다 느끼는거지만 난 글을 쓸 때마다 말이 너무 많다 ㅋㅋㅋㅋ 뭐 글이라는게 원래 퇴고를 거쳐야 글다운 글이 쓰여지는 거라지만, 항상 이야기를 쓸 때 핀트를 놓치는 부분이 발생해서 문제라... 그래서 이번에는 머릿속에 정리를 끝낸 다음 글을 써보았다. 근데 여전히 잘 안되는 듯해...
포트폴리오 레퍼런스Previous imageNext image포트폴리오도 마찬가지로 3개의 키워드를 컨셉에 맞춰서 제작하였다.첫 번째 장에는 나의 경험, 두 번째 장에는 마케팅의 관심도세 번째 장에는 이번 마케팅 스쿨에 참여하고 싶은 이유이렇게 세분화해서 제작하였다. 내가 가장 중요하게 작용했다고 생각하는 부분은1. 이번 마케팅스쿨이 일반 대기업, 중소기업이 아닌 '스타트업 마케팅'에 특화된 강의라는 점2. KT&G가 바라는 사회적 공헌에 포커싱3. 내가 보여줄 수 있는 마케팅 관심도와 열정 어필 이렇게 3가지 부분에서 좋은 점수를 받았다고 생각한다. 특히 지난학기에 수강한 '기업윤리와 사회적책임'에서 기업에 대해서 많이 배웠던 점에서인지, KT&G의 CSR부분을 경험과 링킹해서 잘 풀어냈던 것 같다. 추가적으로는 제출한 내용은 블로그 주소와, 4월 T프렌즈에서 제작한 NUGU 릴스 링크를 첨부하였다. #영상제작 경험사실 이부분은 상, 중, 하, 없음이렇게 4개 중 하나를 선택해서 적는 거였는데 나는 '없음'을 기입했다. T프렌즈에서 릴스를 만든적은 있지만 편집관련해서는 전부 팀원들이 했고, 나는 출연과 노션작성만 해서... 릴스 링크는 기입했지만 사실 영상제작 경험이 없는거라고 생각이 들어서 '없음'을 기입하였다. 그리고 이번주 금요일에 합격 카톡을 받았다.진짜 이번에도 떨어지면 KT&G와 인연이 없다고 생각하려고 했는데..ㅎㅎㅎ 그래도 이번에는 불합격 때 느꼈던 점을 잘 참고해서 개선한 끝에 합격할 수 있었다.

대학생 대외활동 공모전 채용 사이트 링커리어 https://linkareer.com/`,
      upload_time: "2022-08-10 15:03:25",
      edited_date: "2022-08-10 15:03:25",
      views: 130,
      iduser: "111865899156782818991",
    },
    {
      no: 4,
      title: "[무신사 스튜디오 크리에이터스] 3기 합격 후기 (서류 작성 팁)",
      content: "",
      upload_time: "2022-08-09 15:05:25",
      edited_date: "2022-08-09 15:05:25",
      views: 105,
      iduser: "111865899156782818991",
    },
    {
      no: 5,
      title: "[오뚜기 진앤지니] 14기 주니어마케터 서류합격 및 면접 후기",
      content:
        "POINT 1. 주작은 적당히, 솔직한 느낌을 최대한 담아서!당연히! 팀원들의 경력 사항과 소개는 절.대 거짓말을 하면 안 됩니다!",
      upload_time: "2022-08-02 00:41:25",
      edited_date: "2022-08-02 00:41:25",
      views: 105,
      iduser: "111865899156782818991",
    },
    {
      no: 6,
      title: "[대학내일 제트워크]",
      content: "제트",
      upload_time: "2022-07-22 00:41:25",
      edited_date: "2022-07-22 00:41:25",
      views: 1202,
      iduser: "111865899156782818991",
    },
    {
      no: 7,
      title:
        "[질병관리청 국민소통단] 합격자 인터뷰! 생명/보건/의료계열 대외활동으로 추천!",
      content: "Q. 질병관리청 국민소통단은 무슨 일을 하나요?",
      upload_time: "2022-07-20 21:56:25",
      edited_date: "2022-07-20 21:56:25",
      views: 92,
      iduser: "111865899156782818991",
    },
  ],
};

export const test_job_review = {
  data_det: [
    {
      no: 1,
      title: "우아한형제들_신입 개발자가 되기까지",
      content:
        "저는 국비 학원 또는 취업프로그램 같은 것은 일체 듣지 않았습니다. 딱히 큰 이유는 없지만 결국 취업프로그램이나 국비 학원을 통해서 배운걸 내 걸로 만들기 위해 개인적 공부는 필요하기 때문에 인강으로도 충분하다고 생각했습니다.인강의 장점은 계속해서 다시 들을수 있다는 게 제일 좋은 장점인 거 같습니다. 또한 개인 프로젝트와 팀 프로젝트도 같이 진행하면서 새로 알게 되었던 부분을 블로그에 정리하거나 스터디 내부에서 발표했습니다. 지금 돌이켜 생각해보면 혼자 공부했던 시간보다 스터디를 하면서 공부했던 시간이 효율적으로 3배는 더 좋았던 것 같습니다.",
      upload_time: "2022-08-16T23:24:16.000Z",
      edited_time: "2022-08-17T23:24:16.000Z",
      views: 68,
      iduser: "111865899156782818991",
    },
    {
      no: 2,
      title: "취업 5개월차 백엔드 개발자 후기",
      content:
        "결국 기본적으로 필요한 것은, 프로젝트 경험, 내가 사용한 기술에 대한 지식입니다. 코딩테스트는 코딩테스트를 수행하는 기업을 통과하기 위해 필요합니다. 코딩테스트가 저처럼 그렇게 좋지 않다면, 갈 수 있는 회사를 포기해야 한다는 생각도 해야합니다. CS는 어느정도 까지 학습해야한다는 것은 대단히 애매합니다. 일반적으로 IT 대기업을 목표로한다면 빠삭하게 알아야 합니다. 스타트업이나 유니콘은 개발팀의 성향에 따라 다르기 때문에 일반화하기 곤란한 부분이 있습니다. 결국 공통적으로 잘 물어보는 언어와 프레임워크, 네트워크, 데이터베이스 정도의 CS 지식은 기본적으로 챙기는 것이 좋고 거기에 더해 자료구조와 운영체제에 대해서도 일부 알아야 합니다.",
      upload_time: "2022-07-30T11:24:16.000Z",
      edited_time: "2022-07-31T11:24:16.000Z",
      views: 50,
      iduser: "111865899156782818991",
    },
    {
      no: 3,
      title: "카카오 개발자가 되기 위한 과정",
      content: "a",
      upload_time: "2022-07-29T11:24:16.000Z",
      edited_time: "2022-08-01T11:24:16.000Z",
      views: 21,
      iduser: "111865899156782818991",
    },
    {
      no: 4,
      title: "코딩테스트의 중요성",
      content: "a",
      upload_time: "2022-07-28T11:24:16.000Z",
      edited_time: "2022-08-01T11:24:16.000Z",
      views: 23,
      iduser: "111865899156782818991",
    },
    {
      no: 5,
      title: "LINE 프론트엔드 개발자 후기",
      content: "a",
      upload_time: "2022-07-27T11:24:16.000Z",
      edited_time: "2022-08-01T11:24:16.000Z",
      views: 9,
      iduser: "111865899156782818991",
    },
    {
      no: 6,
      title: "여러분 전혀 늦지 않았습니다.",
      content: "a",
      upload_time: "2022-07-26T11:24:16.000Z",
      edited_time: "2022-07-29T11:24:16.000Z",
      views: 15,
      iduser: "111865899156782818991",
    },
    {
      no: 7,
      title: "네카라 합격후기",
      content: "a",
      upload_time: "2022-07-25T11:24:16.000Z",
      edited_time: "2022-07-27T11:24:16.000Z",
      views: 20,
      iduser: "111865899156782818991",
    },
    {
      no: 8,
      title: "취업에서 가장 중요한것은?",
      content: "a",
      upload_time: "2022-07-24T11:24:16.000Z",
      edited_time: "2022-07-24T11:24:16.000Z",
      views: 8,
      iduser: "111865899156782818991",
    },
    {
      no: 9,
      title: "네이버 개발자 취직후기",
      content: "a",
      upload_time: "2022-07-23T11:24:16.000Z",
      edited_time: "2022-07-24T11:24:16.000Z",
      views: 4,
      iduser: "111865899156782818991",
    },
    {
      no: 10,
      title: "컴공나와서 꼭 개발자만 하는건 아닙니다.",
      content: "a",
      upload_time: "2022-07-22T11:24:16.000Z",
      edited_time: "2022-07-24T11:24:16.000Z",
      views: 10,
      iduser: "111865899156782818991",
    },
    {
      no: 11,
      title: "프로그래머가 되기 위한 과정",
      content: "a",
      upload_time: "2022-07-21T11:24:16.000Z",
      edited_time: "2022-07-24T11:24:16.000Z",
      views: 11,
      iduser: "111865899156782818991",
    },
  ],
};
