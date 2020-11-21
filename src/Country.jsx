import React from 'react'

export default function Country({ flag, name, population, region, capital }) {
    return (
        <>
            <h1>{name}</h1>
            <img loading="lazy" src={flag} alt="" />
            <p><strong>Population:</strong>{population}</p>
            <p><strong>Region:</strong>{region}</p>
            <p><strong>Capital:</strong>{capital}</p>
        </>
    )
}

