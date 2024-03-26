import React, {useState} from 'react'
import Modal from '../Modal/Modal';

const SelectedMovie = ({selectedMovie, setShowModal, clickX}) => {
    const [overviewIndex, setOverviewIndex] = useState('');
    const [readMoreBtn , setReadMoreBtn] = useState(true);
    const [movieDesc, setMovieDesc] = useState('');

    const {backdrop_path, poster_path, title, rate, overview, release_date} = selectedMovie;

    const closeOverlay =() =>{
        setShowModal(false);
    }

    const mapOver = overview.split(' ');

    let mergeItem = '';
    for (let i = 0; i <= 20; i++) {
        mergeItem += mapOver[i];
        if(i < 20){
            mergeItem += ' '
        }
    };

    const clickReadMore =(description) =>{
        setReadMoreBtn(false);
        setMovieDesc(description)
    }

    
  return (
    <Modal closeOverlay={closeOverlay}>
        {selectedMovie.length === 0 ? <p>Loading....</p> : <div>
            {!readMoreBtn ? <p className='p-[50px] tracking-tighter'>{movieDesc} <span className="font-semibold underline cursor-pointer" onClick={() => setReadMoreBtn(true)}>Read Less.</span></p> : <div className="py-2 px-2">
                <div className="h-[40px]  w-[100%] font-bold mb-2">
                    <p onClick={clickX} className=" h-[40px] cursor-pointer w-[40px] rounded-full bg-slate-400 text-center text-3xl float-right">X</p>
                </div>
                <div className="grid break-words md:grid-cols-2 gap-2">
                    <div className="">
                        <img className="object-cover" src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="img-error" />
                    </div>
                    <div>
                        <h3 className="font-bold">{title || selectedMovie.name}</h3>
                        <p className='tracking-[0.16px]'>{mergeItem}... <span onClick={() => clickReadMore(overview)} className="font-semibold underline cursor-pointer">Read More.</span></p>
                        <p className="font-semibold">{release_date || selectedMovie.first_air_date}</p>
                    </div>
                </div>
            </div>}
        </div>}
    </Modal>
  )
}

export default SelectedMovie