import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import format from "date-fns/format";

import "./Post.css";
import { headerMenu } from "../variables";
import { updatePost } from "../../api/main";
import { parseISO } from "date-fns";

function UpdatePost() {
  const location = useLocation();
  let { board, sub } = useParams();
  console.log(location.state.data);
  const navigate = useNavigate();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [inputs, setInputs] = useState(location.state.data);
  const {
    title,
    content,
    team,
    award,
    keyword,
    stack,
    contestName,
    link_github,
    link_service,
    start_date,
    end_date,
  } = inputs;
  const [imgFile, setImgFile] = useState(null);
  const [files, setFiles] = useState(undefined);
  const userId = window.localStorage.getItem("userID");

  let info = headerMenu.find((menu) => menu.eng === board);
  let info2 = info.detail.find((detail) => detail.eng === sub);
  // let info2 = { name: "aa" };

  useEffect(() => {
    if (sub === "student_council_notice") {
      const password = window.prompt(
        "공지글을 수정하기 위하여 비밀번호를 입력해주세요.",
        ""
      );
      if (password !== process.env.REACT_APP_COUNCIL_KEY) {
        window.alert("비밀번호가 잘못되었습니다.");
        navigate(-1);
      }
    }
  }, []);

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const onFileChange = (form, event) => {
    if (form === "img") {
      setImgFile(event.target.files);
    } else {
      setFiles(event.target.files[0]);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("iduser", userId);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("award", award);
    formData.append("team", team);
    formData.append("keyword", keyword);
    formData.append("stack", stack);
    formData.append("contestName", contestName);
    formData.append("link_github", link_github);
    formData.append("link_service", link_service);
    formData.append("start_date", format(start_date, "yyyy-MM-dd"));
    formData.append("end_date", format(end_date, "yyyy-MM-dd"));
    formData.append("file", files);

    updatePost(sub, formData);

    if (sub === "exhibition") {
      navigate(`/${board}/${sub}`, { replace: true });
    } else {
      navigate(`/${board}/${sub}/v/${inputs.no}`, { replace: true });
    }
  };

  const openCalendar = (date) => {
    setCalendarOpen(date);
  };

  return (
    <div className="create-post-container">
      <div className="create-info">
        <span
          className="go-back"
          onClick={() => {
            if (
              window.confirm("작성 중인 글이 삭제됩니다.\n진행하시겠습니까?")
            ) {
              navigate(-1);
            }
          }}
        >
          &lt;&nbsp;&nbsp;
        </span>
        {info.name} - {info2.name} 글 수정하기
      </div>

      <form onSubmit={onSubmit} className="create-form">
        <div className="create-section">
          <div className="post-title">제목</div>
          <input
            required
            className="create-title"
            type="text"
            name="title"
            placeholder="제목을 작성해주세요."
            value={title}
            onChange={onChange}
          />
        </div>
        <div className="create-section">
          <div className="post-title desc">
            {sub !== "exhibition" ? "내용" : "작품 소개"}
          </div>
          <textarea
            required
            className={`create-desc ${
              sub === "exhibition" ? "exhibition" : ""
            }`}
            type="text"
            name="content"
            value={content}
            placeholder="내용을 작성해주세요."
            onChange={onChange}
          />
        </div>
        {(sub === "student_council_notice" || sub === "edu_contest") && (
          <>
            {sub === "student_council_notice" && (
              <div className="create-section">
                <div className="post-title start_date">시작일</div>
                <input
                  readOnly
                  className="create-start_date"
                  type="text"
                  name="start_date"
                  value={start_date}
                  placeholder="시작 날짜를 입력해주세요."
                  onClick={() => openCalendar("start")}
                />
              </div>
            )}

            <div className="create-section">
              <div className="post-title end_date">종료일</div>
              <input
                readOnly
                className="create-end_date"
                type="text"
                name="end_date"
                value={end_date}
                placeholder="종료 날짜를 입력해주세요."
                onClick={() => openCalendar("end")}
              />
            </div>

            {calendarOpen && (
              <Calendar
                showEvent={false}
                contactDate={
                  calendarOpen === "start"
                    ? parseISO(start_date)
                    : parseISO(end_date)
                }
                setDay={(date) => {
                  if (calendarOpen === "start") {
                    setInputs({
                      ...inputs,
                      start_date: format(date, "yyyy-MM-dd"),
                    });
                  } else if (calendarOpen === "end") {
                    setInputs({
                      ...inputs,
                      end_date: format(date, "yyyy-MM-dd"),
                    });
                  }
                  setCalendarOpen(false);
                }}
              />
            )}
          </>
        )}

        {sub === "exhibition" && (
          <>
            <div className="create-section">
              <div className="post-title team">팀 이름</div>
              <input
                className="create-team"
                type="text"
                name="team"
                value={team}
                placeholder="수상 내역을 작성해주세요."
                onChange={onChange}
              />
            </div>
            <div className="create-section">
              <div className="post-title keyword">키워드</div>
              <input
                className="create-keyword"
                type="text"
                name="keyword"
                value={keyword}
                placeholder="작품의 키워드를 띄어쓰기로 구분해 작성해주세요."
                onChange={onChange}
              />
            </div>
            <div className="create-section">
              <div className="post-title award">수상 내역</div>
              <input
                className="create-award"
                type="text"
                name="award"
                value={award}
                placeholder="수상 내역을 작성해주세요."
                onChange={onChange}
              />
            </div>

            <div className="create-section">
              <div className="post-title stack">
                사용 스택/프레임워크/라이브러리
              </div>
              <input
                className="create-stack"
                type="text"
                name="stack"
                value={stack}
                placeholder="내용을 작성해주세요."
                onChange={onChange}
              />
            </div>
            <div className="create-section">
              <div className="post-title contestName">참가한 공모전/대회</div>
              <input
                className="create-contestName"
                type="text"
                name="contestName"
                value={contestName}
                placeholder="내용을 작성해주세요."
                onChange={onChange}
              />
            </div>
            <div className="create-section">
              <div className="post-title link">깃허브 링크</div>
              <input
                className="create-link"
                type="text"
                name="link_github"
                value={link_github}
                placeholder="깃허브 링크를 작성해주세요."
                onChange={onChange}
              />
            </div>
            <div className="create-section">
              <div className="post-title link">서비스 링크</div>
              <input
                className="create-link"
                type="text"
                name="link_service"
                value={link_service}
                placeholder="서비스 링크을 작성해주세요."
                onChange={onChange}
              />
            </div>
          </>
        )}
        <div className="button-group">
          <input
            id="image-file"
            type="file"
            accept="image/*"
            onChange={(e) => onFileChange("img", e)}
          />

          <input
            id="upload-file"
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
