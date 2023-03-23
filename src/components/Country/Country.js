import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, population, area, flags, capital,region } = props.country;
    // console.log(props.country);
    return (
        <div className='country'>
            <div className='country-name'>
            <h2 >Countries Name: {name.common}</h2>
            </div>
            <img src={flags.svg} alt="" className='country-flag' />
            <h3>Capital: {capital}</h3>
            <h4>Region: {region}</h4>
            <h4>Population: {population}</h4>
            <h6>Area: {area}</h6>
        </div>
    )
};

export default Country;