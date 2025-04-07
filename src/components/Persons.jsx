import React from 'react'

const Persons = ({name, number, delPerson}) => {

  return (
    <div>
        <p>
          {name} : {number}   <button onClick={delPerson}>delete</button>
        </p>
    </div>
  )
}

export default Persons