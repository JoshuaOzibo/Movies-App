import React, { useEffect, useState } from "react";
import Navbar from "./Assets/Components/Navbar/Navbar";
import Hero from "./Assets/Components/HeroSec/Hero";
import img from "../src/Assets/adidas-climacool (1).gif";
import MoviesList from "./Assets/Components/MoviesList/MoviesList";
import SelectedMovie from "./Assets/Components/SelectedMovie/SelectedMovie";
import Loading from "./Assets/Components/Loading/Loading";

const App = () => {
  const [TrendingMovies, setTrendingMovies] = useState([]);
  const [TvShow, setTvShow] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Loading....');
  const [selectedMovie, setSelectedMovie] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        setShowLoading(true);
        const responseTrending = await fetch(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=0128e9a89b321438650ee3a8816a9793"
        );
        const responseTv = await fetch(
          "https://api.themoviedb.org/3/trending/tv/day?api_key=0128e9a89b321438650ee3a8816a9793"
        );

        if (!responseTrending.ok || !responseTv.ok) {
          throw new Error("Request cannot be reacted please check the link");
        }

        const dataTrending = await responseTrending.json();
        const dataTv = await responseTv.json();

        const trendingItems = dataTrending.results.map((item) => {
          return item;
        });
        const tvItems = dataTv.results.map((item) => {
          return item;
        });

        setTrendingMovies(trendingItems);
        setTvShow(tvItems);
        // setTrendingMovies(dataTrending.results, dataTv.results)
        // setTvShow(dataTv.results);
      } catch (error) {
        setLoadingMessage(`${error.message}, please check your network or link`);
      }
    };
    setShowLoading(false);
    fetchItem();
  }, []);

  const loadingText = showLoading && <p>{loadingMessage}</p>;

  const clickX=() =>{
    setShowModal(false)
  }

  const clickItem=(item) =>{
    setSelectedMovie(item);
    setShowModal(true)
  }

  const chooseBtn =(item) =>{
    console.log(item.target.value)
  };

  console.log(selectedMovie.first_air_date)
  return (
    <div>
      <Navbar chooseBtn={chooseBtn} />

      {/* <Hero TrendingMovies={TrendingMovies} TvShow={TvShow} /> */}

      {showModal && <SelectedMovie clickX={clickX} setShowModal={setShowModal} selectedMovie={selectedMovie} />}

      {TrendingMovies.length === 0 || TvShow.length === 0 ? (
        <Loading />
      ) : (
        <MoviesList clickItem={clickItem} TrendingMovies={TrendingMovies} TvShow={TvShow} />
      )}
    </div>
  );
};

export default App;
