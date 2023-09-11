import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    const [flags,setFlags] = useState([])

    useEffect(()=>{
        const FetchData = async()=>{
        const res = await fetch('https://restcountries.com/v3.1/all');
        const data = await res.json();
        setCountries(data)
        }
        FetchData()
    },[])
    const handleVisitedCountries = country =>{
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries)
    }
    const handleFlags= flag =>{
       setFlags([...flags,flag])
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(visited => <li key={visited.cca3}>{visited.name.common}</li>)
                    }
                </ul>
            </div>
            <div>
                {
                    flags.map((flag, inx)=><img key={inx} src={flag} className="flag-container"></img>)
                }
            </div>

           <div className="country-container">
           {
                countries.map(country=><Country 
                    key={country.cca3}
                     country={country}
                     handleVisitedCountries={handleVisitedCountries}
                     handleFlags={handleFlags}>
                     </Country>)
            }
           </div>
        </div>
    );
};

export default Countries;