import React from "react";
import Menu from "../../components/FixedCpnt/Menu";

import Footer from "../../components/FixedCpnt/Footer";

function MyPage() {
  return (
    <div className="page-container">
      <Menu />
      <div className="page-body">마이페이지</div>
      <Footer />
    </div>
  );
}

export default MyPage;
