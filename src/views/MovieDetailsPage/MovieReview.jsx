import { useState, useEffect } from "react";
import { fetchMovieCast } from "../../services/movieApi";

const BASE_URL = "https://image.tmdb.org/t/p/w500";

function MovieReview({ movieId }) {
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(
      (response) => console.log(response) /*setCast(response.cast)*/
    );
  }, [movieId]);
  return <></>;
}

export default MovieReview;
