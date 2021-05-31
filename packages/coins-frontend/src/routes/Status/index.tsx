import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import React from "react";
import { useEffectOnce } from "react-use";
import { PageContainer } from "../../components/PageContainer";
import { useStore } from "../../store";

const Status = () => {
  const {
    state: { app },
    actions,
  } = useStore();

  useEffectOnce(() => actions.app.setTitle("status"));

  return (
    <PageContainer title="Oops!">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Alert severity="error">{app.error}</Alert>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Status;
