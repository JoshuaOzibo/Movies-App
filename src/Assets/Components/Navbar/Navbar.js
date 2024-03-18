import React from "react";

const Navbar = ({chooseBtn}) => {

  return (
    <nav className="bg-red-500">
      <section className=" block py-[10px] justify-between items-center md:flex px-[200px]">
        {/* left header */}
        <header className="flex space-x-10">
          <h1 className="text-2xl font-bold">
            Movie<span className="text-red-200">rise</span>
          </h1>

          <ul onClick={chooseBtn} className="flex font-semibold space-x-5">
            <input type="button" className="text-md" value="Movies" />
            <input type="button" className="text-md" value="TV" />
          </ul>
        </header>

        <div>
          <input className="h-[30px] w-[50]" type="text" />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
