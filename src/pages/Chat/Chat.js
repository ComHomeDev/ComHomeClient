import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { useLocation, useNavigate } from "react-router-dom";
import { getChatList } from "../../api/main";
import { useQuery, useQueryClient } from "react-query";
import "./Chat.css";
import { FiSend } from "react-icons/fi";

// const socket = io.connect("http://192.168.122.53:5000");

const fetchData = async (roomid) => {
  const response = await getChatList(roomid);
  const data = await response.data_det;
  return data;
};

function Chat() {
  // const navigate = useNavigate();
  // const messagesEndRef = useRef(null);

  // const queryClient = useQueryClient();
  // const [chatMessage, setChatMessage] = useState("");
  // const [chat, setChat] = useState([]);
  // const [isFetch, setIsFetch] = useState(0);
  // const location = useLocation();
  // const roomData = location.state.data;
  // const roomnum = "Room_" + roomData.no;

  // const sender = window.localStorage.getItem("userID");
  // // const sender = "109108379781588511454";

  // const result = useQuery({
  //   queryKey: `${roomnum}`,
  //   queryFn: () => fetchData(roomData.no),
  //   retry: 0,
  // });

  // useEffect(() => {
  //   scrollToBottom();
  //   socket.on("noti_room_message", ({ sender, msg }) => {
  //     console.log("here");
  //     const data = {
  //       chatid: 0,
  //       roomid: roomnum,
  //       senderid: sender,
  //       message: msg,
  //       date: new Date(),
  //     };
  //     setChat((chat) => [...chat, data]);
  //   });
  //   return () => socket.disconnect();
  // }, []);

  // useEffect(() => {
  //   if (result.status === "success" && isFetch === 0) {
  //     const getData = queryClient.getQueryData(roomnum);
  //     setChat(getData);
  //     setIsFetch(1);
  //   }
  // }, [result]);

  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // const onTextChange = (e) => {
  //   setChatMessage(e.target.value);
  // };

  // const onMessageSubmit = (e) => {
  //   e.preventDefault();
  //   // const data = {
  //   //   chatid: 0,
  //   //   roomid: roomnum,
  //   //   senderid: sender,
  //   //   message: chatMessage,
  //   //   date: new Date(),
  //   // };
  //   // setChat((chat) => [...chat, data]);
  //   socket.emit("req_room_message", roomnum, sender, chatMessage);
  //   setChatMessage("");
  // };

  // const renderChat = () => {
  //   if (sender == roomData.graduateId) {
  //     return chat.map(({ senderid, message }, index) => (
  //       <div
  //         key={index}
  //         className={`chatmessage-box ${
  //           senderid === sender ? "mine" : "yours"
  //         }`}
  //       >
  //         <div>
  //           {senderid === sender ? "나" : "후배님"}:<span>{message}</span>
  //         </div>
  //       </div>
  //     ));
  //   } else
  //     return chat
  //       .filter(
  //         (chats) =>
  //           chats.senderid === sender || chats.senderid === roomData.graduateId
  //       )
  //       .map(({ senderid, message }, index) => (
  //         <div
  //           key={index}
  //           className={`chatmessage-box ${
  //             senderid === sender ? "mine" : "yours"
  //           }`}
  //         >
  //           <div>
  //             {senderid === sender
  //               ? "나 : "
  //               : senderid === roomData.graduateId
  //               ? "선배님 : "
  //               : ""}
  //             <span>{message}</span>
  //           </div>
  //         </div>
  //       ));
  // };

  return (
    <div className="chat-container">
      {/* <div className="chat-header">
        <div className="chat-back" onClick={() => navigate(-1)}>
          &lt;
        </div>
        <div className="chat-info">
          <div className="chat-owner">
            {roomData.schoolId !== undefined
              ? roomData.schoolId.substring(2, 4)
              : "00"}
            학번 선배님
          </div>
          <div className="chat-job">
            {roomData.job !== undefined && roomData.job}
          </div>
        </div>
      </div>
      <div className="render-chat" ref={messagesEndRef}>
        {renderChat()}
      </div>
      <form onSubmit={onMessageSubmit} className="chat-input-box">
        <div>
          <input
            className="chat-textinput"
            name="message"
            onChange={(e) => onTextChange(e)}
            value={chatMessage}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>

        <FiSend className="chat-sendBtn" onClick={onMessageSubmit} />
      </form> */}
    </div>
  );
}

export default Chat;
