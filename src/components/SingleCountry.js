import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function SingleCountry() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };
    getSingleCountry();
  }, [name]);
  return (
    <>
      <section className="p-8 md:py-0  max-w-7xl mx-auto">
      <Link to='/' className="dark:bg-gray-800 dark:hover:bg-gray-700 bg-white hover:bg-gray-200 inline-block mb-8 dark:text-gray-200 py-2 px-4 shadow text-lg font-medium md:hidden rounded transition-all duration-200">&larr; Back</Link>
        {country.map((item) => (
          <div
            key={item.population}
            className="grid  grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen"
          >
            <article>
              <img src={item.flags.svg} alt={item.name.common} />
            </article>

            <article>
              <h1 className="dark:text-white font-bold  text-gray-900 text-4xl lg:text-4xl mb-8">
                {item.name.official}
              </h1>
              <ul className="dark:text-gray-300 my-4 flex flex-col items-start justify-start gap-2">
                <li>Native Name: {item.name.common} </li>
                <li>Population: {item.population.toLocaleString()} </li>
                <li>Region: {item.region} </li>
                <li>Subregion: {item.subregion} </li>
                <li>Capital: {item.capital[0]} </li>

              </ul>
              {item.borders && <div>
                <h3 className="dark:text-white font-bold">Borders:</h3>
              <ul className="flex items-start justify-start gap-2 flex-wrap">
                {item.borders.map((border, index)=>(
                    <li className="dark:text-gray-300 dark:bg-gray-800 text-xs border bg-white p-2 rounded tracking-wide shadow" key={index}>{border}</li>
                ))}
              </ul>
              </div>
              }
             
            </article>
            <Link to='/' className="dark:bg-gray-800 dark:hover:bg-gray-700 bg-white hover:bg-gray-200  mb-8 dark:text-gray-200 py-2 px-4 shadow text-lg font-medium hidden md:inline-block  rounded transition-all duration-200">&larr; Back</Link>
          </div>
        ))}
      </section>
    </>
  );
}

export default SingleCountry;
