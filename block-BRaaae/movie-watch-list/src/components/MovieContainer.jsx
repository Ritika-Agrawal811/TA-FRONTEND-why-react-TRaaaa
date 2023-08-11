import InputField from "./InputField";
import MovieList from "./MovieList";
import { DataProvider } from "../context/MovieContext";

const MovieContainer = () => {
  return (
    <section className="container">
      <h1>Movie Watch List</h1>
      <DataProvider>
        <InputField />
        <MovieList />
      </DataProvider>
    </section>
  );
};

export default MovieContainer;
