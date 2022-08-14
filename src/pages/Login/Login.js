import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function Login() {
  let { userid } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.setItem("userID", userid);
    navigate("/", { replace: true });
  }, [userid, navigate]);

  return <div>로그인중....</div>;
}

export default Login;
