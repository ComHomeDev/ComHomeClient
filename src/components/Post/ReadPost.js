import React, { useState, useEffect } from "react";
import axios from "axios";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { Link } from "react-router-dom";
import { IoIosAttach } from "react-icons/io";

import "./Post.css";
import Card from "../Card";
import Pagination from "../Pagination/Pagination";
import { getPostList, readPost, getFiles } from "../../api/main";

function ReadPost({ setMode, category }) {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  let tmp = "review";
  console.log(category);
  const fetchData = async () => {
    const response = await getPostList(category);
    console.log(response.data);
    setPosts(response.data.data_det);
  };
  console.log(posts);
  useEffect(() => {
    fetchData();
    setPage(1);
  }, [category]);

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

export function Post({ id, category }) {
  const [data, setData] = useState({
    title: "",
    content: "",
    views: "",
    upload_time: "2022-07-31T15:45:20.000Z",
    edited_date: "2022-07-31T15:45:20.000Z",
  });
  const [files, setFiles] = useState([]);
  useEffect(() => {
    fetchData();
    window.scrollTo(0, 0);
  }, []);

  const fetchFileData = async (filename) => {
    console.log(filename);
    const response = await getFiles(filename);
    console.log(response);
  };

  const fetchData = async () => {
    const response = await readPost(category, id);
    console.log(response.data);
    setData(response.data.data_det);
    if (response.data.file !== undefined) {
      setFiles(response.data.file);
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
            <button className="article-edit">수정하기</button>
            <button className="article-delete">삭제하기</button>
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
