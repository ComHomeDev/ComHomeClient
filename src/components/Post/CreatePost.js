import React, { useState } from "react";
import "./Post.css";
import { createCouncilPost, createPost } from "../../api/main";

const example =
  "컴퓨터공학과 수정이들에게 유익한 내용을 공유해주세요!\n\n--------------------------------------------------\n\n1. 활동한 대외활동 이름\n\n\n2. 활동 기간\n\n\n3. 활동 내용";

function CreatePost({ setMode, category }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState(example);
  const [imgFile, setImgFile] = useState(null);
  const [files, setFiles] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
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
    const data = { title: title, content: desc };
    console.log(title, data);
    switch (category) {
      case "student_council_notice":
        createCouncilPost(category, data);
        break;
      default:
        createPost(category, data);
        break;
    }

    setMode("read");
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
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="create-section">
          <div className="post-title desc">내용</div>
          <textarea
            className="create-desc"
            type="text"
            name="desc"
            value={desc}
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

export default CreatePost;
