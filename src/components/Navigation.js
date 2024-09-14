"use client";

import styled, { css } from "styled-components";
import Burgermenu from "../../public/shared/icon-hamburger.svg";
import CloseIcon from "../../public/shared/icon-close.svg";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { breakpoints } from "../../utils/breakpoints";
import navigation from "../../lib/navigation.json";
import Link from "next/link";

const StyledBurgerMenu = styled(Burgermenu)`
  align-self: center;
`;

const StyledWrapper = styled.div`
  transform: ${({ $show }) => ($show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 500ms ease-in-out;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  z-index: 1;

  & > div {
    width: 60vw;
    min-height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    -webkit-backdrop-filter: blur(40px) contrast(105%);
    backdrop-filter: blur(40px) contrast(105%);
    transform: ${({ $show }) => ($show ? "translateX(0)" : "translateX(100%)")};
    transition: transform 500ms ease-in-out;
    z-index: 2;
  }

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

  @media ${breakpoints.tablet} {
    margin: 0;
    flex-direction: row;
    min-width: 60%;
    justify-content: flex-end;
    padding: 0 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }
`;

const StyledNavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: var(--bright);
  font: var(--font-preset-8-big);
  letter-spacing: 2.7px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ $active }) =>
      $active ? "none" : "inset -4px 0 0 0 rgba(255, 255, 255, 0.5)"};
  }

  & > span {
    font-weight: bold;
    margin-right: 0.5rem;
  }

  ${({ $active }) =>
    $active &&
    css`
      &:after {
        content: "";
        position: absolute;
        right: 0;
        height: 100%;
        width: 4px;
        background-color: white;
      }

      @media ${breakpoints.tablet} {
        &:after {
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
        }
      }
    `}

  @media ${breakpoints.tablet} {
    gap: 0.3rem;

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

  const currentPath = usePathname();

  useEffect(() => {
    function isMobile() {
      if (window.innerWidth >= 768) setisMobile(false);
    }

    isMobile();

    window.addEventListener("resize", isMobile);

    return () => {
      window.removeEventListener("resize", isMobile);
    };
  }, []);

  useEffect(() => {
    setShowNav(false);
  }, [currentPath]);

  function LinkList() {
    const links = navigation.map(({ name, number, path }) => (
      <StyledNavLink key={name} href={path} $active={currentPath === path}>
        <span>{number}</span>
        {name}
      </StyledNavLink>
    ));

    return links;
  }

  return (
    <>
      {isMobile ? (
        <>
          <StyledBurgerMenu
            onClick={() => {
              setShowNav(true);
            }}
          />
          <StyledWrapper
            onClick={() => {
              setShowNav(!showNav);
            }}
            $show={showNav}>
            <div
              onClick={(event) => {
                event.stopPropagation();
              }}>
              <StyledCloseIcon
                onClick={() => {
                  setShowNav(false);
                }}
              />
              <StyledNav>
                <LinkList />
              </StyledNav>
            </div>
          </StyledWrapper>
        </>
      ) : (
        <StyledNav>
          <LinkList />
        </StyledNav>
      )}
    </>
  );
}
