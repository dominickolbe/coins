import { css } from "@emotion/css";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { APP_BUILD_TIME, APP_VERSION } from "../../config";

export const AppFooter = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="caption">
            <Box fontWeight="fontWeightBold">{`v${APP_VERSION}`}</Box>
          </Typography>
          <Typography
            variant="caption"
            className={css`
              margin-left: auto;
              opacity: 0.15;
            `}
          >
            <Box fontWeight="fontWeightMedium">{APP_BUILD_TIME}</Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
