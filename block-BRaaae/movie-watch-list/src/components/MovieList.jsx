import { useContext } from "react";
import MovieContext from "../context/MovieContext";

const MovieList = () => {
  const { moviesList, setMoviesList } = useContext(MovieContext);

  const handleMovieStatus = (id) => {
    const updatedMoviesList = moviesList.map((item) =>
      item.id === id ? { ...item, watched: !item.watched } : item
    );

    setMoviesList(updatedMoviesList);
  };

  return (
    <ul className="movie-list__container">
      {moviesList.map((movie) => {
        const { id, name, watched } = movie;
        return (
          <li key={id}>
            <h3>{name}</h3>
            <button onClick={() => handleMovieStatus(id)}>
              {watched ? "Watched" : "To Watch"}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
