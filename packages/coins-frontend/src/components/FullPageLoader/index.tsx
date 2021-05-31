import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export const FullPageLoader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color="inherit" />
    </div>
  );
};
