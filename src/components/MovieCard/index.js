// imports
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {Link} from 'react-router-dom';

// local imports
import { time_convert } from "../../helpers/utility";

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
  },
  commonStyles: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }
});

const MovieCard = props => {
  const classes = useStyles();
  const { movieData } = props;
  return ( 
    <Link to={{ pathname: `details/${movieData.id}`, state: { selectedData: movieData} }}>
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Typography
              className={classes.commonStyles}
              color="textSecondary"
              gutterBottom
            >
              {movieData.title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              className={classes.commonStyles}
              color="textSecondary"
              gutterBottom
            >
              {time_convert(movieData.runtime)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              className={classes.commonStyles}
              color="textSecondary"
              gutterBottom
            >
              {movieData.getGenres[0]}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              className={classes.commonStyles}
              color="textSecondary"
              gutterBottom
            >
              {movieData.vote_average}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography
            className={classes.commonStyles}
            color="textSecondary"
            gutterBottom
          >
            {movieData.getCast.map(cast => cast.charName)}
          </Typography>
        </Grid>
      </CardContent>
    </Card>
    </Link>
  );
};
export { MovieCard };
