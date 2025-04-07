import React, { useEffect, useState } from "react"
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [num, setNum] = useState('')
  const [search, setSearch] = useState('')

  useEffect(()=>{
    personService.getAll()
    .then(existingPersons=>{
      setPersons(existingPersons)
    })
  },[])
 

  const addData =(event)=>{
    event.preventDefault()
    const newPerson = {name:newName, number:num, id:String(persons.length + 1)}
    const personObj = persons.find(p=>p.name===newPerson.name)
    
    if(personObj){
      const msg = window.confirm(`${personObj.name} already added, change the number?`)
      const updatedPerson = {...personObj, number:newPerson.number}
      msg 
      ? personService.update(personObj.id, updatedPerson)
      .then(updateResponse=>{
        setPersons(persons.map(p=>p.id === personObj.id ? updateResponse : p))
        setNewName('')
        setNum('')
      })
      : setNewName('')
      setNum('')
    }else{
      personService.create(newPerson)
      .then(createdPerson=>{
        setPersons(persons.concat(createdPerson))
        setNewName('')
        setNum('')
      })
    }

    // if (!(personSingle)){
    //   personService.create(personObj).then(response=>{
    //     setPersons(persons.concat(response))
    //     setNewName('')
    //     setNum('')
    //   })
    // }else{
    //   window.confirm(`${personSingle.name} already added`)
    // }
    

    
    
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
    setPersons(persons.filter((person)=>{
      if (person.name.match(search)){
        console.log(person)
        return <li key={person.id}>{person.name} {person.number}</li>
      }
    }))
  }
  const delPerson =(id)=>{
    const msg = window.confirm('Do you really want to delete?')
    if(msg){
      personService
      .delperson(id)
      .then(response=>{
        setPersons(persons.filter(p=>p.id !== id))
        console.log(`deleted:  ${response}`)
    })
    .catch(err=>{
      console.log(err)
    })
    }
    
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
      <h2>Numbers</h2>
      {
        persons.map(person=>(
          <Persons key={person.id}
          name={person.name} 
          number={person.number}
          delPerson={()=>delPerson(person.id)}
           />
        ))
      }
    </div>
    </>
  )
}

export default App
