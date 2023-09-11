import { useState } from 'react';
import './country.css'
import CounteyDetail from '../ConutryDetail/CounteyDetail';
const Country = ({country,handleVisitedCountries,handleFlags}) => {
    // console.log(country)
    const {name,flags,population,area} = country;
    const [visit,setVisit] =useState(false);
    const handleVisit = ()=>{
        setVisit(!visit);
}

    return (
        <div className= {`country ${visit && 'visited'}`}>
            <img src={flags.png} alt="" />
            <h4 style={{color: visit && 'red'}}>Name: {name.common}</h4>
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <button onClick={()=>{handleVisitedCountries(country); handleFlags(country.flags.png)}}>Mark Visited</button>
            <button onClick={handleVisit}>{visit?"Visited":"Visit"}</button>
            <CounteyDetail
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleFlags={handleFlags}
            ></CounteyDetail>
        </div>
    );
};

export default Country;