import { css, cx } from "@emotion/css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { ReactNode } from "react";

const styles = {
  root: css`
    padding-top: 32px;
    padding-bottom: 32px;
    width: 100%;
  `,
  title: css`
    font-weight: 600;
  `,
  titleCenter: css`
    text-align: center;
  `,
};

export const PageContainer = (props: {
  title?: string;
  titleCenter?: boolean;
  children?: ReactNode;
}) => {
  const { title, titleCenter, children } = props;

  return (
    <div className={styles.root}>
      <Container maxWidth="sm">
        <Grid container spacing={4}>
          {title && (
            <Grid item xs={12}>
              <Typography
                variant="h2"
                className={cx(styles.title, {
                  [styles.titleCenter]: titleCenter,
                })}
              >
                {title}
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
