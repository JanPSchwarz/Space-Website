"use client";
import { createGlobalStyle } from "styled-components";
import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";

const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });
const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "400" });
const barlow = Barlow({ subsets: ["latin"], weight: "400" });

const GlobalStyles = createGlobalStyle`
:root {
  //colors
   --dark-main: #0B0D17;
   --light-main: #D0D6F9;
   --bright: #ffffff;
  //fonts
   --font-preset-1-small: 80px ${bellefair.style.fontFamily};
   --font-preset-1-big: 144px ${bellefair.style.fontFamily};

   --font-preset-2-small: 56px ${bellefair.style.fontFamily};
   --font-preset-2-medium: 80px ${bellefair.style.fontFamily};
   --font-preset-2-big: 96px ${bellefair.style.fontFamily};

   --font-preset-3-small: 24px ${bellefair.style.fontFamily};
   --font-preset-3-medium: 40px ${bellefair.style.fontFamily};
   --font-preset-3-big: 56px ${bellefair.style.fontFamily};

   --font-preset-4-small: 18px ${bellefair.style.fontFamily};
   --font-preset-4-medium: 24px ${bellefair.style.fontFamily};
   --font-preset-4-big: 32px ${bellefair.style.fontFamily};

   --font-preset-5-medium: 20px ${barlowCondensed.style.fontFamily};
   --font-preset-5-big: 28px ${barlowCondensed.style.fontFamily};

   --font-preset-6-small: 16px ${barlowCondensed.style.fontFamily};
   --font-preset-6-big: 28px ${bellefair.style.fontFamily};

   --font-preset-7: 14px ${barlowCondensed.style.fontFamily};

   --font-preset-8-small: 14px ${barlowCondensed.style.fontFamily};
   --font-preset-8-big: 16px ${barlowCondensed.style.fontFamily};

   --font-preset-9-small: 15px/180% ${barlow.style.fontFamily};
   --font-preset-9-medium: 16px/180% ${barlow.style.fontFamily};
   --font-preset-9-big: 18px/180% ${barlow.style.fontFamily};
    
}

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html {
height: auto;
overflow-x: hidden;
}

body {
    background-color: #323232;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}
`;

export default GlobalStyles;
