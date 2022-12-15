import React, { useState, useEffect } from "react";
import axios from "../service/axios.js";
import "./row.css";
import YouTube from "react-youtube";

const base_Url = "https://image.tmdb.org/t/p/original/";


function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl]=useState("");
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);

      return request;
    };
    fetchData();
  }, [fetchUrl]);
  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      autoplay:1,
    },
  };
 const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=6f04f55f4d0f46caeb45077c13c675c2`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };
  
  return (
    <div className="row">
      <h2 className="title">{title}</h2>
      <div className={`row_posters`}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_Url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

export default Row;
