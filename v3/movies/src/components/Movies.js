import "./Movies.css";

import Movie from "./Movie";
/**
 *
 * @param {*} props
 * @returns
 */
const MovieList = (props) => {
  return (
    <ul className="movies-list">
      {props.movies.map((m) => (
        <Movie
          key={m.id}
          title={m.title}
          releaseDate={m.releaseDate}
          openingText={m.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
