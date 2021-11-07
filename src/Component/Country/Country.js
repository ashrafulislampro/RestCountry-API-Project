import { Link} from 'react-router-dom';
import { useHistory} from 'react-router';
import './Country.css';

const Country = (props) => {
          
          let history = useHistory();
          const ShowDetails = countryName =>{
                    history.push(`/country/${countryName}`);
          }
          const country = props.country;
          const { name, flag, population, region, capital } = country;

          return (
                    <div>
                              <div className="country_component">
                                        <h1>Name : <strong>{name}</strong></h1>
                                        <img className="img" src={flag} alt="" />
                                        <p>Capital : {capital}</p>
                                        <p>Region : {region}</p>
                                        <p>Population : {population}</p>
                                        <Link to={`/country/${name}`}>Show Country Details</Link>
                                        <button onClick={() => ShowDetails(name)}>Show Details</button>
                              </div>
                             

                    </div>

          );
};

export default Country;