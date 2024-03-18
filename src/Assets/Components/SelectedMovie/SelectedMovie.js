import React, {useState} from 'react'
import Modal from '../Modal/Modal';

const SelectedMovie = ({selectedMovie, setShowModal, clickX}) => {
    const [overviewIndex, setOverviewIndex] = useState('')

    const {backdrop_path, poster_path, title, rate, overview, release_date} = selectedMovie;
    /**
     * backdrop_path, poster_path, title, rate, overview, release_date, eachItem
     */

    const closeOverlay =() =>{
        setShowModal(false);
    }

    const spliceItem = overview.split(' ');

    let mergeItem = '';
    for(let i = 0; i <= 2; i++){
        mergeItem += spliceItem[i];
    }

    const spaceItem = mergeItem.substr(' ');
    console.log(spaceItem);

    
  return (
    <Modal closeOverlay={closeOverlay}>
        {selectedMovie.length === 0 ? <p>Loading....</p> : <div className="p-[8px]">
            <div className="h-[40px]  w-[100%] font-bold">
                <p onClick={clickX} className=" h-[40px] cursor-pointer w-[40px] rounded-full bg-slate-400 text-center text-3xl float-right">X</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div className="">
                    <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="img-error" />
                </div>
                <div>
                    <h3 className="font-bold">{title || selectedMovie.name}</h3>
                    <p>overview</p>
                    <p className="font-semibold">{release_date || selectedMovie.first_air_date}</p>
                </div>
            </div>
        </div>}
    </Modal>
  )
}

export default SelectedMovie