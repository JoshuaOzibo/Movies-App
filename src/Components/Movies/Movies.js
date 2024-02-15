import React from 'react'
import Frame from '../../Assets/adidas-climacool (1).gif'
const Movies = ({ adult, 
                  backgroundImg, 
                  genre, 
                  id, 
                  originalLang, 
                  titleinChina,
                  description,
                  popularity,
                  posterImg,
                  releaseDate,
                  title,
                  rating
                }) => {

  return (
    <section>
      {/* selection buttons
      <main className='w-full flex justify-center py-[20px]'>
      <ul className='w-[85%] text-sky-500 pt-[30px] flex space-x-5'>
        <a href="##"><li className='border-b-2 border-sky-500 pb-1'>Trending</li></a>
        <li>Top Rating</li>
        <li>New Arrival</li>
        <li>Trailers</li>
        <li>Coming Soon</li>
        <li>Genre</li>
      </ul>
    </main> */}

    {/* movies */}

    <div className=' w-full'>
      <div className='lg:space-y-[350px] space-y-[300px] '>
        <div className='border-[1px] cursor-pointer rounded-t-[20px] lg:h-[530px] md:h-[400px] border-black'>
          <img className=' hover:scale-[98%] hover:rounded-t-[15px] rounded-t-[20px] transition-all w-full object-cover' src={`https://image.tmdb.org/t/p/w500/${posterImg}`} alt="assincrid" />
          {/* title */}
          <div className=''>
            <h3 className=''>Title: {title}</h3>
            {/* rating */}
            <p>Rating: {rating} </p>
          </div>
        </div>
      </div>
    </div>
    <main>

    </main>
    </section>
  )
};

export default Movies;