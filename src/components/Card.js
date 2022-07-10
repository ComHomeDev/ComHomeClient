import React from "react";
import styled from "styled-components";

function Card({ width, height, shadowColor, hover, children }) {
  return (
    <StyledCard
      width={width}
      height={height}
      shadowColor={shadowColor}
      hover={hover}
    >
      {children}
    </StyledCard>
  );
}

Card.defaultProps = {
  hover: true,
  width: "275px",
  height: "180px",
  shadowColor: "rgb(var(--basic-blue))",
};

const StyledCard = styled.div`
  width: ${(props) => props.width || "275px"};
  height: ${(props) => props.height || "180px"};
  background-color: "white";
  box-shadow: 2px 2px 10px
    ${(props) => props.shadowColor || "rgb(var(--basic-blue))"};
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  &:hover {
    background-color: ${(props) =>
      props.hover ? "rgb(var(--blue))" : "white"};
  }
  // @media (max-width: 658px) {
  //   width: 200px;
  //   height: 100px;
  // }
`;

export default Card;
