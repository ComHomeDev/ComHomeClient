import React, { useEffect } from "react";
import { socket, SocketContext } from "../../service/socket";

function Chat() {
  const [nickname, setNickname] = useState("성지");
  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.emit(SOCKET_EVENT.JOIN_ROOM, { nickname }); // JOIN_ROOM event type과 nickname data를 서버에 전송한다.
  }, [nickname]);
  return <SocketContext.Provider value={socket}>App</SocketContext.Provider>;
}

export default Chat;
