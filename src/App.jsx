import React, { useState } from "react"
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"

const App = () => {
  const [persons, setPersons] = useState([
     {name: 'Arto Hellas', number:'0558756189', id:1},
     {name: 'Gabriel Acquah', number:'0206231094', id:2},
     {name: 'Effah Acquah', number:'054425952', id:3}
     ])
  const [newName, setNewName] = useState('')
  const [num, setNum] = useState('')
  const [search, setSearch] = useState('')
 

  const addData =(event)=>{
    event.preventDefault()
    const personObj = {name:newName, number:num, id:String(persons.length + 1)}
    const arr = persons.find(p=>p.name === personObj.name)
    arr ? window.alert(`${newName} already added to phonebook`)
    :setPersons(persons.concat(personObj))
    console.log(personObj)
    setNewName('')
    setNum('')
  }
  const changeName =(event)=>{
    setNewName(event.target.value)
  }
  const changeNum =(event)=>{
    setNum(event.target.value)
  }
  const changeSearch =(event)=>{
    setSearch(event.target.value)
  }
  const dataSearch =(event)=>{
    event.preventDefault()
    // setSearchArr(persons.map((person)=>{
    //   if(person.name.match(search)){
    //     return <li>{person.name}</li>
    //   }
    // }))
    setPersons(persons.filter((person)=>{
      if (person.name.match(search)){
        console.log(person)
        return <li key={person.id}>{person.name} {person.number}</li>
      }
    }))
  }

  return (
    <>
    <div>
      
    <Filter search={search} dataSearch={dataSearch} changeSearch={changeSearch} />
      
    </div>
      <div>
      <PersonForm addData={addData} newName={newName} 
      changeName={changeName} num={num} 
      changeNum={changeNum}
      />
      <Persons persons={persons} />
    </div>
    </>
  )
}

export default App
