import React, { useState, useEffect } from "react";
import MovieDetail from "./Components/Movie Details/MovieDetail";
import Movies from "./Components/Movies/Movies";
import Showcase from "./Components/Showcase/Showcase";
const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showcaseSliddingImg, setShowcaseSliddingImg] = useState([]);
  const [showModal, setShowModal] = useState(false);
const [movieDetailItem, setMovieDetailItem] = useState([]);
 
  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true)
      
      try {
        const movieFetch = await fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
        );
        const res = await movieFetch.json();

        if(res.ok){
          throw new Error('Data cannot be found...');
        }

        

        const data = res.results.map((item) => {
          return item;
        });
        setMovieData(data);
        setShowcaseSliddingImg(data)
        setLoading(false)

      } catch (error) {
        console.log(error)
      }
    };

    fetchMovie();
  }, []);

  const loadingData = <p className="text-5xl text-red-500">Loading...</p>

  const clickItems =(event) =>{
    console.log(event);
    setMovieDetailItem(event);
    setShowModal(true);
  }

  return (
    <div className="">
      <div className="">
      {showModal && <MovieDetail movieDetailItem={movieDetailItem} setShowModal ={setShowModal} />}
      </div>
      <Showcase slideImg={showcaseSliddingImg} />
      <div className="flex w-full justify-center">
        {movieData.length === 0 ? loading && loadingData  : <div className="w-[85%] mt-[60px] py-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {movieData.map((movie) => (
            <div onClick={() => clickItems(movie)} key={movie.id} className=" ">
              <Movies
                adult={movie.adult}
                backgroundImg={movie.backdrop_path}
                genre={movie.genre_ids}
                id={movie.id}
                originalLang={movie.original_language}
                titleinChina={movie.original_title}
                description={movie.overview}
                popularity={movie.popularity}
                posterImg={movie.poster_path}
                releaseDate={movie.release_date}
                title={movie.title}
                rating={movie.vote_average}
              />
            </div>
          ))}
        </div>}
      </div>

      {/* <Receive /> */}
    </div>
  );
};

export default App;
