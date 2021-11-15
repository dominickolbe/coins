import { css } from "@emotion/css";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { Coin } from "coins-models/types";
import React from "react";
import { COLORS } from "../../theme";
import { formatCurrency } from "../../utils/format";

export const CoinsList = (props: {
  coins: Coin[];
  onClick: (coin: Coin) => void;
}) => {
  const { coins } = props;

  return (
    <Grid container>
      {coins.length > 0 ? (
        <Grid item xs={12}>
          <List>
            {coins.map((coin) => {
              return (
                <ListItem key={coin.coinId} onClick={() => props.onClick(coin)}>
                  <ListItemIcon
                    className={css`
                      margin-right: 0;
                    `}
                  >
                    {coin.image ? (
                      <Avatar
                        alt={coin.name}
                        src={coin.image}
                        style={{ width: 25, height: 25 }}
                      />
                    ) : (
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        className={css`
                          font-weight: 600;
                        `}
                      >
                        {coin.symbol.toUpperCase()}
                      </Typography>
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        variant="body1"
                        className={css`
                          font-weight: 600;
                        `}
                      >
                        {coin.name}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        className={css`
                          font-weight: 500;
                        `}
                      >
                        {coin.symbol.toUpperCase()}
                      </Typography>
                    }
                  />
                  <ListItemText
                    className={css`
                      margin-left: auto;
                      text-align: right;
                    `}
                    primary={
                      <Tooltip title={coin.updatedAt} placement="right">
                        <Typography
                          variant="body1"
                          className={css`
                            font-weight: 600;
                            letter-spacing: 1.1px;
                          `}
                        >
                          {formatCurrency(coin.price)}
                        </Typography>
                      </Tooltip>
                    }
                    secondary={
                      <Typography
                        variant="body2"
                        className={css`
                          font-weight: 500;
                          color: ${(coin.price_change_percentage?._24h ?? 0) < 0
                            ? COLORS.RED
                            : COLORS.GREEN};
                        `}
                      >
                        {coin.price_change_percentage._24h
                          ? coin.price_change_percentage._24h.toFixed(1) + "%"
                          : "-"}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      ) : (
        <Grid item xs={12} justifyContent="center" container>
          <Typography variant="subtitle2">no entries found.</Typography>
        </Grid>
      )}
    </Grid>
  );
};
