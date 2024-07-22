import React, { useEffect, useState } from 'react';
import Card from './Card';
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const getAllCountries = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/all`);
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (country) {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching country:", error);
      }

      setCountry("");
    }
  };

  const selectRegion = async () => {
    if (region) {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching region:", error);
      }
    }
  };

  useEffect(() => {
    selectRegion();
  }, [region]);

  return (
    <>
      <div className='heading'>
        <h1>Where In The World?</h1>

        <div className='search'>
          <button className="back" onClick={getAllCountries}>Back</button>

          <div className="input">
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                value={country}
                placeholder="Enter Country......."
                onChange={(e) => setCountry(e.target.value)}
              />
              <button className="go" type="submit"><FaSearch /></button>
            </form>
          </div>

          <div className='drop'>
            <select value={region} onChange={(e) => setRegion(e.target.value)}>
              <option value="">Filter By Regions</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
              <option value="america">America</option>
              {/* <option value="africa">Africa</option> */}
            </select>
          </div>
        </div>
      </div>
      
      <div className='countries'>
        {<Card countries={countries} />}
      </div>
    </>
  );
}
