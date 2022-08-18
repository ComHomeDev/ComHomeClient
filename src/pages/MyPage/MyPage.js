import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../../components/FixedCpnt/Menu";
import Footer from "../../components/FixedCpnt/Footer";
import "./MyPage.css";
import { getMypage } from "../../api/main";

function MyPage() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(0);
  //마이페이지 데이터 받아옴
  const getMypageData = async () => {
    const data = await getMypage();
    console.log(data);
  };

  useEffect(() => {
    getMypageData();
  }, []);

  return (
    <div className="page-container">
      <Menu />
      <div className="page-body mypage-body">
        <div className="myinfo-box">
          <div className="myinfo-label">내 정보</div>
          <div className="myinfo-value">조성윤/20학번</div>
        </div>
        <div className="myinfo-box" onClick={() => setToggle(1)}>
          <div className="myinfo-label">내가 쓴 글 v</div>
          {toggle === 1 &&
            myarticle.map((ar) => {
              return <div className="myinfo-value">{ar.title}</div>;
            })}
        </div>
        <div className="myinfo-box" onClick={() => setToggle(2)}>
          <div className="myinfo-label">내 스크랩 v</div>
          {toggle === 2 &&
            myscrap.map((ar) => {
              return <div className="myinfo-value">{ar.title}</div>;
            })}
        </div>
        <div className="myinfo-box">
          <div
            className="myinfo-label logoutbtn"
            onClick={() => {
              window.alert("로그아웃 되었습니다.");
              window.localStorage.removeItem("userID");
              navigate("/", { replace: true });
            }}
          >
            로그아웃
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MyPage;

const myarticle = [{ title: "[대외동아리] 멋쟁이 사자처럼 후기" }];
const myscrap = [
  { title: "교육실습 후기 및 수업자료 공모전 팀원 모집합니다!" },
  { title: "2022 Qualcomm IT Tour" },
  { title: "[NH콕서포터즈] 1차합격 / 면접 / 최종합격 후기" },
  { title: "우아한형제들_신입 개발자가 되기까지" },
  { title: "취업 5개월차 백엔드 개발자 후기" },
];
