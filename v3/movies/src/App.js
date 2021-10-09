import React, { Fragment, useCallback, useEffect, useState } from "react";

import "./App.css";

import Movies from "./components/Movies";

/**
 *
 * @returns
 */
const App = () => {
  /**
   *
   */
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   *
   */
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  /**
   *
   */
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const resp = await fetch("https://swapi.dev/api/films/");
      const { results } = await resp.json();

      if (!resp.ok) {
        throw new Error("Is blame to you");
      }

      const mappedMovies = results.map((m) => {
        return {
          id: m.episode_id,
          title: m.title,
          openingText: m.opening_crawl,
          releaseDate: m.release_date,
        };
      });
      //console.log(json);
      setMovies(mappedMovies);
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <Movies movies={movies} />}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </Fragment>
  );
};

export default App;
