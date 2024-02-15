import React from 'react'
import Movies from '../Movies/Movies';

const Movie = () => {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmRlZjdhZTYzMjc5NjFiNDYzMzUxZmZjNDUzZmZhYSIsInN1YiI6IjY1NDgzMWVkOTI0Y2U2MDEzYmI2ZjYyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p-6YbKKqsYSFVfnxNlO_KfN9YXoHqPO17w2g363lcgo'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/changes?page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

        /**
         * 
         * porpular : https://api.themoviedb.org/3/movie/popular?api_key=d6def7ae6327961b463351ffc453ffaa&language=en-US
         * upcoming: https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US
         * toprated: https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US
         */

  return (
    <div>
    </div>
  )
}

export default Movie