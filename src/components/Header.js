"use client";

import styled from "styled-components";
import Logo from "../public/shared/logo.svg";

import Navigation from "./Navigation.js";
import { breakpoints } from "@/utils/breakpoints";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  top: 0;
  min-height: 80px;
  padding: 0 1.5rem;

  @media ${breakpoints.tablet} {
    padding: 0;
    min-height: 96px;
  }

  @media ${breakpoints.desktop} {
    top: 50px;

    &:after {
      content: "";
      position: absolute;
      bottom: 50%;
      left: 100px;
      width: 50vw;
      height: 1px;
      background-color: #ffffff70;
    }
  }
`;

const StyledLogo = styled(Logo)`
  transform: scale(0.8);
  align-self: center;

  @media ${breakpoints.tablet} {
    transform: none;
    margin: 0 1.5rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo />
      <Navigation />
    </StyledHeader>
  );
}
