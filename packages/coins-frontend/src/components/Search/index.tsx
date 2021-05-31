import { css } from "@emotion/css";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

export const Search = (props: {
  query: string;
  onChange: (value: string) => void;
}) => {
  const { query, onChange } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper
          className={css`
            display: flex;
            align-items: center;
            padding: 2px 4px;
          `}
        >
          <IconButton
            className={css`
              padding: 10px !important;
            `}
            disabled
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            className={css`
              flex: 1;
              margin-left: 8px;
              font-weight: 600;
              font-size: 14px;
            `}
            placeholder="Search"
            value={query}
            onChange={(e) => onChange(e.target.value)}
            autoComplete="on"
            autoFocus
          />
          <Divider
            className={css`
              height: 28px;
              margin: 4px;
            `}
            orientation="vertical"
          />
          <IconButton
            className={css`
              padding: 10px !important;
            `}
            onClick={() => onChange("")}
          >
            <ClearIcon />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
};
