const CountryData = (props) => {
    const {country,handleVisitedCountries,handleFlags}= props;
    console.log(country,handleVisitedCountries,handleFlags);
    return (
        <div>
            <p><small>{country.name.common}</small></p>
        </div>
    );
};

export default CountryData;