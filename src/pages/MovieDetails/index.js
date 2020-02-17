// imports
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// local imports
import {Header} from '../../components/Header';
import {time_convert} from '../../helpers/utility';

const useStyles = makeStyles({
    root: {
        margin: 30
    },
    posttitle: {
        '&:first-child':{
            marginTop: 0
        },
        marginTop: 20
    },
  });

const MovieDetails = (props) => {
    const {selectedData} = props.location.state;
    const classes = useStyles();
    return(
        <div>
            <Header compName={'MovieDetails'} />
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={6} sm={3}>
                    <img src="http://placehold.it/300x300" alt='Some Img' />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h1 className={classes.posttitle}>{selectedData.title} {selectedData.vote_average}</h1>
                    <h2 className={classes.posttitle}>{`${selectedData.release_date} | ${time_convert(selectedData.runtime)} | ${selectedData.director.name}`}</h2>
                    <h2 className={classes.posttitle}>{selectedData.getCast.map(c => `${c.charName} , ` )}</h2>
                    <h2 className={classes.posttitle}>{selectedData.overview}</h2>
                </Grid>
            </Grid>
        </div>
    )
}

export {MovieDetails}