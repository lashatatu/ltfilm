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
  "https://fontmeme.com/temporary/d19062f7c12b75b444e3af435ff36d8a.png";
const blueLogo =
  "https://fontmeme.com/temporary/1a3d1667fe7944104dcd6f492a3277d3.png";

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
