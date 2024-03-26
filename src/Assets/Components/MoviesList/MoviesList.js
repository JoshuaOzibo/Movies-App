import React, {useState} from 'react'
import Movies from './Movies';

const MoviesList = ({TrendingMovies, TvShow, clickItem}) => {
  

    let moviesItems = [...TrendingMovies, ...TvShow];

    console.log(moviesItems)

    
  return (
    <div className="w-full text-center lg:px-[100px] md:px-[50px] sm:px-[40px] px-[30px]  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-3">{moviesItems.map((item) => <span key={item.id}>
        <Movies 
        backdrop_path={item.backdrop_path}
        poster_path={item.poster_path}
        title={item.title || item.name}
        rate={item.vote_average}
        overview={item.overview}
        release_date={item.release_date || item.first_air_date}
        eachItem ={item}
        clickItem={clickItem}
        />
    </span>)}
    </div>
  )
}

export default MoviesList