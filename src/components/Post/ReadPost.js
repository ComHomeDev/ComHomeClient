import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";
import { IoIosAttach } from "react-icons/io";
import "./Post.css";
import {
  readPost,
  getFiles,
  deletePost,
  postScrap,
  postUnscrap,
  createComment,
  createRecomment,
} from "../../api/main";
import Menu from "../FixedCpnt/Menu";
import Footer from "../FixedCpnt/Footer";
import SubHeader from "../FixedCpnt/SubHeader";
import KakaoShareBtn from "../Button/KakaoShareBtn";

import { headerMenu } from "../../components/variables";
import {
  test_student_council_notice,
  test_edu_contest,
  test_extra_review,
} from "../../pages/Board/Board";

const fetchData = async (sub, id, userId) => {
  console.log("here");
  // const response = await readPost(sub, id, userId);
  // console.log(response);
  if (sub === "recruit_intern") {
    return recruit_intern[id - 1];
  } else if (sub === "cs_notice") {
    return cs_notice[id - 1];
  } else if (sub === "student_council_notice") {
    return test_student_council_notice.data_det[id];
  } else if (sub === "edu_contest") {
    return test_edu_contest.data_det[0];
  } else if (sub === "extra_review") {
    return test_extra_review.data_det[id - 1];
  }
  // const response = re;
  // return response;
};

function ReadPost() {
  let { board, sub, id } = useParams();
  const queryClient = useQueryClient();

  const [currentMenu, setCurrentMenu] = useState(
    headerMenu.find((menu) => menu.eng === board)
  );
  const [data, setData] = useState({
    no: "",
    iduser: "",
    title: "",
    content: "",
    views: "",
    img: [],
    upload_time: format(new Date(), "yyyy-MM-dd"),
    edited_date: format(new Date(), "yyyy-MM-dd"),
  });
  const [files, setFiles] = useState([]);
  const [scrap, setScrap] = useState(undefined);
  const [comment, setComment] = useState([]);
  const navigate = useNavigate();
  const userId = window.localStorage.getItem("userID");
  // const userId = "105160463951938701131";

  const result = useQuery({
    queryKey: [`${sub}`, `${id}`],
    queryFn: () => fetchData(sub, id, userId),
    retry: 0,
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (result.status === "success") {
      const getData = queryClient.getQueryData([`${sub}`, `${id}`]);
      setData(getData);
      console.log(getData);
      // setScrap(getData.scrap);
      // if (
      //   sub !== "job_review" &&
      //   sub !== "extra_review" &&
      //   sub !== "edu_contest"
      // ) {
      //   setFiles(getData.data_file);
      // }
      if (sub === "edu_contest") {
        setComment(test_edu_contest.comment);
      }
    }
    window.scrollTo(0, 0);
  }, [id, result.status]);

  const fetchFileData = async (filename) => {
    console.log(filename);
    const response = await getFiles(filename);
    console.log(response);
  };

  const onDelete = () => {
    if (window.confirm("글이 삭제됩니다.\n정말 진행하시겠습니까?")) {
      //삭제 api
      deletePost(sub, id);
      navigate(`../${board}/${sub}?page=list`, { replace: true });
    }
  };

  const onScrapHandler = () => {
    const datas = {
      userId: userId,
      no: data.no,
      board: sub,
      title: data.title,
    };
    if (scrap) {
      setScrap(false);
      postUnscrap(datas);
    } else {
      setScrap(true);
      postScrap(datas);
    }
  };

  return (
    <div className="page-container">
      <Menu /> <SubHeader menu={currentMenu} sub={sub} />
      <div className="article-container">
        <div className="article-title-wrap">
          <h2 className="article-title">{data.title}</h2>
          <div className="article-info">
            <div className="article-info-text">
              작성일
              {format(
                parseISO(data.upload_time.substring(0, 10)),
                "yyyy-MM-dd"
              )}
            </div>
            <div className="article-info-text">
              수정일
              {format(
                parseISO(data.edited_date.substring(0, 10)),
                "yyyy-MM-dd"
              )}
            </div>
            <div className="article-info-text">조회수 {data.views + 1}</div>
            <div className="article-edit-buttons">
              {data.iduser === userId && (
                <>
                  <Link
                    to={`/${board}/${sub}/update`}
                    className="article-edit"
                    state={{ data: data, files: files }}
                  >
                    수정하기
                  </Link>
                  <button className="article-delete" onClick={onDelete}>
                    삭제하기
                  </button>
                </>
              )}
              <KakaoShareBtn title={data.title} description={data.content} />
            </div>
          </div>
        </div>
        <hr style={HrStyle} />
        {board !== "community" && (
          <>
            {" "}
            <div className="article-attach">
              <div className="article-attach-tag">첨부파일</div>
              {data.file === undefined || data.file.length === 0 ? (
                <div>&nbsp;첨부파일이 없습니다.</div>
              ) : (
                <div>
                  {data.file.length !== 0 &&
                    data.file.map((file, i) => {
                      return (
                        <div
                          className="article-attach-file"
                          // onClick={() => {
                          //   fetchFileData(file.file_infoN.substr(8));
                          // }}
                        >
                          <IoIosAttach
                            size={"1.5em"}
                            style={{
                              transform: "rotate(45deg)",
                              marginLeft: "5px",
                              marginTop: "5px",
                            }}
                          />
                          <a href={file}>{data.file_name[i]}</a>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
            <hr style={HrStyle} />
          </>
        )}

        {board !== "community" && (
          <div className="img-scroll-box">
            {data.img.map((imgs) => (
              <img src={imgs} className="article-img" />
            ))}
          </div>
        )}

        <div className="article-content">
          {data.content.split("<br />").map((line) => {
            return (
              <>
                {line}
                <br />
              </>
            );
          })}
        </div>
        {scrap !== undefined && (
          <button className="scrap-button" onClick={onScrapHandler}>
            {scrap ? "☆스크랩 취소하기" : "☆스크랩하기"}
          </button>
        )}
        <hr style={HrStyle} />
        {sub === "edu_contest" && <Comment data={comment} postData={data} />}
      </div>
      <Footer />
    </div>
  );
}

function Comment({ data, postData }) {
  const [inputs, setInputs] = useState({
    text: "",
    anon: true,
    secret: false,
  });
  const [mode, setMode] = useState("read");
  const [openRec, setOpenRec] = useState(0);
  const { text, anon, secret } = inputs;
  const userId = window.localStorage.getItem("userID");

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    if (name === "text") {
      setInputs({
        ...inputs,
        text: value,
      });
    } else if (name === "anon") {
      setInputs({
        ...inputs,
        anon: !anon,
      });
    } else if (name === "secret") {
      setInputs({
        ...inputs,
        secret: !secret,
      });
    }
  };

  // useEffect(() => {}, [data]);
  const onSubmitHandler = () => {
    //어쩌고저쩌고..
    createComment(postData, inputs);
  };

  const onRecSubmitHandler = (commentNo) => {
    setOpenRec(0);
    createRecomment(commentNo, inputs);
  };
  return (
    <div className="comment-container">
      {data.length === 0 ? (
        <div className="empty-comment">아직 작성된 댓글이 없습니다.</div>
      ) : (
        <div className="comments">
          {data.map((com) => {
            return (
              <div className="comment">
                <div className="comment-original">
                  {com.content === null ? "비밀 댓글입니다." : com.content}
                  {com.recomment_check !== 1 && postData.iduser === userId && (
                    <button onClick={() => setOpenRec(com.no)}>
                      답글 달기
                    </button>
                  )}
                </div>
                {openRec === com.no && (
                  <div className="create-comment">
                    <form onSubmit={() => onRecSubmitHandler(com.no)}>
                      <input
                        required
                        type="text"
                        name="text"
                        value={text}
                        onChange={onChangeHandler}
                      />
                      익명
                      <input
                        type="checkbox"
                        name="anon"
                        value={anon}
                        onChange={onChangeHandler}
                      />
                      비밀
                      <input
                        type="checkbox"
                        name="secret"
                        value={secret}
                        onChange={onChangeHandler}
                      />
                      <button type="submit">댓글 작성하기</button>
                    </form>
                  </div>
                )}
                {com.recomment !== null && (
                  <div className="comment-recomment">
                    {com.recomment === null
                      ? "비밀 댓글입니다."
                      : com.recomment}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      댓글 작성하기
      <div className="create-comment">
        <form onSubmit={onSubmitHandler}>
          <input
            required
            type="text"
            name="text"
            value={text}
            onChange={onChangeHandler}
          />
          익명
          <input
            type="checkbox"
            name="anon"
            value={anon}
            onChange={onChangeHandler}
          />
          비밀
          <input
            type="checkbox"
            name="secret"
            value={secret}
            onChange={onChangeHandler}
          />
          <button type="submit">댓글 작성하기</button>
        </form>
      </div>
    </div>
  );
}

export default ReadPost;

export const HrStyle = {
  height: "1px",
  width: "calc(100% + 40px)",
  backgroundColor: "#b0c4eb",
  border: "none",
  margin: "20px 0 10px -20px",
};

const recruit_intern = [
  {
    no: 1,
    scrap: 1,
    iduser: "111865899156782818991",
    title: "2022년 하반기 ICT 학점연계 프로젝트 인턴십",
    content:
      "하반기 ICT 학점연계 인턴십 모집하니 많은 지원 바랍니다.<br />자세한 참고사항은 첨부파일을 참고하세요.",
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
    file_name: [
      "학점연계프로젝트인턴십 연수업체 주요정보.pdf",
      "2022년 ICT학점연계프로젝트인턴십 참여대학 모집 공고.pdf",
    ],
  },
  {
    no: 2,
    scrap: 0,
    iduser: "111865899156782818991",
    title: "[데브시스터즈] 2022년 서버 개발 인턴십 채용",
    content: `
1. 담당업무<br />
-백엔드 인프라 구축 및 관리<br />
-API 서버 개발 및 백오피스 툴 개발<br />
<br />
2. 지원자격<br />
-4년제 대학 이공계 전공자 중 기초 프로그래밍 역량이 있는 분<br />
<br />
3. 우대조건<br />
-웹 개발 및 라이브 서비스 경험<br />
-Interpreter 기반언어 개발 및 운영 경험<br />
-코드 품질 향상을 위해 지속적으로 리팩토링을 진행한 경험<br />
-OOP 및 FP 등 프로그래밍 패러다임에 관심이 많으신 분<br />
<br />
4. 공통 지원사격<br />
-해외 여행에 결격 사유가 없으신 분<br />
<br />
5. 기타<br />
데브시스터즈 채용페이지: https://careers.devsister.com/<br />`,
    upload_time: "2022-08-17T01:05:08.000Z",
    edited_date: "2022-08-18T10:05:08.000Z",
    views: 89,
    img: [
      "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/%EB%8D%B0%EB%B8%8C%EC%8B%9C%EC%8A%A4%ED%84%B0%EC%A6%88.PNG?alt=media&token=3637fc58-3c03-4764-b241-85c664c820c2",
    ],
    file_status: 0,
    file: [],
    file_name: [],
  },
];

const cs_notice = [
  {
    no: 1,
    iduser: "111865899156782818991",
    title: "IT공통과목 관련 안내사항",
    content:
      "1. 분홍생으로 표시된 과목은 실습과목입니다. 2. 각 과목별 분반 기준: 주전공 학과 공지사항을 참고하세요.",
    upload_time: "2022-08-18T01:05:08.000Z",
    edited_date: "2022-08-18T10:05:08.000Z",
    views: 98,
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
];
