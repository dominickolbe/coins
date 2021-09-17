import { css } from "@emotion/css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { APP_BUILD_TIME, APP_VERSION } from "../../config";
import { useStyles } from "../../theme";

export const AppFooter = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="caption" className={classes.fontBold}>
            {`v${APP_VERSION}`}
          </Typography>
          <Typography
            variant="caption"
            className={css`
              margin-left: auto;
              opacity: 0.15;
            `}
          >
            {APP_BUILD_TIME}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
