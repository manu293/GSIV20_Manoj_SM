// imports
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// local imports

const useStyles = makeStyles({
  root: {
    maxWidth: 230,
    minHeight: 300,
    backgroundColor: "#9B9B9B",
    position: "relative"
  },
  cardContent: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%"
  }
});

const MovieCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Movie Title
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              className={classes.time}
              color="textSecondary"
              gutterBottom
            >
              HH:MM
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              className={classes.time}
              color="textSecondary"
              gutterBottom
            >
              Genre
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              className={classes.time}
              color="textSecondary"
              gutterBottom
            >
              Rating
            </Typography>
          </Grid>
        </Grid>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Cast
        </Typography>
      </CardContent>
    </Card>
  );
};
export { MovieCard };
