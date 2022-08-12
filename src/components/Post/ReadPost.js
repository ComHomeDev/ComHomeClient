import React, { useState, useEffect } from "react";
import axios from "axios";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { IoIosAttach } from "react-icons/io";
import "./Post.css";
import Card from "../Card";
import Pagination from "../Pagination/Pagination";
import { getPostList, readPost, getFiles, deletePost } from "../../api/main";
import KakaoShareBtn from "../Button/KakaoShareBtn";

function ReadPost({ setMode, category }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetchData();
  }, [category]);

  useEffect(() => {
    setSearchParams({ page: page });
  }, [page]);

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, []);


  const fetchData = async () => {
    // const response = await getPostList(category);
    const response = postList;
    console.log(response);
    setPosts(response.data.data_det);
  };

  return (
    <div className="read-post-container">
      <button
        className="new-post"
        onClick={() => {
          setMode("create");
        }}
      >
        글 작성하기
      </button>
      <div className="post-list">
        {posts.slice(offset, offset + limit).map((data, index) => {
          return (
            <div key={data.no} value={index}>
              <Link to={`${data.no}`}>
                <Card
                  key={data.title}
                  value={index}
                  className="post-list-cards"
                  hoverColor={"#DFE7F6"}
                  shadowColor={"#DFDFDF"}
                >
                  <div className="post-list-column">
                    <div className="post-list-title" value={index}>
                      {data.title}
                    </div>
                    <div className="post-list-row">
                      <div className="post-list-lookup">
                        조회수 {data.views}
                      </div>
                      {data.file_status === 1 && (
                        <IoIosAttach
                          size={"1.5em"}
                          style={{
                            transform: "rotate(45deg)",
                            marginLeft: "5px",
                          }}
                        />
                      )}
                    </div>
                  </div>

                  <div className="post-list-date" value={index}>
                    {format(parseISO(data.upload_time), "yyyy-MM-dd")}
                  </div>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
      <Pagination
        total={posts.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export function Post({ id, category, getData, setMode }) {
  const [data, setData] = useState({
    title: "아앙",
    content: "아앙",
    views: "1",
    upload_time: "2022-07-31T15:45:20.000Z",
    edited_date: "2022-07-31T15:45:20.000Z",
  });
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();
  const location = window.location.pathname.split("/");

  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);
  console.log(data);

  const fetchFileData = async (filename) => {
    console.log(filename);
    const response = await getFiles(filename);
    console.log(response);
  };

  const fetchData = async () => {
    // const response = await readPost(category, id);
    // console.log(response.data);
    const response = {
      data: {
        data_det: {
          no: 3,
          title: "바껴랏",
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          views: 4,
          upload_time: "2022-07-31T15:45:20.000Z",
          edited_date: "2022-07-31T15:45:20.000Z",
        },
      },
    };
    getData(response.data);
    setData(response.data.data_det);
    if (response.data.file !== undefined) {
      setFiles(response.data.file);
    }
  };

  const onDelete = () => {
    if (window.confirm("글이 삭제됩니다.\n정말 진행하시겠습니까?")) {
      //삭제 api
      deletePost(category, id);
      navigate(`../${location[1]}/${location[2]}/?page=1`, { replace: true });
      setMode("read");
    }
  };

  return (
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
            <button className="article-edit" onClick={() => setMode("update")}>
              수정하기
            </button>
            <button className="article-delete" onClick={onDelete}>
              삭제하기
            </button>
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

const postList = {
  data: {
    data_det: [
      {
        no: 2,
        title: "a1111",
        review_cont: "a",
        upload_time: "2022-07-24T11:24:16.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 1,
        title: "취업후기글제목",
        review_cont: "취업후기글내용",
        upload_time: "2022-07-17T12:02:42.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 4,
        title: "a",
        review_cont: "a",
        upload_time: "2022-07-24T11:24:16.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 5,
        title: "취업후기글제목",
        review_cont: "취업후기글내용",
        upload_time: "2022-07-17T12:02:42.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 6,
        title: "a",
        review_cont: "a",
        upload_time: "2022-07-24T11:24:16.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 7,
        title: "취업후기글제목",
        review_cont: "취업후기글내용",
        upload_time: "2022-07-17T12:02:42.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 8,
        title: "a",
        review_cont: "a",
        upload_time: "2022-07-24T11:24:16.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 9,
        title: "취업후기글제목",
        review_cont: "취업후기글내용",
        upload_time: "2022-07-17T12:02:42.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 10,
        title: "a",
        review_cont: "a",
        upload_time: "2022-07-24T11:24:16.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 12,
        title: "취업후기글제목",
        review_cont: "취업후기글내용",
        upload_time: "2022-07-17T12:02:42.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 32,
        title: "a",
        review_cont: "a",
        upload_time: "2022-24T11:24:16.000Z",
        iduser: "111865899156782818991",
      },
      {
        no: 13,
        title: "취업후기글제목2222",
        review_cont: "취업후기글내용",
        upload_time: "2022-07-17T12:02:42.000Z",
        iduser: "111865899156782818991",
      },
    ],
  },
};
