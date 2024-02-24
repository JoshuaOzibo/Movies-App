import React from 'react'
import Modal from '../Modal/Modal'
import img from '../../Assets/adidas-climacool (1).gif';
const MovieDetail = ({setShowModal, movieDetailItem}) => {

    const CloseShowModal =() =>{
        setShowModal(false)
        movieDetailItem.length = [];
    };

    const {title,overview,poster_path,release_date} = movieDetailItem;

  return (
    <Modal clickCloseModal={CloseShowModal}>
        <div className=' md:grid block space-y-5 md:space-y-0 gap-[100px] grid-cols-2 pt-[10px]'>
            <div className='md:h-full md:w-[300px] w-full h-[200px]'>
                <img className=' md:object-cover object-cover h-full w-full' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="img" />
            </div>

            <div className='space-y-[10px]'>
                <div className='md:block flex md:space-x-0 space-x-2'>
                    <h2 className='font-bold'>Title: {title}</h2>
                    <h3 className='font-bold'>Release Date: {release_date}</h3>
                </div>
                <p className=''>{overview}</p>
            </div>
        </div>
    </Modal>
  )
}

export default MovieDetail