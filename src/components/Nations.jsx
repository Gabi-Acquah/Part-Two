import React from 'react'

const Nations = ({name, capital, area, languages, population, flag}) => {
  return (
    <div>
        <h2>{name}</h2>
        <h3>Capital: {capital}</h3>
        <p>Area: {area}</p>
        <p>Population: {population}</p>
        <h2>Languages</h2>
        <ul>{languages}</ul>
        <img src={`${flag}`} />
    </div>
  )
}

export default Nations