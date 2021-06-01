import ReactGA from "react-ga";
import { GA_TRACKING_ID } from "../../config";

export const Tracking = {
  initialize: () => {
    if (process.env.NODE_ENV === "production") {
      if (GA_TRACKING_ID) {
        ReactGA.initialize(GA_TRACKING_ID);
        ReactGA.pageview("/");
      }
    }
  },
};
