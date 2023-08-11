import { useState, useContext } from "react";
import MovieContext from "../context/MovieContext";

const InputField = () => {
  const [movieTitle, setMovieTitle] = useState("");
  const { moviesList, setMoviesList } = useContext(MovieContext);

  const handleMovieInput = (e) => {
    if (e.key === "Enter") {
      const id = moviesList[moviesList.length - 1]
        ? moviesList[moviesList.length - 1].id + 1
        : 0;

      const movie = {
        id,
        name: movieTitle,
        watched: false,
      };

      setMoviesList((prev) => [...prev, movie]);
      setMovieTitle("");
    }
  };

  return (
    <fieldset className="input__container">
      <input
        type="text"
        placeholder="Enter a movie name"
        className="input__movie-name"
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
        onKeyUp={handleMovieInput}
      />
    </fieldset>
  );
};

export default InputField;
