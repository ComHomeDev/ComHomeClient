import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";
import differenceInDays from "date-fns/differenceInDays";
import { IoIosAttach } from "react-icons/io";

import "./Post.css";
import Card from "../Card";
import Pagination from "../Pagination/Pagination";

function PostList({ data }) {
  let { sub } = useParams();
  const [posts, setPosts] = useState(data);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  let diff = (end) =>
    differenceInDays(parseISO(end), new Date()) <= 0
      ? false
      : differenceInDays(parseISO(end), new Date()) <= 3
      ? "around"
      : true;

  useEffect(() => {
    setPosts(data);
  }, [data]);

  return (
    <div className="read-post-container">
      <Link to="./new" className="list-create-button">
        글 작성하기
      </Link>
      <div className="post-list">
        {posts.slice(offset, offset + limit).map((data, index) => {
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
                      {sub === "edu_contest" && data.end_date !== undefined && (
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
        total={posts.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default PostList;
