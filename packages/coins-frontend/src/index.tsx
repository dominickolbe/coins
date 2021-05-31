import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import React from "react";
import ReactDOM from "react-dom";
import { initialize, pageview } from "react-ga";
import { App } from "./App";
import { GA_TRACKING_ID } from "./config";
import "./index.css";
import { config } from "./store";

const store = createOvermind(config, { devtools: false });

ReactDOM.render(
  <Provider value={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// TODO
if (process.env.NODE_ENV === "production") {
  if (GA_TRACKING_ID) {
    initialize(GA_TRACKING_ID);
    pageview("/");
  }
}
