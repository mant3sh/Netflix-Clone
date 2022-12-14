import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Row from "./components/Row";
import request from "./service/request";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
    </div>
  );
}

export default App;
