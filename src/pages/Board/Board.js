import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import Menu from "../../components/FixedCpnt/Menu";
import SubHeader from "../../components/FixedCpnt/SubHeader";
import Footer from "../../components/FixedCpnt/Footer";
import { headerMenu } from "../../components/variables";

import PostList from "../../components/Post/PostList";

import Bachelor from "../Bachelor/Bachelor";
import StudentActivity, {
  StudentClub,
} from "../StudentActivity/StudentActivity";
import StudentCouncil from "../StudentCouncil/StudentCouncil";

const getPostList = (category) => {
  return data1;
};

const getDisplaylist = () => {
  return data2;
};

function Board() {
  let { board, sub } = useParams();

  const [currentMenu, setCurrentMenu] = useState(
    headerMenu.find((menu) => menu.eng === board)
  );
  const [searchParams, setSearchParams] = useSearchParams();
  let pageType = searchParams.get("page");

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    let current = headerMenu.find((menu) => menu.eng === board);
    setCurrentMenu(current);
    if (pageType === "list") {
      let tmpData = getPostList(sub);
      setPostList(tmpData.data_det);
    } else if (pageType === "display") {
      let tmpData = getDisplaylist();
      setPostList(tmpData.data_det);
    }
  }, [board, sub, pageType]);

  const getInfoContent = (board) => {
    switch (board) {
      case "info":
        return;
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
    switch (pageType) {
      case "info":
        content = getInfoContent(board);
        break;
      case "list":
        content = <PostList data={postList} />;
        break;
      case "display":
        content = <StudentActivity data={postList} />;
        break;

      default:
        break;
    }
    return content;
  };

  return (
    <div className="page-container">
      <Menu />
      <SubHeader menu={currentMenu} sub={sub} />
      <div className="page-body">{getBodyContent(pageType)}</div>

      <Footer />
    </div>
  );
}

export default Board;

const data1 = {
  data_det: [
    {
      no: 8,
      title: "공모전 글 4555",
      upload_time: "2022-08-07 10:21:31",
      img: true,
      views: null,
      end_date: "2022-08-01",
    },
    {
      no: 7,
      title: "글 작성",
      upload_time: "2022-08-07 01:01:29",
      img: true,
      views: null,
      end_date: "2022-08-16",
    },
    {
      no: 6,
      title: "글 작성합니다",
      upload_time: "2022-08-07 00:55:50",
      img: false,
      views: null,
      end_date: "2022-08-19",
    },
    {
      no: 5,
      title: "공모전 5555",
      upload_time: "2022-08-02 01:20:15",
      img: true,
      views: null,
      end_date: "2022-08-17",
    },
    {
      no: 3,
      title: "공모전 3",
      upload_time: "2022-08-02 01:14:57",
      img: false,
      views: null,
      end_date: "2022-08-16",
    },
    {
      no: 2,
      title: "교육 공모전 2",
      upload_time: "2022-08-02 01:12:26",
      img: false,
      views: null,
      end_date: "2022-08-13",
    },
    {
      no: 1,
      title: "교육 공모전",
      upload_time: "2022-08-02 00:55:15",
      img: false,
      views: null,
      end_date: "2022-08-13",
    },
  ],
};

const data2 = {
  data_det: [
    {
      no: 1,
      iduser: "109559345542221094986",
      title: "제목",
      content: "내용",
      team: "어떤팀",
      img: "uploads\\12044t08f.jpg",
      award: "금상",
      constestName: "소웨경",
      keyword: "웹 간편한 좋은 쨩",
      stack: "",
      link_github: "깃헙링크",
      link_service: "서비스링크",
    },
    {
      no: 2,
      iduser: "109559345542221094986",
      title: "제목제목",
      content: "내용",
      team: "다른팀",
      img: "uploads\\12044t08f.jpg",
      award: "동상",
      constestName: "소웨경",
      keyword: "",
      stack: "",
      link_github: "",
      link_service: "",
    },
    {
      no: 3,
      iduser: "109559345542221094986",
      title: "코인",
      content: "내용",
      team: "코인",
      img: "uploads\\12044t08f.jpg",
      award: "은상",
      constestName: "소웨경",
      keyword: "",
      stack: "",
      link_github: "깃헙링크",
      link_service: "서비스링크",
    },
    {
      no: 4,
      iduser: "109559345542221094986",
      title: "컴홈",
      content: "내용",
      team: "개발의 성지",
      img: "uploads\\12044t08f.jpg",
      award: "대상",
      constestName: "소웨경",
      keyword: "",
      stack: "",
      link_github: "깃헙링크",
      link_service: "서비스링크",
    },
    {
      no: 5,
      iduser: "109559345542221094986",
      title: "뭐더라",
      content: "내용",
      team: "다르ㄴ님",
      img: "uploads\\12044t08f.jpg",
      award: "금상",
      constestName: "소웨경",
      keyword: "",
      stack: "",
      link_github: "깃헙링크",
      link_service: "서비스링크",
    },
    {
      no: 6,
      iduser: "109559345542221094986",
      title: "PLANet",
      content: "내용",
      team: "PLANet",
      img: "uploads\\12044t08f.jpg",
      award: "참가상",
      constestName: "소웨경",
      keyword: "",
      stack: "",
      link_github: "깃헙링크",
      link_service: "서비스링크",
    },
    {
      no: 7,
      iduser: "109559345542221094986",
      title: "공동장",
      content: "내용",
      team: "공동장",
      img: "uploads\\12044t08f.jpg",
      award: "금상",
      constestName: "소웨경",
      keyword: "",
      stack: "",
      link_github: "깃헙링크",
      link_service: "서비스링크",
    },
    {
      no: 8,
      iduser: "109559345542221094986",
      title: "수정물산",
      content: "내용",
      team: "crystalproduct3",
      img: "uploads\\12044t08f.jpg",
      award: "금상",
      constestName: "소웨경",
      keyword: "",
      stack: "",
      link_github: "깃헙링크",
      link_service: "서비스링크",
    },
    {
      no: 9,
      iduser: "109559345542221094986",
      title: "제목123",
      content: "내용",
      team: "234",
      img: "uploads\\12044t08f.jpg",
      award: "금상",
      constestName: "소웨경",
      keyword: "",
      stack: "",
      link_github: "깃헙링크",
      link_service: "서비스링크",
    },
    {
      no: 10,
      iduser: "109559345542221094986",
      title: "제목456",
      content: "내용",
      team: "567",
      img: "uploads\\12044t08f.jpg",
      award: "금상",
      constestName: "소웨경",
      keyword: "",
      stack: "",
      link_github: "깃헙링크",
      link_service: "서비스링크",
    },
  ],
};
