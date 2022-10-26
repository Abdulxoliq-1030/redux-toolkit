import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
