import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";
import { IoIosAttach } from "react-icons/io";
import "./Post.css";
import { getFiles, deletePost, postScrap, postUnscrap } from "../../api/main";
import Menu from "../FixedCpnt/Menu";
import Footer from "../FixedCpnt/Footer";
import SubHeader from "../FixedCpnt/SubHeader";
import KakaoShareBtn from "../Button/KakaoShareBtn";

import { headerMenu } from "../variables";
import { HrStyle } from "./ReadPost";

function Temp() {
  let { board, sub, id } = useParams();
  const queryClient = useQueryClient();

  const [currentMenu, setCurrentMenu] = useState(
    headerMenu.find((menu) => menu.eng === "notice")
  );
  const [data, setData] = useState({
    no: 11,
    iduser: "22342345",
    title: "내년 소프트웨어 경진대회 미리 준비하실 분 모집합니다.",
    content: `안녕하세요. 컴퓨터공학과 20학번 수정입니다. <br />
내년 소웨경 미리미리 준비하실 분 모집합니다! <br />
열심히 하시는 분 환영합니다~~~ <br />
편하게 댓글 주세요! <br />`,
    views: 1,
    img: [
      "https://firebasestorage.googleapis.com/v0/b/comhome-7cab0.appspot.com/o/images%2F%EC%86%8C%EC%9B%A8%EA%B2%BD_%ED%8F%AC%EC%8A%A4%ED%84%B0.png?alt=media&token=a54f407c-d2d5-4f21-a3df-a4bd0b5f40ec",
    ],
    end_date: "2022-08-31",
    upload_time: format(new Date(), "yyyy-MM-dd"),
    edited_date: format(new Date(), "yyyy-MM-dd"),
  });
  const [files, setFiles] = useState([]);
  const [scrap, setScrap] = useState(0);
  const [comment, setComment] = useState([]);
  const navigate = useNavigate();
  const userId = window.localStorage.getItem("userID");
  // const userId = "105160463951938701131";

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
    window.scrollTo(0, 0);
  }, [id]);

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
      <Menu /> <SubHeader menu={currentMenu} sub="edu_contest" />
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
        <div className="empty-comment" style={{ marginBottom: "100px" }}>
          아직 작성된 댓글이 없습니다.
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Temp;
