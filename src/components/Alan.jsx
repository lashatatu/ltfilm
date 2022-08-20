import alanBtn from "@alan-ai/alan-sdk-web";
import { useContext, useEffect } from "react";
import { ColorModeContext } from "../utils/ToggleColorMode";
import { fetchToken } from "../utils";
import {
  selectGenreOrCategory,
  searchMovie,
} from "../features/currentGenreOrCategory";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const useAlan = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { setMode } = useContext(ColorModeContext);
  useEffect(() => {
    alanBtn({
      key: "7244dd86190b49ecf38af1f2a6c1a2af2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, mode, genres, genreOrCategory, query }) => {
        if (command === "chooseGenre") {
          const foundGenre = genres.find(
            (g) => g.name.toLowerCase() === genreOrCategory.toLowerCase()
          );
          if (foundGenre) {
            history.push("/");
            dispatch(selectGenreOrCategory(foundGenre.id));
          } else {
            const category = genreOrCategory.startsWith("top")
              ? "top_rated"
              : genreOrCategory;
            history.push("/");
            dispatch(selectGenreOrCategory(category));
          }
        }

        if (command === "changeMode") {
          if (mode === "light") {
            setMode("light");
          } else {
            setMode("dark");
          }
        }

        if (command === "login" || command === "log in") {
          fetchToken();
        } else if (command === "logout" || command === "log out") {
          localStorage.clear();
          history.push("/");
        }

        if (command === "search") {
          dispatch(searchMovie(query));
        }
      },
    });
  }, []);
};

export default useAlan;
