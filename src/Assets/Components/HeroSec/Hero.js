import React, {useState} from 'react';

const Hero = ({data}) => {
    const [array, setArray] = useState(0)
    
    const arrayIndexed = data[array];

    const clickNext =() =>{
        const nextImg = array === data.length - 1;
        const currentImg = nextImg ? 0 : array + 1;
        setArray( currentImg )
    }

    // http://image.tmdb.org/t/p/w500/9Rj8l6gElLpRL7Kj17iZhrT5Zuw.jpg

    const bgStyle ={
        width: '100%',
        height: '100vh',
    }

  return (
    <div>
        <button onClick={clickNext}>Next</button>
        <img  className="w-[100%] " src={`http://image.tmdb.org/t/p/w500${arrayIndexed}`} alt="img" />

        <div style={bgStyle}>

        </div>
    </div>
  )
}

export default Hero