import React from "react";
import styled from "styled-components";

function Card({
  className,
  padding,
  background,
  shadowColor,
  hover,
  children,
}) {
  return (
    <StyledCard
      className={className}
      padding={padding}
      background={background}
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
  background: "#ffffff",
  shadowColor: "rgb(var(--basic-blue))",
  padding: "20px",
};

const StyledCard = styled.div`
  white-space: pre-line;
  background-color: ${(props) => props.background || "#ffffff"};
  box-shadow: 2px 2px 10px
    ${(props) => props.shadowColor || "rgb(var(--basic-blue))"};
  border-radius: 10px;
  padding: ${(props) => props.padding || "20px"};
  margin: 10px;
  &:hover {
    background-color: ${(props) =>
      props.hover ? "rgb(var(--blue))" : "white"};
  }
`;

export default Card;
