import React from 'react'
import img from '../../../Assets/adidas-climacool (1).gif';
const Movies = ({backdrop_path, poster_path, title, rate, overview, clickItem, release_date, eachItem}) => {
  return (
    <section>
        <div  className="w-full my-8">
            <img onClick={() => clickItem(eachItem)} className=" object-cover cursor-pointer m-auto max-h-[150px]" src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="img-error" />
        <p className="pt-3">{title}</p>
        <p>{rate}</p>
        </div>
    </section>
  )
}

export default Movies