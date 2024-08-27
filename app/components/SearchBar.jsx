"use client";

import { FaSearch } from "react-icons/fa";
const SearchBar = ({handleSearch, setLocation}) => {
  return (
    <form className="flex items-center md:w-2/4 w-full">
        <input
            type="text"
            placeholder="Search for a city"
            className="p-2 rounded-lg bg-transparent outline-none border-b-2 w-full text-white text-sm md:text-[17px] placeholder-slate-500"
            onKeyDown={handleSearch}
            onChange={(e) => setLocation(e.target.value)}
        />
        <div className="ml-[-25px] text-white cursor-pointer">
            <FaSearch />
        </div>
    </form>
  )
}

export default SearchBar;