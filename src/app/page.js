"use client";
import styled from "styled-components";
import mobileBackground from "/public/home/background-home-desktop.jpg";
import tabletBackground from "/public/home/background-home-tablet.jpg";
import desktopBackground from "/public/home/background-home-desktop-horizontal.jpg";
import { useState } from "react";
import { breakpoints } from "/utils/breakpoints";
import Link from "next/link";
import Background from "../components/Background.js";

const StyledHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 5rem;
  min-height: calc(100vh - 120px);

  @media ${breakpoints.tablet} and (orientation: landscape) {
    margin: 3rem 0;
  }

  @media ${breakpoints.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    width: 90vw;
    max-width: 1200px;
    min-height: 80vh;
    margin: 0;
  }
`;

const StyledTextWrapper = styled.article`
  text-align: center;
  margin: 0 24px;
  color: var(--light-main);
  max-width: 327px;

  @media ${breakpoints.tablet} {
    margin: 0 120px;
    max-width: 540px;
  }

  @media ${breakpoints.desktop} {
    text-align: left;
    margin: 0;
  }
`;

const StyledTagline = styled.p`
  font: var(--font-preset-6-small);
  letter-spacing: 2.4px;

  @media ${breakpoints.tablet} {
    font: var(--font-preset-5-big);
    letter-spacing: 4px;
  }
`;

const StyledHeading = styled.h1`
  font: var(--font-preset-1-small);
  color: var(--bright);
  margin: 20px 0 12px;

  @media ${breakpoints.tablet} {
    font: var(--font-preset-1-big);
  }
`;

const StyledParagraph = styled.p`
  font: var(--font-preset-9-small);

  @media ${breakpoints.tablet} {
    font: var(--font-preset-9-medium);
  }

  @media ${breakpoints.desktop} {
    font: var(--font-preset-9-big);
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 144px;
  height: 144px;
  border-radius: 50%;
  background-color: var(--bright);
  cursor: pointer;
  box-shadow: ${({ $hover }) =>
    $hover && "0 0 1px 50px rgba(255, 255, 255, 0.3)"};
  font: var(--font-preset-4-small);

  &:active {
    transform: scale(0.95);
  }

  text-decoration: none;
  color: black;

  @media ${breakpoints.tablet} {
    font: var(--font-preset-4-big);
    width: 272px;
    height: 272px;
  }
`;

export default function Home() {
  const [showButtonShadow, setShowButtonShadow] = useState(false);

  return (
    <>
      <Background
        mobileSrc={mobileBackground.src}
        tabletSrc={tabletBackground.src}
        desktopSrc={desktopBackground.src}
      />
      <StyledHeroWrapper>
        <StyledTextWrapper>
          <StyledTagline>SO, YOU WANT TO TRAVEL TO</StyledTagline>
          <StyledHeading>SPACE</StyledHeading>
          <StyledParagraph>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </StyledParagraph>
        </StyledTextWrapper>

        <StyledLink
          href={"/destination"}
          $hover={showButtonShadow}
          onPointerOver={(event) => {
            if (event.pointerType === "mouse") {
              setShowButtonShadow(true);
            }
          }}
          onPointerOut={(event) => {
            if (event.pointerType === "mouse") {
              setShowButtonShadow(false);
            }
          }}>
          EXPLORE
        </StyledLink>
      </StyledHeroWrapper>
    </>
  );
}
