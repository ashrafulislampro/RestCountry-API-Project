import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
          const [countries, setCountries] = useState([]);
          useEffect(() => {
                    fetch('https://restcountries.com/v2/all')
                    .then(res => res.json())
                    .then(data => setCountries(data))
          },[]);
          
          return (
                    <div style={{textAlign: 'center'}}>
                              <h1>Total Country Loaded : {countries.length}</h1>
                              {
                                        countries.map(country => <Country country={country} key={country.name}></Country>)
                              }
                    </div>
          );
};

export default Home;