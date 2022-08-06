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
import useStyles from "./styles";

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
const demoCategories = [
  {
    label: "Comedy",
    value: "comedy",
  },
  {
    label: "Action",
    value: "action",
  },
  {
    label: "Horror",
    value: "horror",
  },
  {
    label: "Animation",
    value: "animation",
  },
];

const redLogo =
  "https://fontmeme.com/permalink/220806/8dcc9a41ada3275df6cdcde8984e1dc4.png";
const blueLogo =
  "https://fontmeme.com/permalink/220806/6ed3e634979476d4ba0f59e6d94e0562.png";

const Sidebar = ({ setMobileOpen }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <>
      <Link to={"/"} className={classes.imageLink}>
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
          <Link key={value} className={classes.links} to={"/"}>
            <ListItem onClick={() => {}} button>
              {/*              <ListItemIcon>
               <img
               src={redLogo}
               className={classes.genreImages}
               height={30}
               alt=""
               />
               </ListItemIcon>*/}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to={"/"}>
            <ListItem onClick={() => {}} button>
              {/*              <ListItemIcon>
               <img
               src={redLogo}
               className={classes.genreImages}
               height={30}
               alt=""
               />
               </ListItemIcon>*/}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
