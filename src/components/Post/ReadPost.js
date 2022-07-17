import React from "react";

function ReadPost({ setMode }) {
  return (
    <div>
      <button
        className="new-post"
        onClick={() => {
          setMode("create");
        }}
      >
        글 작성하기
      </button>
    </div>
  );
}

export default ReadPost;
