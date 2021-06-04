import { createOvermind } from "overmind";
import { Provider } from "overmind-react";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";
import { initializeTracking } from "./services/TrackingProvider";
import { config } from "./store";

const store = createOvermind(config, { devtools: false });

ReactDOM.render(
  <Provider value={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

initializeTracking();
