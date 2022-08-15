import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import differenceInDays from "date-fns/differenceInDays";
import { IoIosAttach } from "react-icons/io";
import { BsBellFill, BsBellSlash } from "react-icons/bs";

import "./Post.css";
import Card from "../Card";
import Pagination from "../Pagination/Pagination";
import {
  getPostList,
  getSubscription,
  postBoardSubscription,
  postBoardUnsubscription,
} from "../../api/main";

function PostList({ data }) {
  let { sub } = useParams();

  const [posts, setPosts] = useState(data);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  // const userId = window.localStorage.getItem("userID");
  const [loading, setLoading] = useState(true);
  const [pushSupport, setPushSupport] = useState(false);
  const [buttonText, setButtonText] = useState("알림 설정");
  const [userBoardSubscribe, setUserBoardSubscribe] = useState();
  const userId = "aaaaaaaa";
  let diff = (end) =>
    differenceInDays(parseISO(end), new Date()) <= 0
      ? false
      : differenceInDays(parseISO(end), new Date()) <= 3
      ? "around"
      : true;

  useEffect(() => {
    if (data !== null && data !== undefined) {
      setPosts(data);
      setLoading(false);
    }
  }, [sub, data]);

  //처음 랜딩되면 구독 정보 가져옴
  useEffect(() => {
    if ("serviceWorker" in navigator && userId !== null) {
      navigator.serviceWorker.ready.then((registration) => {
        if (registration.pushManager) {
          setPushSupport(true);
          registration.pushManager.getSubscription().then((subscription) => {
            Notification.requestPermission().then((permission) => {
              console.log("push permission : ", permission);
              if (Notification.permission !== "granted") {
                return;
              } else {
                getSubArr();
              }
            });
          });
        }
      });
    }
  }, [sub]);

  const getSubArr = async () => {
    const response = await getSubscription(userId);
    const data = await response.data[0];
    console.log(data);
    switch (sub) {
      case "cs_notice":
        setUserBoardSubscribe(data.cs_notice);
        break;
      case "recruit_internship":
        setUserBoardSubscribe(data.recruit_intern);
        break;
      case "edu_contest":
        setUserBoardSubscribe(data.edu_contest);
        break;
      case "student_council_notice":
        setUserBoardSubscribe(data.student_council_notice);
        break;
      case "extra_review":
        setUserBoardSubscribe(data.extra_review);
        break;
      case "job_review":
        setUserBoardSubscribe(data.job_review);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    //권한 여부
    if (Notification.permission === "denied") {
      setButtonText("알림 차단됨");
      setUserBoardSubscribe(null);
      return;
    }
    //알림 지원/로그인 여부
    if (!pushSupport) {
      setButtonText("알림 불가");
      return;
    }
    //게시판 구독 여부
    if (userBoardSubscribe) {
      setButtonText("알림 설정됨");
    } else {
      setButtonText("알림 해제됨");
    }
  }, [Notification, userBoardSubscribe, pushSupport]);

  const onSubscriptBtnHandler = (pushSupport) => {
    if (!pushSupport) {
      return;
    } else {
      Notification.requestPermission().then((permission) => {
        console.log("push permission : ", permission);
        if (Notification.permission !== "granted") {
          window.alert("알림 권한을 설정해주세요!");
          return;
        } else {
          let type = returnType(sub);

          updateBoardSubscription(type, userBoardSubscribe);
        }
      });
    }
  };

  const returnType = (sub) => {
    let type = "";
    switch (sub) {
      case "cs_notice":
        type = "cs_notice";
        break;
      case "recruit_internship":
        type = "recruit_intern";
        break;
      case "edu_contest":
        type = "edu_contest";
        break;
      case "student_council_notice":
        type = "student_council_notice";
        break;
      case "extra_review":
        type = "extra_review";
        break;
      case "job_review":
        type = "job_review";
        break;
      default:
        break;
    }
    return type;
  };

  const updateBoardSubscription = (type, isSubscribe) => {
    if (isSubscribe) {
      postBoardUnsubscription(userId, type);
      setUserBoardSubscribe(0);
    } else {
      postBoardSubscription(userId, type);
      setUserBoardSubscribe(1);
    }
  };

  if (loading) return <div className="loading">로딩중...</div>;

  return (
    <div className="read-post-container">
      <div className="postlist-button-container">
        {sub !== "interview" && (
          <button
            className={`subscribe-button ${userBoardSubscribe ? "on" : "off"}`}
            onClick={onSubscriptBtnHandler}
          >
            {userId !== null && userBoardSubscribe === 1 ? (
              <BsBellFill
                className={`subscribe-button getsub`}
                onClick={onSubscriptBtnHandler}
              />
            ) : (
              <BsBellSlash
                className={`subscribe-button unsub`}
                onClick={onSubscriptBtnHandler}
              />
            )}
            &nbsp;{buttonText}
          </button>
        )}
        <Link to="./new" className="list-create-button">
          글 작성하기
        </Link>
      </div>

      <div className="post-list">
        {posts !== undefined &&
          posts.slice(offset, offset + limit).map((data, index) => {
            return (
              <div key={data.no} value={index}>
                <Link to={`./v/${data.no}`}>
                  <Card
                    key={data.title}
                    value={index}
                    className="post-list-cards"
                  >
                    <div className="post-list-column">
                      <div className="post-list-title" value={index}>
                        {data.title}
                        {sub === "edu_contest" &&
                          data.end_date !== undefined && (
                            <span
                              className={`deadline-tag ${
                                diff(data.end_date) === false
                                  ? "gray"
                                  : diff(data.end_date) === "around"
                                  ? "yellow"
                                  : "green"
                              }`}
                            >
                              {diff(data.end_date) === false
                                ? "마감됨"
                                : diff(data.end_date) === "around"
                                ? "마감임박"
                                : "모집중"}
                            </span>
                          )}
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

                    {data.upload_time !== undefined && (
                      <div className="post-list-date" value={index}>
                        {format(
                          parseISO(data.upload_time.slice(0, 10)),
                          "yyyy-MM-dd"
                        )}
                      </div>
                    )}
                  </Card>
                </Link>
              </div>
            );
          })}
      </div>
      <Pagination
        total={posts !== undefined ? posts.length : 1}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default PostList;
