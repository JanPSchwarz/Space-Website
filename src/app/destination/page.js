"use client";

import data from "../../../lib/data.json";
import styled, { css } from "styled-components";
import { useState } from "react";
import Image from "next/image";
import background from "/public/destination/background-destination-desktop.jpg";
import Background from "../../components/Background.js";
import { breakpoints } from "../../../utils/breakpoints";
import AnimateMainContent from "@/components/AnimateMainContent.js";

const StyledMainContentWrapper = styled.div`
  min-height: calc(100vh - 150px);
  width: 90vw;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;

  @media ${breakpoints.tablet} and (orientation: landscape) {
    margin: 3rem 0;
  }

  @media ${breakpoints.desktop} {
    max-width: 1700px;
    justify-content: space-around;
  }

  @media ${breakpoints.desktop} {
    margin: 1rem 0;
  }
`;

const StyledSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  text-align: center;

  & > * > h1,
  p:not(:first-child) {
    transition: opacity 350ms ease-in-out;
    opacity: ${({ $isVisible }) => ($isVisible ? "100%" : "20%")};
  }

  @media ${breakpoints.desktop} {
    flex-direction: row;
  }
`;

const StyledSubSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
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
    font: var(--text-preset-5-medium);
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

const StyledImageWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 2rem 0;

  @media ${breakpoints.tablet} {
    width: 300px;
    height: 300px;
  }

  @media ${breakpoints.desktop} {
    margin: 0;
    width: 480px;
    height: 480px;
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.desktop} {
    justify-content: left;
  }
`;

const StyledButton = styled.button`
  font: var(--font-preset-8-small);
  position: relative;
  letter-spacing: 2.7px;
  color: var(--light-main);
  border: none;
  background: none;
  padding: 10px 0;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ $active }) =>
      $active ? "none" : "inset 0px -2px 0px 0px rgba(255, 255, 255, 0.3)"};
  }

  ${({ $active }) =>
    $active &&
    css`
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: white;
      }
    `}

  @media ${breakpoints.tablet} {
    font: var(--font-preset-8-big);
  }

  @media ${breakpoints.desktop} {
    font: var(--font-preset-8-big);
  }
`;

const StyledMainHeading = styled.h1`
  font: var(--font-preset-2-small);
  color: var(--bright);
  margin: 1rem 0;

  @media ${breakpoints.tablet} {
    font: var(--font-preset-2-medium);
  }

  @media ${breakpoints.desktop} {
    font: var(--font-preset-2-big);
    text-align: left;
  }
`;

const StyledDescription = styled.p`
  font: var(--font-preset-9-small);
  color: var(--light-main);
  min-height: 135px;
  max-width: 450px;
  text-wrap: balance;

  @media ${breakpoints.tablet} {
    font: var(--font-preset-9-medium);
    max-width: 515px;
  }

  @media ${breakpoints.desktop} {
    font: var(--font-preset-9-big);
    text-align: left;
  }
`;

const StyledHorizontalLine = styled.hr`
  width: 100%;
  opacity: 20%;
  z-index: -1;
  margin: 1rem 0;
`;

const StyledFactsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  @media ${breakpoints.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media ${breakpoints.desktop} {
    justify-content: left;
    gap: 5rem;
  }
`;

const StyledFactBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media ${breakpoints.desktop} {
    text-align: left;
  }
`;

const StyledFactHeading = styled.p`
  font: var(--font-preset-7);
  color: var(--light-main);
  letter-spacing: 2px;
`;

const StyedFactText = styled.p`
  font: var(--font-preset-6-big);
  color: var(--bright);
`;

export default function Destinations() {
  const [destination, setDestination] = useState("Moon");
  const [isVisible, setIsVisible] = useState(true);

  const [touchStart, setTouchStart] = useState();
  const [touchEnd, setTouchEnd] = useState();

  const destinationArray = data.destinations.map(
    (destination) => destination.name
  );
  const index = destinationArray.findIndex(
    (currentDestination) => currentDestination === destination
  );

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
        setDestination(
          destinationArray[
            (((index - 1) % destinationArray.length) +
              destinationArray.length) %
              destinationArray.length
          ]
        );
      }, 100);
    }
    if (isLeftSwipe) {
      handleAnimation();

      setTimeout(() => {
        setDestination(
          destinationArray[
            (((index + 1) % destinationArray.length) +
              destinationArray.length) %
              destinationArray.length
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
      <title>SpaceTourism | Destination</title>
      <Background mobileSrc={background.src} />
      <AnimateMainContent>
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
          {data.destinations
            .filter(({ name }) => name === destination)
            .map(({ name, images, description, distance, travel }) => (
              <>
                <StyledParagraph>
                  <span>02</span> PICK YOUR DESTINATION
                </StyledParagraph>
                <StyledSectionWrapper $isVisible={isVisible}>
                  <StyledSubSectionWrapper>
                    <StyledImageWrapper>
                      <Image
                        src={images.png}
                        alt={`Photo of the ${name}`}
                        fill
                      />
                    </StyledImageWrapper>
                  </StyledSubSectionWrapper>
                  <StyledSubSectionWrapper>
                    <StyledButtonWrapper key={name}>
                      {data.destinations.map(({ name }) => (
                        <StyledButton
                          $active={name === destination}
                          key={name}
                          onClick={() => {
                            if (name !== destination) {
                              handleAnimation();

                              setTimeout(() => {
                                setDestination(`${name}`);
                              }, 200);
                            }
                          }}>
                          {name.toUpperCase()}
                        </StyledButton>
                      ))}
                    </StyledButtonWrapper>
                    <StyledMainHeading>{name.toUpperCase()}</StyledMainHeading>
                    <StyledDescription>{description}</StyledDescription>
                    <StyledHorizontalLine />
                    <StyledFactsWrapper>
                      <StyledFactBox>
                        <StyledFactHeading>AVG. DISTANCE</StyledFactHeading>
                        <StyedFactText>{distance}</StyedFactText>
                      </StyledFactBox>
                      <StyledFactBox>
                        <StyledFactHeading>EST. TRAVEL TIME</StyledFactHeading>
                        <StyedFactText>{travel}</StyedFactText>
                      </StyledFactBox>
                    </StyledFactsWrapper>
                  </StyledSubSectionWrapper>
                </StyledSectionWrapper>
              </>
            ))}
        </StyledMainContentWrapper>
      </AnimateMainContent>
    </>
  );
}
