"use client";

import styled, { css } from "styled-components";
import Burgermenu from "../public/shared/icon-hamburger.svg";
import CloseIcon from "../public/shared/icon-close.svg";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { breakpoints } from "@/utils/breakpoints";

const StyledBurgerMenu = styled(Burgermenu)`
  align-self: center;
`;

const StyledWrapper = styled.div`
  width: 60vw;
  min-height: 100vh;
  height: ${({ $height }) => `${$height}px`};
  position: absolute;
  right: 0;
  top: 0;
  backdrop-filter: blur(40px) contrast(105%);
  transform: ${({ $show }) => ($show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 500ms ease-in-out;

  & > nav > a {
    display: block;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  right: 0;
  margin: 2rem;
`;

const StyledNav = styled.nav`
  margin: 8rem 0 0 2rem;
  color: var(--bright);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1.5rem;
  max-width: 800px;

  @media ${breakpoints.tablet} {
    margin: 0;
    flex-direction: row;
    width: 80%;
    justify-content: flex-end;
    padding: 0 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }
`;

const StyledNavLink = styled.a`
  position: relative;
  font: var(--font-preset-8-big);
  letter-spacing: 2.7px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: box-shadow 300ms;

  &:hover {
    box-shadow: ${({ $active }) =>
      $active
        ? "inset -4px 0 0 0 white"
        : "inset -4px 0 0 0 rgba(255, 255, 255, 0.5)"};
  }

  & > span {
    font-weight: bold;
  }

  ${({ $active }) =>
    $active &&
    css`
      box-shadow: inset -4px 0 0 0 white;
    `}

  @media ${breakpoints.tablet} {
    gap: 0.3rem;
    ${({ $active }) =>
      $active &&
      css`
        box-shadow: inset 0 -4px 0 0 white;
      `}

    &:hover {
      box-shadow: ${({ $active }) =>
        $active
          ? "inset 0 -4px 0 0 white"
          : "inset 0 -4px 0 0 rgba(255, 255, 255, 0.5)"};
    }
  }
`;

export default function Navigation() {
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setisMobile] = useState(true);
  const [documemtHeight, setDocumentHeight] = useState();

  useEffect(() => {
    function isMobile() {
      setDocumentHeight(document.documentElement.scrollHeight);
      if (window.innerWidth >= 768) setisMobile(false);
      else {
        setisMobile(true);
      }
    }

    isMobile();

    window.addEventListener("resize", isMobile);

    return () => {
      window.removeEventListener("resize", isMobile);
    };
  }, []);

  const path = usePathname();

  return (
    <>
      {isMobile ? (
        <>
          <StyledBurgerMenu
            onClick={() => {
              setShowNav(true);
            }}
          />
          <StyledWrapper $show={showNav} $height={documemtHeight}>
            <StyledCloseIcon
              onClick={() => {
                setShowNav(false);
              }}
            />
            <StyledNav>
              <StyledNavLink $active={path === "/"}>
                <span>00</span> HOME
              </StyledNavLink>
              <StyledNavLink>
                <span>01</span> DESTINATION
              </StyledNavLink>
              <StyledNavLink>
                <span>02</span> CREW
              </StyledNavLink>
              <StyledNavLink>
                <span>03</span> TECHNOLOGY
              </StyledNavLink>
            </StyledNav>
          </StyledWrapper>
        </>
      ) : (
        <StyledNav>
          <StyledNavLink $active={path === "/"}>
            <span>00</span> HOME
          </StyledNavLink>
          <StyledNavLink>
            <span>01</span> DESTINATION
          </StyledNavLink>
          <StyledNavLink>
            <span>02</span> CREW
          </StyledNavLink>
          <StyledNavLink>
            <span>03</span> TECHNOLOGY
          </StyledNavLink>
        </StyledNav>
      )}
    </>
  );
}
