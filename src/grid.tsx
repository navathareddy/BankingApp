import React, { FC } from "react";
import { Grid, GridSize, Paper } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);
interface Iitems {
  value: number;
  col?: boolean | GridSize | undefined;
  sm?: boolean | GridSize | undefined;
}
const items: Iitems[] = [
  { value: 1, col: 12, sm: undefined },
  { value: 2, col: 12, sm: 6 },
  { value: 3, col: 12, sm: 6 },
  { value: 4, col: 6, sm: 3 },
  { value: 5, col: 6, sm: 3 },
  { value: 6, col: 6, sm: 3 },
  { value: 7, col: 6, sm: 3 },
];
const FullWidthGrid: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {items.map(({ value, col, sm }) => {
          <Grid item xs={col} sm={sm}>
            <Paper className={classes.paper}>{value}3</Paper>
          </Grid>;
        })}
      </Grid>
    </div>
  );
};

export default FullWidthGrid;
