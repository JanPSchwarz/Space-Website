"use client";

import styled, { css } from "styled-components";
import { breakpoints } from "/utils/breakpoints";

const StyledBackground = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${({ $mobileSrc }) => $mobileSrc && $mobileSrc});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  background-position: center;

  @media ${breakpoints.tablet} {
    ${({ $tabletSrc }) =>
      $tabletSrc &&
      css`
        background-image: url(${({ $tabletSrc }) => $tabletSrc && $tabletSrc});
      `}
  }

  @media ${breakpoints.desktop} {
    ${({ $desktopSrc }) =>
      $desktopSrc &&
      css`
        background-image: url(${({ $desktopSrc }) =>
          $desktopSrc && $desktopSrc});
      `}
  }
`;

export default function Background({ mobileSrc, tabletSrc, desktopSrc }) {
  return (
    <StyledBackground
      $mobileSrc={mobileSrc}
      $tabletSrc={tabletSrc}
      $desktopSrc={desktopSrc}
    />
  );
}
