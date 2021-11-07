import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CountryDetails.css';
const CountryDetails = () => {
          const {countryName} = useParams();
          const [country, setCountry] = useState([]);
          useEffect(() => {
                    fetch(`https://restcountries.com/v2/name/${countryName}`)
                    .then(res => res.json())
                    .then(data => setCountry(data[0]));
          },[]);
          const {flag, capital, population, region, nativeName, subregion, area} = country;     
          return (
                    <div style={{textAlign: 'center'}}>
                           <h1>Details Information : {countryName}</h1> 
                           <div className="countryDetails">
                              <img className="img" src={flag} alt="" />
                              <p>NativeName : {nativeName}</p>
                              <p>Capital : {capital}</p>
                              <p>Region : {region}</p>
                              <p>Subregion : {subregion}</p>
                              <p>Area : {area}</p>
                              <p>Population : {population}</p>
                              
                           </div>  
                    </div>
          );
};

export default CountryDetails;