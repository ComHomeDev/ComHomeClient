import React, { useState } from "react";
import "./Post.css";

const example =
  "컴퓨터공학과 수정이들에게 유익한 내용을 공유해주세요!\n\n--------------------------------------------------\n\n1. 활동한 대외활동 이름\n\n\n2. 활동 기간\n\n\n3. 활동 내용";

function CreatePost({ setMode }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState(example);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(title, desc);
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
