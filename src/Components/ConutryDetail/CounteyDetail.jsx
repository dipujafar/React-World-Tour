import CountryData from "../CountryData/CountryData";

const CounteyDetail = (props) => {
    return (
        <div>
            <CountryData {...props} />
        </div>
    );
};

export default CounteyDetail;