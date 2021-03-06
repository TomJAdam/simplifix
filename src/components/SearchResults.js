import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import GigCard from "./Gigs/Gig";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  title: {
    margin: "2rem 0rem 2rem 0rem",
    textAlign: "center",
  },
}));

const randomNum = () => {
  return Math.random() * 6 + 2;
};

export default function GigGrid(props) {
  const classes = useStyles();
  let { search } = useParams();
  const [gigs, setGigs] = useState([]);

  useEffect(() => {
    const paramArr = { search }.search.split(" ");
    axios
      .get("/api/search/:search", {
        params: {
          search: paramArr,
        },
      })
      .then((res) => {
        setGigs(res.data.searchResults);
      });
  }, []);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <h1 className={classes.title}>Results for {{ search }.search}</h1>
        <Grid container justify="center">
          {gigs.map((gig) => {
            return (
              <GigCard
                key={gig.id}
                id={gig.id}
                name={gig.title}
                avatar={gig.photo_one}
                description={gig.description}
                rating={randomNum}
                category={props.category}
                gig={gig}
              />
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
