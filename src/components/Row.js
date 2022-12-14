import React, { useState, useEffect } from "react";
import axios from "../service/axios.js";
import "./row.css";
const base_Url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    };
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className={`row_posters`}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_Url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
