import React, { useState, useEffect } from "react";

import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import { useNavigate } from "react-router-dom";
import { IoIosAttach } from "react-icons/io";

import "./Post.css";
import { readPost, getFiles, deletePost } from "../../api/main";

function ReadPost({ id, category, getData, setMode }) {
  const [data, setData] = useState({
    title: "aaaaaaaa",
    content: "sssssssssssss",
    views: "",
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
    const response = await readPost(category, id);
    console.log(response.data);
    // const response = {
    //   data: {
    //     data_det: {
    //       no: 3,
    //       title: "뫄뫄",
    //       content: "과과고가과과곽",
    //       views: 4,
    //       upload_time: "2022-07-31T15:45:20.000Z",
    //       edited_date: "2022-07-31T15:45:20.000Z",
    //     },
    //   },
    // };
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
