import React, { useEffect } from "react";

import Menu from "../../components/FixedCpnt/Menu";
import Footer from "../../components/FixedCpnt/Footer";

import { getMypage } from "../../api/main";

function MyPage() {
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
      <div className="page-body">마이페이지</div>
      <Footer />
    </div>
  );
}

export default MyPage;
