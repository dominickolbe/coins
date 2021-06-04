import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";
import { SentryClient } from "./services/Sentry";
import { TrackingClient } from "./services/Tracking";
import { config } from "./store";

SentryClient.initialize();
TrackingClient.initialize();

const store = createOvermind(config, { devtools: false });

ReactDOM.render(
  <Provider value={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
