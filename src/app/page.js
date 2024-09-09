"use client";
import styled from "styled-components";
import mobileBackground from "../public/home/background-home-desktop.jpg";
import tabletBackground from "../public/home/background-home-tablet.jpg";
import laptopBackground from "../public/home/background-home-desktop-horizontal.jpg";
import { useState } from "react";
import { breakpoints } from "@/utils/breakpoints";

const Background = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-image: url(${mobileBackground.src});
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
  background-position: center;

  @media ${breakpoints.tablet} {
    background-image: url(${tabletBackground.src});
  }

  @media ${breakpoints.desktop} {
    background-image: url(${laptopBackground.src});
  }
`;

const StyledHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 5rem;
  min-height: calc(100vh - 120px);

  @media ${breakpoints.tablet} {
    gap: 7rem;
  }

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

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  font: var(--font-preset-4-small);
  width: 144px;
  height: 144px;
  border-radius: 50%;
  border: none;
  color: black;
  background-color: var(--bright);
  cursor: pointer;
  box-shadow: ${({ $hover }) =>
    $hover && "0 0 1px 50px rgba(255, 255, 255, 0.3)"};

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
      <Background />
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
        <StyledButtonWrapper>
          <StyledButton
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
          </StyledButton>
        </StyledButtonWrapper>
      </StyledHeroWrapper>
    </>
  );
}
