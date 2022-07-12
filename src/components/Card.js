import React from "react";
import styled from "styled-components";

function Card({ className, width, height, shadowColor, hover, children }) {
  return (
    <StyledCard
      className={className}
      // width={width}
      // height={height}
      shadowColor={shadowColor}
      hover={hover}
    >
      {children}
    </StyledCard>
  );
}

Card.defaultProps = {
  className: "card",
  hover: true,
  // width: "235px",
  // height: "140px",
  shadowColor: "rgb(var(--basic-blue))",
};

const StyledCard = styled.div`
  white-space: pre-line;
  // width: ${(props) => props.width || "235px"};
  // height: ${(props) => props.height || "140px"};
  background-color: #ffffff;
  box-shadow: 2px 2px 10px
    ${(props) => props.shadowColor || "rgb(var(--basic-blue))"};
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  &:hover {
    background-color: ${(props) =>
      props.hover ? "rgb(var(--blue))" : "white"};
  }
  // @media (max-width: 630px) {
  //   width: 235px;
  //   height: 100px;
  // }
`;

export default Card;
