import StyledComponentsRegistry from "../../lib/registry.js";
import GlobalStyles from "../styles.js";
import Header from "../../src/components/Header.js";

export const metadata = {
  title: "SpaceTourism | Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body>
        <Header />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
