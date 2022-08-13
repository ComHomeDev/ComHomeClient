import React from "react";
import styled from "styled-components";

function Card({ className, children }) {
  return <StyledCard className={className}>{children}</StyledCard>;
}

Card.defaultProps = {
  className: "card",
};

const StyledCard = styled.div`
  z-index: 20;
  position: relative;
  cursor: pointer;
  white-space: pre-line;
  background-color: white;
  box-shadow: 2px 2px 10px #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export default Card;
