import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Post.css";
import { createPost } from "../../api/main";
import Calendar from "../Calendar/Calendar";

import { headerMenu } from "../variables";
import { format } from "date-fns";

const example1 =
  "컴퓨터공학과 수정이들에게 유익한 내용을 공유해주세요!\n\n--------------------------------------------------\n\n1. 활동한 대외활동 이름\n\n\n2. 활동 기간\n\n\n3. 활동 내용";
const example2 =
  "컴퓨터공학과 수정이들에게 유익한 내용을 공유해주세요!\n\n--------------------------------------------------\n\n1. 취업 분야\n\n\n2. 졸업 학점\n\n\n3. 취업을 위해 한 활동\n\n\n4.직장 정보";
const example3 =
  "컴퓨터공학과 수정이들에게 유익한 내용을 공유해주세요!\n\n--------------------------------------------------\n\n1. 취업 분야\n\n\n2. 졸업 학점\n\n\n3. 취업을 위해 한 활동\n\n\n4.직장 정보";
function CreatePost() {
  let { board, sub } = useParams();
  const navigate = useNavigate();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    team: "",
    award: "",
    keyword: "",
    stack: "",
    contestName: "",
    link_github: "",
    link_service: "",
    start_date: new Date(),
    end_date: new Date(),
  });
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
  // const userId = "111865899156782818991";

  useEffect(() => {
    switch (sub) {
      case "student_council_notice":
        const password = window.prompt(
          "공지글을 작성하기 위하여 비밀번호를 입력해주세요.",
          ""
        );
        if (password !== process.env.REACT_APP_COUNCIL_KEY) {
          window.alert("비밀번호가 잘못되었습니다.");
          navigate(-1);
        }
        break;
      case "extra_review":
        setInputs({ ...inputs, content: example1 });
        break;
      case "job_review":
        setInputs({ ...inputs, content: example2 });
        break;
      case "interview":
        setInputs({ ...inputs, content: example3 });
        break;
      default:
        setInputs({ ...inputs, content: "" });
        break;
    }
  }, [sub]);

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const onFileChange = (form, event) => {
    console.log(event.target.files[0]);
    if (form === "img") {
      console.log(event.target.files[0]);
      setImgFile(event.target.files[0]);
    } else {
      setFiles(event.target.files[0]);
    }
  };

  const openCalendar = (date) => {
    setCalendarOpen(date);
  };

  const onSubmit = async (e) => {
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
    if (sub !== "job_review") {
      formData.append("file", files);
      formData.append("img", imgFile);
    }
    // const data = { iduser: userId, title: title, content: content };
    // if (sub === "job_review") {
    //   createPost(sub, data);
    // } else createPost(sub, formData);

    // navigate(
    //   `/${board}/${sub}?page=${sub === "exhibition" ? "display" : "list"}`,
    //   { replace: true }
    // );
    navigate("/studentcouncil/student_council_notice/v1/11", { replace: true });
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
        {info.name} - {info2.name} 글쓰기
      </div>

      <form onSubmit={onSubmit} className="create-form">
        <div className="create-section">
          <div className="post-title">제목</div>
          <input
            required
            maxLength={45}
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
                  value={format(start_date, "yyyy-MM-dd")}
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
                value={format(end_date, "yyyy-MM-dd")}
                placeholder="종료 날짜를 입력해주세요."
                onClick={() => openCalendar("end")}
              />
            </div>

            {calendarOpen && (
              <Calendar
                showEvent={false}
                contactDate={calendarOpen === "start" ? start_date : end_date}
                setDay={(date) => {
                  if (calendarOpen === "start") {
                    setInputs({ ...inputs, start_date: date });
                  } else if (calendarOpen === "end") {
                    setInputs({ ...inputs, end_date: date });
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
          {sub !== "job_review" && (
            <>
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
            </>
          )}
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

export default CreatePost;
