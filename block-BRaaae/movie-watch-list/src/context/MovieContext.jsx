import { createContext, useState } from "react";
import { movies } from "../data";

const MovieContext = createContext({});

export const DataProvider = ({ children }) => {
  const [moviesList, setMoviesList] = useState(movies);

  return (
    <MovieContext.Provider value={{ moviesList, setMoviesList }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
