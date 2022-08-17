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
    const response = await getExhibitList();
    const data = await response.data_det;
    console.log(response.data_det);
    return data;
  } else {
    const response = await getPostList(category);
    const data = await response.data_det;
    console.log(response.data_det);
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
