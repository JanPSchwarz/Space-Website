"use client";

import styled from "styled-components";
import data from "../../../lib/data.json";
import Background from "../../components/Background.js";
import background from "/public/crew/background-crew-desktop.jpg";
import { useState } from "react";
import Image from "next/image";
import { breakpoints } from "../../../utils/breakpoints";
import AnimateMainContent from "@/components/AnimateMainContent.js";

const StyledMainContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 3rem;
  margin: 1.5rem 0;
  min-height: calc(100vh - 150px);
  width: 90vw;
  max-width: 800px;

  @media ${breakpoints.tablet} {
    justify-content: center;
    margin: 0;
  }

  @media ${breakpoints.desktop} {
    width: 90vw;
    align-items: center;
    max-width: 1200px;
  }
`;

const StyledParagraph = styled.p`
  text-align: center;
  font: var(--font-preset-6-small);
  color: var(--bright);
  letter-spacing: 2.7px;

  & > span {
    font: var(--font-preset-6-small);
    font-weight: bold;
    opacity: 25%;
    margin: 0 0.7rem 0 0;
  }

  @media ${breakpoints.tablet} {
    font: var(--font-preset-5-medium);
    text-align: left;
    width: 100%;

    & > span {
      font: var(--font-preset-5-medium);
      font-weight: bold;
    }
  }

  @media ${breakpoints.desktop} {
    font: var(--font-preset-5-big);

    & > span {
      font: var(--font-preset-5-big);
    }
  }
`;

const StyledMainSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

  & > * > h1,
  p:not(:first-child),
  img {
    transition: opacity 350ms;
    opacity: ${({ $isVisible }) => ($isVisible ? "100%" : "20%")};
  }

  @media ${breakpoints.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }
`;

const StyledSubSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media ${breakpoints.desktop} {
    text-align: left;
    justify-content: center;
    position: relative;
  }
`;

const StyledTagLine = styled.p`
  font: var(--font-preset-4-small);
  color: var(--bright);
  opacity: ${({ $isVisible }) => ($isVisible ? "50%" : "20%")};
  transition: opacity 350ms ease-in-out;

  @media ${breakpoints.tablet} {
    font: var(--font-preset-4-medium);
  }

  @media ${breakpoints.desktop} {
    width: 100%;
  }
`;

const StyledMainHeading = styled.h1`
  font: var(--font-preset-3-small);
  color: var(--bright);
  margin: 0.5rem 0 2rem;

  @media ${breakpoints.tablet} {
    font: var(--font-preset-3-medium);
  }

  @media ${breakpoints.desktop} {
    font: var(--font-preset-3-big);
    width: 100%;
    max-width: 515px;
  }
`;

const StyledDescription = styled.p`
  font: var(--font-preset-9-small);
  color: var(--light-main);
  min-height: 200px;
  max-width: 450px;
  text-wrap: pretty;

  @media ${breakpoints.tablet} {
    font: var(--font-preset-9-medium);
    max-width: 515px;
    min-height: 150px;
  }

  @media ${breakpoints.desktop} {
    font: var(--font-preset-9-big);
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;

  @media ${breakpoints.desktop} {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`;

const StyledButton = styled.button`
  border: none;
  padding: 5px;
  background-color: var(--bright);
  border-radius: 50%;
  width: 8px;
  height: 8px;
  opacity: ${({ $active }) => ($active ? "100%" : "20%")};
  transition: opacity 100ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: ${({ $active }) => !$active && "50%"};
  }

  @media ${breakpoints.desktop} {
    width: 15px;
    height: 15px;
  }
`;

const StyledImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  aspect-ratio: 1;

  mask-image: linear-gradient(180deg, white 85%, transparent 100%);
  -webkit-mask-image: linear-gradient(180deg, white 85%, transparent 100%);

  @media ${breakpoints.tablet} {
    max-width: 400px;
    max-height: 400px;
  }

  @media ${breakpoints.desktop} {
    min-height: 600px;
    min-width: 600px;
  }
`;

export default function Crew() {
  const [crewMember, setCrewMember] = useState("Douglas Hurley");
  const [isVisible, setIsVisable] = useState(true);

  const [touchStart, setTouchStart] = useState();
  const [touchEnd, setTouchEnd] = useState();

  const crewArray = data.crew.map((member) => member.name);
  const index = crewArray.findIndex((member) => member === crewMember);

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
        setCrewMember(
          crewArray[
            (((index - 1) % crewArray.length) + crewArray.length) %
              crewArray.length
          ]
        );
      }, 100);
    }
    if (isLeftSwipe) {
      handleAnimation();

      setTimeout(() => {
        setCrewMember(
          crewArray[
            (((index + 1) % crewArray.length) + crewArray.length) %
              crewArray.length
          ]
        );
      }, 100);
    }
  }

  function handleAnimation() {
    setIsVisable(false);

    setTimeout(() => {
      setIsVisable(true);
    }, 300);
  }

  return (
    <>
      <Background mobileSrc={background.src} />
      <AnimateMainContent>
        <title>SpaceTourism | Crew</title>
        <StyledMainContentWrapper
          onTouchStart={(event) => {
            onTouchStart(event);
          }}
          onTouchMove={(event) => {
            onTouchMove(event);
          }}
          onTouchEnd={() => {
            onTouchEnd();
          }}>
          <StyledParagraph>
            <span>03</span>MEET YOUR CREW
          </StyledParagraph>
          <StyledMainSectionWrapper $isVisible={isVisible}>
            {data.crew
              .filter(({ name }) => name === crewMember)
              .map(({ name, images, role, bio }) => (
                <>
                  <StyledSubSectionWrapper>
                    <StyledTagLine $isVisible={isVisible}>
                      {role.toUpperCase()}
                    </StyledTagLine>
                    <StyledMainHeading>{name.toUpperCase()}</StyledMainHeading>
                    <StyledDescription>{bio}</StyledDescription>

                    <StyledButtonWrapper>
                      {data.crew.map((crew, index) => (
                        <StyledButton
                          $active={crew.name === crewMember}
                          key={index}
                          onClick={() => {
                            if (crew.name !== crewMember) {
                              handleAnimation();

                              setTimeout(() => {
                                setCrewMember(`${crew.name}`);
                              }, 200);
                            }
                          }}></StyledButton>
                      ))}
                    </StyledButtonWrapper>
                  </StyledSubSectionWrapper>
                  <StyledImageWrapper>
                    <Image
                      src={images.png}
                      alt={`Photo of Crew Member ${name}`}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </StyledImageWrapper>
                </>
              ))}
          </StyledMainSectionWrapper>
        </StyledMainContentWrapper>
      </AnimateMainContent>
    </>
  );
}
