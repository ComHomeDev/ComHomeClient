import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Post.css";
import { updatePost, createPost } from "../../api/main";

function UpdatePost({ setMode, category, data }) {
  const navigate = useNavigate();
  const location = window.location.pathname.split("/");
  console.log(data);

  const { no, title, content } = data.data_det;
  const [editTitle, setEditTitle] = useState(title);
  const [editDesc, setEditDesc] = useState(content);
  const [imgFile, setImgFile] = useState(null);
  const [files, setFiles] = useState([]);

  const handleTitleChange = (e) => {
    setEditTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setEditDesc(e.target.value);
  };

  const onFileChange = (form, event) => {
    if (form === "img") {
      setImgFile(event.target.files);
    } else {
      setFiles(files.concat(event.target.files));
    }
  };
  console.log(files);
  const onSubmit = (e) => {
    e.preventDefault();
    const data = { no: no, title: editTitle, content: editDesc };

    switch (category) {
      case "student_council_notice":
        updatePost(category, data);
        break;
      default:
        // updatePost(category, data);
        break;
    }

    setMode("post");
  };
  return (
    <div className="create-post-container">
      <form onSubmit={onSubmit}>
        <div className="create-section">
          <div className="post-title">제목</div>
          <input
            className="create-title"
            type="text"
            name="title"
            placeholder="[동아리] 멋쟁이 사자처럼 후기"
            value={editTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="create-section">
          <div className="post-title desc">내용</div>
          <textarea
            className="create-desc"
            type="text"
            name="desc"
            value={editDesc}
            placeholder="컴퓨터공학과 수정이들에게 유익한 내용을 공유해주세요!"
            onChange={handleDescChange}
          />
        </div>
        <div className="button-group">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onFileChange("img", e)}
          />
          <input
            type="file"
            name="filefield"
            multiple
            onChange={(e) => onFileChange("file", e)}
            accept=".pdf, text/plain, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .hwp, .word"
          />
          <button
            className="form-button"
            type="cancel"
            onClick={(e) => {
              if (
                window.confirm("작성하던 내용이 삭제됩니다. 취소하시겠습니까?")
              ) {
                navigate(`../${location[1]}/${location[2]}/${no}`, {
                  replace: true,
                });
                setMode("read");
              } else {
                e.preventDefault();
              }
            }}
          >
            작성 취소하기
          </button>
          <button className="form-button" type="submit">
            글 등록하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdatePost;
