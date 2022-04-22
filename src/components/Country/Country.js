import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, area, population, flags, region } = props.country
    return (
        <div className='country bg-success'>
            <h1>Country Name: {name.common}</h1>
            <p>Total Area: {area}</p>
            <p>Population: {population}</p>
            <img src={flags.png} alt="" />
            <h4>Region: {region}</h4>
        </div>
    );
};

export default Country;