import React, { useState, useEffect } from 'react'
import Country from './Country'
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';

const CountryList = () => {
    const dispatch = useDispatch();
    const countryList = useSelector((state) => state.countryList)
    console.log('el estado total de mi app es', countryList)

    // const [countryList, setCountryList] = useState([])

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                return response.json()
            })
            .then((list) => {
                dispatch({
                    type: 'SET_COUNTRY_LIST',
                    payload: list
                })
                // setCountryList(data)
                console.log(list.length);
            })
            .catch(() => {
                console.log('hubo un error y re re cabió')
            })

    }, [])

    return (
        <div>
            {
                countryList.map((country) => {
                    return (
                        <Country
                            key={uuidv4()}
                            flag={country.flag}
                            name={country.name}
                            population={country.population}
                            region={country.region}
                            capital={country.capital}
                        />
                    )
                })
            }


        </div>
    )
}

export default CountryList
