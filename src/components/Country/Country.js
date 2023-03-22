import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, population, area, flags, capital } = props.country;
    console.log(capital);
    return (
        <div className='country'>
            <h2>Countries Name: {name.common}</h2>
            <img src={flags.svg} alt="" className='country-flag' />
            <h3>Capital: {capital}</h3>
            <h4>Population: {population}</h4>
            <h6>Area: {area}</h6>
        </div>
    )
};

export default Country;