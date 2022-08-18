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
    headerMenu.find((menu) => menu.eng === "studentcouncil")
  );
  const [data, setData] = useState({
    no: 11,
    iduser: "0788757853",
    title: "[리액트 컴퓨터공학과 행사 수요조사]",
    content: `안녕하세요. 컴퓨터공학과 제 6대 학생회 리액트입니다! <br />
저희가 드디어 3년만에 컴공 MT를 진행하게 되었습니다! <br />
아래사항들을 참고하시고 구글폼 작성과 mt비용 입금을 해주셔야 신청이 됩니다! <br />
이전 수요조사 폼을 작성하신 분들도 꼭 이 폼을 작성해주셔야합니다! <br />
코로나19의 여파로 저희 학생회도 엠티 경험이 전무하여 부족함이 있을 수 있으니 학우분들의 너른 양해 부탁드립니다!`,
    views: 1,
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
      <Menu /> <SubHeader menu={currentMenu} sub="student_council_notice" />
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
      </div>
      <Footer />
    </div>
  );
}

export default Temp;
