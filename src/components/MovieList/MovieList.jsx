import { Grid } from "@mui/material";
import useStyles from "./styles";
import { Movie } from "../index";

const MovieList = ({ movies, i }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.map((movie) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </Grid>
  );
};

export default MovieList;
