import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { PirksTheme } from "./theme";
// import { ThemeProvider as SCThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import App from "./routes";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ToastContainer />
    {/* <ThemeProvider theme={PirksTheme}> */}
    <ThemeProvider theme={PirksTheme}>
      <CssBaseline>
        <Provider store={store}>
          <App />
        </Provider>
      </CssBaseline>
    </ThemeProvider>
    {/* </ThemeProvider> */}
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
