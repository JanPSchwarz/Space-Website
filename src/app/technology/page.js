"use client";

import styled from "styled-components";
import data from "../../../lib/data.json";
import Background from "../../components/Background.js";
import background from "/public/technology/background-technology-desktop.jpg";
import { useState } from "react";
import Image from "next/image";
import { breakpoints } from "../../../utils/breakpoints";

const StyledMainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 150px);
  margin-bottom: 2rem;

  & > * > h1,
  p:not(:first-child),
  img {
    transition: opacity 350ms;
    opacity: ${({ $isVisible }) => ($isVisible ? "100%" : "20%")};
  }

  @media ${breakpoints.tablet} {
    min-height: calc(100vh - 250px);
  }

  @media ${breakpoints.desktop} {
    flex-direction: row-reverse;
    width: 100vw;
    max-width: 1500px;
    gap: 4rem;
    margin: 0;
  }
`;

const StyledParagraph = styled.p`
  font: var(--font-preset-6-small);
  letter-spacing: 2.7px;
  color: var(--bright);
  margin: 1.5rem 0;
  max-width: 600px;

  & > span {
    font-weight: bold;
    opacity: 50%;
  }

  @media ${breakpoints.tablet} {
    font: var(--font-preset-5-medium);
    margin: 2.5rem 0;
    text-align: left;
    width: 100%;
  }

  @media ${breakpoints.desktop} {
    font: var(--font-preset-5-big);
    max-width: 1200px;
  }
`;

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100vw;
  max-width: 768px;
  max-height: 300px;
  aspect-ratio: 1;
  margin: 2rem 0;

  @media ${breakpoints.tablet} {
    max-height: 370px;
  }

  @media ${breakpoints.desktop} {
    max-height: 600px;
    max-width: 600px;
  }
`;

const StyledSubContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoints.desktop} {
    flex-direction: row;
    align-items: stretch;
    height: 300px;
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  margin: 2rem 0;

  @media ${breakpoints.desktop} {
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
`;

const StyledButton = styled.button`
  font: var(--font-preset-4-small);
  color: ${({ $isActive }) =>
    $isActive ? "var(--dark-main)" : "var(--bright)"};
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  width: 40px;
  height: 40px;
  background-color: ${({ $isActive }) =>
    $isActive ? "var(--bright)" : "transparent"};
  cursor: pointer;
  transition: border-color 200ms;

  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
  }

  @media ${breakpoints.tablet} {
    font: var(--font-preset-4-medium);
    width: 56px;
    height: 56px;
  }
  @media ${breakpoints.desktop} {
    font: var(--font-preset-4-big);
    width: 80px;
    height: 80px;
  }
`;

const StyledTextWrapper = styled.div`
  max-width: 330px;
  text-align: center;

  @media ${breakpoints.tablet} {
    max-width: 512px;
  }
  @media ${breakpoints.desktop} {
    max-width: 650px;
  }
`;

const StyledTagLine = styled.p`
  font: var(--font-preset-4-small);
  color: var(--bright);
  opacity: 50%;

  @media ${breakpoints.tablet} {
    font: var(--font-preset-4-medium);
  }

  @media ${breakpoints.desktop} {
    font: var(--font-preset-4-big);
  }
`;

const StyledHeading = styled.h1`
  font: var(--font-preset-3-small);
  color: var(--bright);
  margin: 0.5rem 0 1.5rem;

  @media ${breakpoints.tablet} {
    font: var(--font-preset-3-medium);
  }

  @media ${breakpoints.desktop} {
    font: var(--font-preset-3-big);
  }
`;

const StyledDescription = styled.p`
  font: var(--font-preset-9-small);
  color: var(--light-main);
  text-wrap: pretty;

  @media ${breakpoints.tablet} {
    font: var(--font-preset-9-medium);
  }

  @media ${breakpoints.desktop} {
    font: var(--font-preset-9-big);
  }
`;

export default function Technology() {
  const [technology, setTechnology] = useState("Launch vehicle");
  const [isVisible, setIsVisible] = useState(true);

  const [touchStart, setTouchStart] = useState();
  const [touchEnd, setTouchEnd] = useState();

  const techArray = data.technology.map((tech) => tech.name);
  const index = techArray.findIndex((tech) => tech === technology);

  function onTouchStart(event) {
    setTouchEnd(null);
    setTouchStart(event.targetTouches[0].clientX);
  }

  function onTouchMove(event) {
    setTouchEnd(event.targetTouches[0].clientX);
  }

  function onTouchEnd() {
    const desiredSwipeDistance = 100;
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > desiredSwipeDistance;
    const isRightSwipe = distance < -desiredSwipeDistance;
    if (isRightSwipe) {
      handleAnimation();

      setTimeout(() => {
        setTechnology(
          techArray[
            (((index - 1) % techArray.length) + techArray.length) %
              techArray.length
          ]
        );
      }, 100);
    }
    if (isLeftSwipe) {
      handleAnimation();

      setTimeout(() => {
        setTechnology(
          techArray[
            (((index + 1) % techArray.length) + techArray.length) %
              techArray.length
          ]
        );
      }, 100);
    }
  }

  function handleAnimation() {
    setIsVisible(false);

    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }

  return (
    <>
      <title>SpaceTourism | Technology</title>
      <Background mobileSrc={background.src} />
      <StyledParagraph>
        <span>04</span> SPACE LAUNCH 101
      </StyledParagraph>
      <StyledMainContentWrapper
        onTouchStart={(event) => {
          onTouchStart(event);
        }}
        onTouchMove={(event) => {
          onTouchMove(event);
        }}
        onTouchEnd={() => {
          onTouchEnd();
        }}
        $isVisible={isVisible}>
        {data.technology
          .filter(({ name }) => name === technology)
          .map(({ name, images, description }) => (
            <>
              <StyledImageWrapper>
                <Image
                  alt={`Photo of ${name}`}
                  src={images.portrait}
                  fill
                  style={{ objectFit: "cover", objectPosition: "100% 65%" }}
                />
              </StyledImageWrapper>
              <StyledSubContentWrapper>
                <StyledButtonWrapper>
                  {data.technology.map((tech, index) => (
                    <StyledButton
                      $isActive={tech.name === technology}
                      key={index}
                      onClick={() => {
                        if (tech.name !== technology) {
                          handleAnimation();
                          setTimeout(() => {
                            setTechnology(tech.name);
                          }, 200);
                        }
                      }}>
                      {index + 1}
                    </StyledButton>
                  ))}
                </StyledButtonWrapper>
                <StyledTextWrapper>
                  <StyledTagLine>THE TERMINOLOGY...</StyledTagLine>
                  <StyledHeading>{name.toUpperCase()}</StyledHeading>
                  <StyledDescription>{description}</StyledDescription>
                </StyledTextWrapper>
              </StyledSubContentWrapper>
            </>
          ))}
      </StyledMainContentWrapper>
    </>
  );
}
