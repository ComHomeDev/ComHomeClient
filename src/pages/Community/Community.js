import React from "react";
import { useSearchParams, useParams, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import FastMenu from "../../components/Menu/FastMenu";
import "./Community.css";
import Footer from "../../components/ScrollPages/Footer";
import { headerMenu } from "../../components/variables";
import Card from "../../components/Card";

function Community() {
  const [searchParams, setSearchParams] = useSearchParams();
  let { sub } = useParams();

  return (
    <div className="community-container">
      <Header />
      <FastMenu />
      <div className="community-body">
        <div className="community-menu">
          {headerMenu[5].detail.map((data) => {
            return (
              <Card
                key={data.address}
                className={"small-menu-card"}
                background={
                  sub === data.eng ? "rgb(var(--basic-blue))" : "white"
                }
                padding={"10px"}
                hover={false}
              >
                <Link to={data.address}>{data.name}</Link>
              </Card>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Community;
