import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { AuthProvider } from "Context/AuthContext";
import { ThemeProvider } from "Context/themeContext";

import App from "./App";
import { store } from "./reduxFolder";

import "./index.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </Provider>
);
