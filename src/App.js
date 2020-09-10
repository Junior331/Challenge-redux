import React from "react";
import Theme from "./styles/Theme";
import Routes from "./pages/routes";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/globalStyles";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
