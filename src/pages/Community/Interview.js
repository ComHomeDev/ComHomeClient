import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Interview.css";
import { getGraduateList } from "../../api/main";
import { useQuery, useQueryClient } from "react-query";

const fetchData = async () => {
  const response = await getGraduateList();
  const data = await response.data_det;
  return data;
};

function Interview() {
  const queryClient = useQueryClient();
  const [chatRoom, setChatRoom] = useState([]);
  const navigate = useNavigate();
  const result = useQuery({
    queryKey: `chatrooms`,
    queryFn: () => fetchData(),
    retry: 0,
  });

  window.localStorage.setItem("userID", "109108379781588511454");

  useEffect(() => {
    const userid = window.localStorage.getItem("userID");
    if (userid === undefined && userid === null) {
      navigate("/", { replace: true });
    } else {
      if (result.status === "success") {
        const getData = queryClient.getQueryData("chatrooms");
        setChatRoom(getData);
      }
    }
  }, [result]);

  return (
    <div>
      {chatRoom.map((room) => {
        return (
          <Link
            to={`/chat/bubble/c/${room.no}`}
            key={room.no}
            state={{ data: room }}
            className="chat-room-link"
            onClick={() => window.confirm("채팅방에 들어가시겠습니까?")}
          >
            <div className="chatroom-box">
              {room.schoolId !== undefined
                ? room.schoolId.substring(2, 4)
                : "00"}
              학번
              <br /> {room.job !== undefined && room.job}&nbsp;선배님
              <div className="chatroom-desc">{room.content}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Interview;
