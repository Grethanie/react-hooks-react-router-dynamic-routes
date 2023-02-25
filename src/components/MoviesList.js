import React from "react";
import { Link } from "react-router-dom";

export default function MoviesList({ movies }) {
  return (
    <>
      <ul>
        {Object.keys(movies).map((movieId) => (
          <li key={movieId}>
            <Link to={`/movies/${movieId}`}>{movies[movieId].title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
