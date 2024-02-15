import React,{useState, useEffect} from "react";
import classes from "./Showcase.module.css";

const Showcase = ({slideImg}) => {
  const [eachImg, setEachImg] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() =>{
    setEachImg(slideImg || [])
  }, [slideImg]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % eachImg.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [eachImg]);

  const eachImgSlide = Array.isArray(eachImg) ? eachImg : [];

  const mapEachSlide = eachImgSlide.map((item) =>{
    return item.poster_path;
  });

  return (
    <section className="relative mt-[-x]">
      <img className="w-full z-[2px] h-[600px] object-fit absolute" src={`https://image.tmdb.org/t/p/w500/${mapEachSlide[currentIndex]}`} alt="slideImg" />
      <nav className=" w-full z-[10px] flex justify-center">
        <div className="w-[85%] flex justify-between py-[20px]">
            <div>
            <h1 className="text-2xl text-[#fff]"><span className=" font-extrabold">MOVIE</span>RISE</h1>
            </div>

            <div className="space-x-5 px-2">
            {/* icon */}
            <button className="hover:bg-sky-500 px-5 py-1 text-[#fff] rounded-[5px]"><span className="font-medium">Sign</span> in</button>
            <button className=" hover:bg-sky-600 bg-sky-500 font-medium px-5 py-1 text-[#fff] rounded-[5px]">Sign Up</button>
            </div>
        </div>
      </nav>


      {/* the inside text */}
      <main className="w-full md:hidden block mt-[120px] relative justify-center">
        <div className=" text-[#fff] m-auto w-[75%]">
          <div className="py-5">
            <h1 className="lg:text-5xl md:text-4xl text-3xl text-center line-clamp-1 font-bold">THE JUNGLE BOOK</h1>
            <ul className="flex justify-center text-center py-5 lg:text-xl text-sm font-medium space-x-3">
              <li>Adventure</li>
              <li>Drama</li>
              <li>Family</li>
              <li>Fantasy</li>
              <li className="border-l-2 pl-1">1h 46m</li>
            </ul>
          </div>

          <div className="flex justify-center items-center lg:space-x-6 space-x-5">
            <input className=" hover:bg-sky-600 hover:border-b-2 cursor-pointer bg-sky-500 font-medium px-3 py-1 text-[#fff] rounded-[5px]" type="button" value="Watch Now" />
            <input className=" hover:bg-sky-500 hover:border-b-2 cursor-pointer border font-medium px-3 py-1 text-[#fff] rounded-[5px]" type="button" value="View Info" />
            <h3>+Favorites</h3>
          </div>
        </div>
      </main>




      <main className="w-full md:flex hidden mt-[392px] justify-center">
        <div className=" text-[#fff] w-[85%] flex items-center justify-between">
          <div className="py-5">
            <h1 className="text-3xl line-clamp-1 font-bold">THE JUNGLE BOOK</h1>
            <ul className="flex py-5 text-sm font-medium space-x-3">
              <li>Adventure</li>
              <li>Drama</li>
              <li>Family</li>
              <li>Fantasy</li>
              <li className="border-l-2 pl-1">1h 46m</li>
            </ul>
          </div>

          <div className="flex items-center space-x-5">
            <input className=" hover:bg-sky-600 hover:border-b-2 cursor-pointer bg-sky-500 font-medium px-3 py-1 text-[#fff] rounded-[5px]" type="button" value="Watch Now" />
            <input className=" hover:bg-sky-500 hover:border-b-2 cursor-pointer border font-medium px-3 py-1 text-[#fff] rounded-[5px]" type="button" value="View Info" />
            <h3>+Favorites</h3>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Showcase;
