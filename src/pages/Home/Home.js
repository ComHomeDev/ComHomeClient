import React from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card";

import { fastMenu } from "../../components/variables";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <Header />

      <div className="home-body">
        <Card hover={true}>카드카드 테스트</Card>
        <Card hover={false} shadowColor={"yellow"}>
          카드카드 테스트2
        </Card>
        <Card hover={false} shadowColor={"yellow"}>
          카드카드 테스트2
        </Card>
        <Card hover={false} shadowColor={"yellow"}>
          카드카드 테스트2
        </Card>
        <Card hover={false} shadowColor={"yellow"}>
          카드카드 테스트2
        </Card>
        <Card hover={false} shadowColor={"yellow"}>
          카드카드 테스트2
        </Card>
        <Card hover={false} shadowColor={"yellow"}>
          카드카드 테스트2
        </Card>
        <Card hover={false} shadowColor={"yellow"}>
          카드카드 테스트2
        </Card>
        <Card hover={false} shadowColor={"yellow"}>
          카드카드 테스트2
        </Card>
        <Card hover={false} shadowColor={"yellow"}>
          카드카드 테스트2
        </Card>
        <Card hover={false} shadowColor={"yellow"}>
          카드카드 테스트2
        </Card>
        <Card hover={false} shadowColor={"yellow"}>
          카드카드 테스트2
        </Card>
      </div>
      <div className="home-fastmenu">
        {fastMenu.map((data) => {
          return (
            <div
              className="home-fast"
              onClick={() => window.open(data.address)}
            >
              {data.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
