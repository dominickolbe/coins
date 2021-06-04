/* eslint-disable react-hooks/exhaustive-deps */

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import { Coin } from "coins-models/types";
import { COINS_DEFAULT_ORDER_BY } from "coins-utils/src";
import orderBy from "lodash/orderBy";
import React, { useEffect, useState } from "react";
import { useDebounce, useEffectOnce } from "react-use";
import { CoinsList } from "../../components/CoinsList";
import { PageContainer } from "../../components/PageContainer";
import { Placeholder } from "../../components/Placeholder";
import { Search } from "../../components/Search";
import { usePageview } from "../../services/Tracking/usePageview";
import { useStore } from "../../store";
import { filterCoinsBy } from "../../utils";

const itemsPerPage = 10;

const Coins = () => {
  const {
    state: { coins },
    actions,
  } = useStore();

  usePageview("/coins");

  const [query, setQuery] = useState("");

  const [page, setPage] = useState(1);
  const [pageTotal, setPageTotal] = useState(0);

  const [filteredItems, setFilteredItems] = useState<Coin[]>([]);

  const setItems = () => {
    const items = filterCoinsBy(
      orderBy(coins.data, [COINS_DEFAULT_ORDER_BY], ["asc"]),
      query
    );
    setFilteredItems(items);
    setPageTotal(Math.ceil(items.length / itemsPerPage));
  };

  const [, cancelDebounce] = useDebounce(
    () => {
      setItems();
      setPage(1);
    },
    275,
    [query]
  );

  useEffect(() => {
    if (coins.data.length === filteredItems.length) return;
    setItems();
  }, [coins.data]);

  useEffectOnce(() => actions.app.setTitle(""));

  // TODO not sure if needed
  useEffect(() => () => cancelDebounce());

  return (
    <PageContainer title="coins" titleCenter>
      <Grid container spacing={2}>
        {coins.isLoading ? (
          <Grid item xs={12}>
            <Placeholder />
          </Grid>
        ) : coins.data.length > 0 ? (
          <>
            <Grid item xs={12}>
              <Search query={query} onChange={(e) => setQuery(e)} />
            </Grid>
            <Grid item xs={12}>
              <CoinsList
                coins={filteredItems.slice(
                  (page - 1) * itemsPerPage,
                  page * itemsPerPage
                )}
                onClick={() => {}}
              />
            </Grid>
            {filteredItems.length > itemsPerPage && (
              <Grid item xs={12} justify="center" container>
                <Pagination
                  page={page}
                  count={pageTotal}
                  onChange={(e, page: number) => setPage(page)}
                  shape="rounded"
                  size="small"
                />
              </Grid>
            )}
          </>
        ) : (
          <Grid item xs={12} justify="center" container>
            <Typography variant="subtitle2">no entries yet.</Typography>
          </Grid>
        )}
      </Grid>
    </PageContainer>
  );
};

export default Coins;
