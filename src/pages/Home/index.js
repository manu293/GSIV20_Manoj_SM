/* eslint-disable react-hooks/exhaustive-deps */
// imports
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

// local imports
import { Header, MovieCard } from "../../components";
import { getItemListData } from "../../actions";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "1rem"
  },
  loader: {
    position: "absolute",
    left: "50%",
    bottom: "50%"
  }
}));

const Home = props => {
  const classes = useStyles();
  useEffect(() => {
    props.getItemListData();
  },[]);
  const { movieData } = props.movieList;
  return (
    <div>
      <Header />
      {movieData !== null ? (
        <Grid className={classes.root} container spacing={1}>
          {movieData.map(ele => {
            return (
              <Grid key={ele.id} item xs={6} sm={3}>
                <MovieCard movieData={ele} />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <div className={classes.loader}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  movieList: state.movies
});

const cHome = connect(mapStateToProps, { getItemListData })(Home);

export { cHome as Home };
