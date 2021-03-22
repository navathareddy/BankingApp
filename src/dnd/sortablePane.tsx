import React, { FC } from "react";
import { SortablePane, Pane } from "react-sortable-pane";
import { textStyle, paneStyle, divStyle } from "./styles";
import { Card, Paper, Grid, GridSize } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface Iitems {
  value: number;
  col?: boolean | GridSize | undefined;
  sm?: boolean | GridSize | undefined;
}
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
const items: Iitems[] = [
  { value: 1, col: 12, sm: undefined },
  { value: 2, col: 6, sm: 6 },
  { value: 3, col: 6, sm: 6 },
  { value: 4, col: 6, sm: 3 },
];

const SimpleVertical: FC = () => {
  const classes = useStyles();
  const panes = items.map(({ value, col, sm }) => (
    <Grid item className={classes.paper} xs={col} sm={sm} key={value}>
      <Paper style={divStyle}>00{value}</Paper>
    </Grid>
  ));
  return (
    <div className={classes.root} style={{ width: "1300" }}>
      <Grid container spacing={3}>
        <SortablePane direction="vertical" style={{ width: "300" }}>
          {panes}
        </SortablePane>
      </Grid>
    </div>
  );
};

export default SimpleVertical;
