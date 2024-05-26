import React, { useState, useEffect } from "react";
import Article from "./Article";
import { IoSearchOutline } from "react-icons/io5";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");
  const regions = [
    {
      name: "Africa",
    },
    
    {
      name: "Americas",
    },

    {
      name: "Asia",
    },

    {
      name: "Europe",
    },

    {
      name: "Oceania",
    },

    {
      name: "Antarctic",
    },
  ];

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountries();
  }, []);

  async function searchCountry() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/name/${searchText}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function filterByRegion (region) {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/region/${region}`
      );
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSearchCountry(e) {
    e.preventDefault();
    searchCountry();
  }

  function handleFilterByRegion(e) {
    e.preventDefault();

    filterByRegion()
  }

  return (
    <>
      {!countries ? (
        <h1 className="text-gray-900 font-bold uppercase tracking-wide flex items-center justify-center text-center h-screen text-4xl dark:text-white">
          Loading .....
        </h1>
      ) : (
        <section className="container mx-auto p-8">
          {/* form */}

          <div className="flex md:items-center justify-between mb-10 lg:flex-row flex-col gap-5 md:flex-row">
            <form
              onSubmit={handleSearchCountry}
              autoComplete="off"
              className=" flex-1 relative"
            >
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search for a country by it's name"
                required
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="py-4 px-8 text-gray-800 placeholder-gray-700 dark:text-gray-300 dark:placeholder-gray-400 bg-white dark:bg-gray-800 shadow outline-none w-full flex-1 dark:focus:bg-gray-700 transition-all duration-200 rounded focus:bg-gray-200"
              />
              <IoSearchOutline className="absolute dark:text-gray-400 text-gray-400 text-2xl top-4 left-2"/>
            </form>

            <form onSubmit={handleFilterByRegion}>
              <select
                name="filter-by-region"
                id="filter-by-region"
                className=" py-4 shadow w-52 outline-none rounded px-2 dark:bg-gray-800 dark:text-gray-400 dark:focus:bg-gray-700 transition-all duration-200 focus:bg-gray-200"
                value={regions.name}
                onChange={e => filterByRegion(e.target.value)}
              >
                {regions.map((region, index) => (
                  <option
                    key={index}
                    value={region.name}
                    className="text-gray-800 dark:text-gray-400"
                  >
                    {region.name}
                  </option>
                ))}
              </select>
            </form>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4">
            {countries.map((country) => (
              <Article key={country.name.common} {...country} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default Countries;
