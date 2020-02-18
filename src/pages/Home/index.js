/* eslint-disable react-hooks/exhaustive-deps */
// imports
import React, { useEffect, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import BottomScrollListener from "react-bottom-scroll-listener";

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

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function renderMovies(classes, homeMovieData, searchTerm){
  if(homeMovieData !== null){
    if(searchTerm === ''){
       return(
        <Grid className={classes.root} container spacing={1}>
        {homeMovieData.map(ele => {
          return (
            <Grid key={ele.id} item xs={6} sm={3}>
              <MovieCard movieData={ele} />
            </Grid>
          );
        })}
      </Grid>
       )
    } else {
      
      let filteredMovies = homeMovieData.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return(
        <Grid className={classes.root} container spacing={1}>
        {filteredMovies.map(ele => {
          return (
            <Grid key={ele.id} item xs={6} sm={3}>
              <MovieCard movieData={ele} />
            </Grid>
          );
        })}
      </Grid>
      )
    }
    
  }
}

const Home = props => {
  const [homeMovieData, setHomeMovieData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const classes = useStyles();
  const previousMovieData = usePrevious(homeMovieData);
  const { movieData, searchTerm } = props.movieList;

  useEffect(() => {
    props.getItemListData(pageNum);
  }, []);

  function callback() {
    setIsFetching(true);
  }

  console.log("The prev movie data is: ",previousMovieData )

  useEffect(() => {
    if (movieData !== null) {
      if(previousMovieData === undefined || previousMovieData.length === 0) {
        setHomeMovieData([...new Set([...movieData])]);
      }
    } 
    const updatedPageNum = pageNum + 1;
    if (!isFetching) return;
    props.getItemListData(updatedPageNum);
    setPageNum(updatedPageNum);
    if(previousMovieData !== undefined ) {
      setIsFetching(false);
      setHomeMovieData(prevMovies => {return [...new Set([...prevMovies , ...movieData])]});
    }
  }, [isFetching, movieData]);

  return (
    <div>
      <Header />
      <BottomScrollListener onBottom={callback}>
        {homeMovieData !== null ? renderMovies(classes, homeMovieData, searchTerm) : (
          <div className={classes.loader}>
            <CircularProgress />
          </div>
        )}
      </BottomScrollListener>
    </div>
  );
};

const mapStateToProps = state => ({
  movieList: state.movies
});

const cHome = connect(mapStateToProps, { getItemListData })(Home);

export { cHome as Home };
