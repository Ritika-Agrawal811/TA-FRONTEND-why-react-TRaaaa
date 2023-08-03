const domList = document.querySelector(".movies_list");

const movieList = new MovieList(moviesList);
movieList.renderList(domList);

const inputField = document.querySelector(".movie_input");

inputField.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const title = e.target.value;
    const newMovie = new MovieItem(title);
    movieList.addItem(newMovie);
    movieList.renderItem(domList, newMovie);
  }
});
