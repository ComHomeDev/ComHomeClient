import React from "react";
import styled from "styled-components";

function Card({
  className,
  padding,
  background,
  shadowColor,
  hover,
  hoverColor,
  children,
}) {
  return (
    <StyledCard
      className={className}
      padding={padding}
      background={background}
      shadowColor={shadowColor}
      hover={hover}
      hoverColor={hoverColor}
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
  hoverColor: "rgb(var(--blue))",
};

const StyledCard = styled.div`
  z-index: 20;
  position: relative;
  cursor: pointer;
  white-space: pre-line;
  background-color: ${(props) => props.background || "#ffffff"};
  box-shadow: 2px 2px 10px
    ${(props) => props.shadowColor || "rgb(var(--basic-blue))"};
  border-radius: 10px;
  padding: ${(props) => props.padding || "20px"};
  margin: 10px;
  &:hover {
    background-color: ${(props) => (props.hover ? props.hoverColor : "white")};
  }
`;

export default Card;
