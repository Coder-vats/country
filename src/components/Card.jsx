import React from 'react';
import '../App.css';

const Card = ({ countries }) => {
    return (
        <div className='card'>
            {countries.map((country) => (
                <div key={country.name.common} className="country-card">
                    <div className="img">
                        <img src={country.flags.png} alt={`${country.name.common} flag`} />
                    </div>
                    <div className="info">
                        <h3>{country.name.common}</h3>
                        <h5>Capital : {country.capital}</h5> 
                        <h5>Region : {country.region}</h5> 
                        <h5>Population : {country.population.toLocaleString()} </h5>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
