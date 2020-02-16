// imports
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

// local imports
import { Header, MovieCard } from "../../components";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '1rem'
  },
}));

const Home = () => {
  const classes = useStyles();
  const arr1 = [10, 20, 30, 40, 50];
  return (
    <div>
      <Header />
      <Grid className={classes.root} container spacing={1}>
        {arr1.map(ele => {
          return (
            <Grid key={ele} item xs={6} sm={3}>
              <MovieCard />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export { Home };
