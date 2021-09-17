import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { AppFooter } from "./components/AppFooter";
import { FullPageLoader } from "./components/FullPageLoader";
import { ScrollToTop } from "./components/ScrollToTop";
import { useStore } from "./store";
import { theme, useStyles } from "./theme";

const Coins = lazy(() => import("./pages/Coins"));
const Status = lazy(() => import("./pages/Status"));

export const App = () => {
  const classes = useStyles();
  const {
    state: {
      app: { isInitialized, error },
    },
  } = useStore();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <main className={classes.content}>
          <Suspense fallback={<FullPageLoader />}>
            {isInitialized === false ? (
              <FullPageLoader />
            ) : error !== null ? (
              <Status />
            ) : (
              <Switch>
                <Route path="/coins" exact>
                  <Coins />
                </Route>
                <Route path="*">
                  <Redirect to="/coins" />
                </Route>
              </Switch>
            )}
          </Suspense>
        </main>
        <footer>
          <AppFooter />
        </footer>
      </Router>
    </ThemeProvider>
  );
};
