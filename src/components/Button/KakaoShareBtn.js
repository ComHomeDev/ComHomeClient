import React, { useEffect } from "react";
import logo from "./Share_logo.png";
import { useParams } from "react-router-dom";

const KakaoShareBtn = ({ title, description }) => {
  let { id } = useParams();
  console.log(process.env.PUBLIC_URL + "/logo192.png");
  useEffect(() => {
    createKakaoButton();
  }, [title, description, id]);
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: title,
          description: description,
          imageUrl: "https://ifh.cc/g/Am7XQk.png", // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl:
                "https://comhome.dz32pkuapx7uy.amplifyapp.com/studentcouncil/student_council_notice/v1/11",
              webUrl:
                "https://comhome.dz32pkuapx7uy.amplifyapp.com/studentcouncil/student_council_notice/v1/11",
            },
          },
        ],
      });
    }
  };
  return (
    <div className="kakao-share-button">
      {/* Kakao share button */}
      <button
        id="kakao-link-btn"
        onClick={() => console.log("here")}
        style={{ backgroundColor: "transparent", border: "none" }}
      >
        <img src={logo} alt="kakao-share-icon" />
      </button>
    </div>
  );
};
export default KakaoShareBtn;
