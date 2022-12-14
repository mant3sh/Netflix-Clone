import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "../service/axios.js";
import request from "../service/request";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const requests = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchdata();
  }, []);
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "...." : str;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button ">Play</button>
          <button className="banner_button ">My List</button>
        </div>
        <p className="banner_des">{truncate(movie?.overview, 120)}</p>
      </div>
    </header>
  );
}

export default Banner;
