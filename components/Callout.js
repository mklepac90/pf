import React from "react";
import styled from "styled-components";

const StyledCallout = styled.aside`
  position: relative;
  padding: 24px 32px;
  font-size: 17px;
  margin-top: 30px;
  margin-bottom: 35px;
  border-left-width: 3px;
  border-left-style: solid;
  border-radius: 6px 6px 6px 3px;
  background: hsl(210deg 55% 92%);
  border-color: hsl(245deg 100% 60%);
  transition: background 350ms ease 0s;
`;

const Callout = ({ children }) => {
  return <StyledCallout>{children}</StyledCallout>;
};

export default Callout;
