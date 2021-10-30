import { useState, useEffect } from "react";
import { fetchMovieCast } from "../../services/movieApi";
import s from "./MovieCast.module.css";

const BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieCast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(
      (response) => setCast(response.cast) /*setCast(response.cast)*/
    );
  }, [movieId]);
  return (
    <>
      <ul className={s.list}>
        {cast.map((item) => (
          <li key={item.id}>
            <img
              src={`${BASE_URL}${item.profile_path}`}
              alt={item.name}
              width="100"
            />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>{" "}
    </>
  );
}

export default MovieCast;
