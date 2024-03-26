import React, {useEffect, useState} from 'react';

const randomImages = (length) => Math.floor(Math.random() * length);
const Hero = ({TrendingMovies, TvShow}) => {
  const [loadImages, setLoadImages] = useState([]);
  const collectionOfMovies = [... TrendingMovies, ...TvShow];

  const moviesItemsImages = collectionOfMovies.map((items) =>{
    return items.poster_path
  });

 setInterval(() => {
  let randomImagesLength = randomImages(moviesItemsImages.length);

  let randomImagesLink = moviesItemsImages[randomImagesLength];

  useEffect(() => setLoadImages(randomImagesLink), [])
 }, 4000);

  return (
  <div>
      {loadImages === 0 ? <p>Loading....</p> : <div>
        <img  className="w-[100%] object-cover h-[600px] " src={`http://image.tmdb.org/t/p/w500${loadImages}`} alt="img" />

        <div>

        </div>
      </div>}
  </div>
  )
}

export default Hero