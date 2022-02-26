import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import storeCreator from "./Store";
import { createGlobalStyle } from "styled-components";

export const AppRoot = createGlobalStyle`
    * body {
    font-family: Din Pro !important;
    // CSS you want global. 
  }  
`;

const store = storeCreator();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoot />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
