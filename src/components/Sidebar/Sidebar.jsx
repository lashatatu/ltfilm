import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { useGetGenresQuery } from "../../services/TMDB";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import genreIcons from "../../assets/genres";

const redLogo =
  "https://fontmeme.com/permalink/220806/8dcc9a41ada3275df6cdcde8984e1dc4.png";
const blueLogo =
  "https://fontmeme.com/permalink/220806/6ed3e634979476d4ba0f59e6d94e0562.png";

const categories = [
  {
    label: "Popular",
    value: "popular",
  },
  {
    label: "Top Rated",
    value: "top_rated",
  },
  {
    label: "Upcoming",
    value: "upcoming",
  },
];

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data, isFetching } = useGetGenresQuery();
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? redLogo : blueLogo}
          alt="lashatatu film logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem
              button
              onClick={() => dispatch(selectGenreOrCategory(value))}
            >
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  className={classes.genreImages}
                  height={30}
                  alt=""
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress size="4rem" />
          </Box>
        ) : (
          data?.genres?.map(({ name, id }) => (
            <Link key={name} className={classes.links} to="/">
              <ListItem
                button
                onClick={() => dispatch(selectGenreOrCategory(id))}
              >
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    className={classes.genreImages}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))
        )}
      </List>
    </>
  );
};

export default Sidebar;
