import React from "react";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/Theme";
import GlobalStyles from "./styles/globalStyles";
import Routes from "./pages/routes";


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
