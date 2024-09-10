import StyledComponentsRegistry from "../../lib/registry.js";
import GlobalStyles from "../styles.js";
import Header from "../../src/components/Header.js";

export const metadata = {
  title: "Frontend Mentor | Space tourism website",
  description: "space tourism",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
