import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";
import { IoIosAttach } from "react-icons/io";
import "./Post.css";
import { readPost, getFiles, deletePost } from "../../api/main";
import Menu from "../FixedCpnt/Menu";
import Footer from "../FixedCpnt/Footer";
import SubHeader from "../FixedCpnt/SubHeader";
import KakaoShareBtn from "../Button/KakaoShareBtn";

import { headerMenu } from "../../components/variables";
import { createComment } from "../../api/main";

function ReadPost() {
  let { board, sub, id } = useParams();

  const [currentMenu, setCurrentMenu] = useState(
    headerMenu.find((menu) => menu.eng === board)
  );
  const [data, setData] = useState({
    no: 3,
    iduser: "1234",
    title: "aaaaaaaa",
    content: "sssssssssssss",
    views: "",
    upload_time: "2022-07-31T15:45:20.000Z",
    edited_date: "2022-07-31T15:45:20.000Z",
  });
  const [files, setFiles] = useState([]);
  const [comment, setComment] = useState([]);
  const navigate = useNavigate();
  const location = window.location.pathname.split("/");
  // const userId = window.localStorage.getItem("userID");
  const userId = "1234";
  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const fetchFileData = async (filename) => {
    console.log(filename);
    const response = await getFiles(filename);
    console.log(response);
  };

  const fetchData = async () => {
    // const response = await readPost(sub, id);
    // // const response = {
    // //   data: {
    // //     data_det: {
    // //       no: 3,
    // //       title: "뫄뫄",
    // //       content: "과과고가과과곽",
    // //       views: 4,
    // //       upload_time: "2022-07-31T15:45:20.000Z",
    // //       edited_date: "2022-07-31T15:45:20.000Z",
    // //     },
    // //   },
    // // };
    // setData(response.data.data_det);
    // if (response.data.file !== undefined) {
    //   setFiles(response.data.file);
    // }
    // if (response.data.comment !== undefined) {
    //   setComment(response.data.comment);
    // }
    setComment(datas.comment);
  };
  console.log(datas.comment);

  const onDelete = () => {
    if (window.confirm("글이 삭제됩니다.\n정말 진행하시겠습니까?")) {
      //삭제 api
      deletePost(sub, id);
      navigate(`../${board}/${sub}`, { replace: true });
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
              작성일 {format(parseISO(data.upload_time), "yyyy-MM-dd")}
            </div>
            <div className="article-info-text">
              수정일 {format(parseISO(data.edited_date), "yyyy-MM-dd")}
            </div>
            <div className="article-info-text">조회수 {data.views}</div>
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
        <div className="article-attach">
          <div className="article-attach-tag">첨부파일</div>
          {data.file_status === 0 ? (
            <div>&nbsp;첨부파일이 없습니다.</div>
          ) : (
            <div>
              {files.length !== 0 &&
                files.map((file) => {
                  return (
                    <div
                      className="article-attach-file"
                      onClick={() => {
                        fetchFileData(file.file_infoN.substr(8));
                      }}
                    >
                      <IoIosAttach
                        size={"1.5em"}
                        style={{
                          transform: "rotate(45deg)",
                          marginLeft: "5px",
                          marginTop: "5px",
                        }}
                      />
                      {file.file_originN}
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        <hr style={HrStyle} />

        <div className="article-content">{data.content}</div>
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
  const { text, anon, secret } = inputs;

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
  console.log(inputs);
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
                </div>
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

const datas = {
  data: {
    no: 7,
    title: "글 작성",
    content: "1111",
    upload_time: "2022-08-07 01:01:29",
    edited_date: "2022-08-07 01:30:53",
    img: "uploads\\1659802781795.png",
    views: null,
    iduser: "112815002397150634161",
    end_date: "2022-08-13",
  },
  comment: [
    {
      no: 24,
      content: null,
      upload_time: "2022-08-07 02:20:15",
      iduser: null,
      edu_contest_no: 7,
      secret_check: 1,
      anon_check: 1,
      recomment: null,
    },
    {
      no: 25,
      content: null,
      upload_time: "2022-08-07 02:20:29",
      iduser: null,
      edu_contest_no: 7,
      secret_check: 1,
      anon_check: 0,
      recomment: null,
    },
    {
      no: 26,
      content: "비밀 안체크, 익명 체크",
      upload_time: "2022-08-07 02:20:37",
      iduser: null,
      edu_contest_no: 7,
      secret_check: 0,
      anon_check: 1,
      recomment: null,
    },
    {
      no: 27,
      content: "비밀, 익명 안체크",
      upload_time: "2022-08-07 02:20:43",
      iduser: null,
      edu_contest_no: 7,
      secret_check: 0,
      anon_check: 0,
      recomment: null,
    },
    {
      no: 28,
      content: "글쓴이 댓글",
      upload_time: "2022-08-07 11:04:35",
      iduser: null,
      edu_contest_no: 7,
      secret_check: 0,
      anon_check: 0,
      recomment: null,
    },
  ],
};
