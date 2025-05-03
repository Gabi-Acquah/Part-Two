import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Nations from './components/Nations'

const App = () => {
  const [query, setQuery] = useState('')
  const [country, setCountry] = useState(null)
  const [list, setList] = useState([])
  const [display, setDisplay] = useState('')

  useEffect(()=>{
    console.log('effect run, country to search is now ', country)
    if(country){
      console.log('fetching countries ....')
       axios
       .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
       .then(response=>{
        const items = response.data
         setList(items)
       })
       .catch(err=>{
        console.log(err)
       })      
    }

  },[country])
  const queryChange =(event)=>{
    setQuery(event.target.value)
    setCountry(query)
    
  }
  const toShow = list.filter(item=>item.name.common.toLowerCase().includes(query.toLowerCase())
  ? item : console.log('not match'))
  
  const showBtn =(item)=>{
    console.log(item)
    setDisplay(
      <Nations key={item.flag}
        name={item.name.common} area={item.area} population={item.population}
        languages={Object.values(item.languages).map((i, k)=><li key={k}>{i}</li>)}
        capital={item.capital} flag={item.flags.png}
      />
    )
  }
  return (
    <>
       find a country <input type='search'
       placeholder='search country ...'
       value={query}
       onChange={queryChange}
       />
       {
        toShow.length > 10 ?
        <p>Too many matches, specify another filter</p>
        : toShow.map((item, i)=>{
          if(toShow.length === 1){
            console.log(item)
            return <Nations name={item.name.common} key={i}
              capital={item.capital}
              area={item.area}
              population={item.population}
              languages={Object.values(item.languages).map((i,k)=><li key={k}>{i}</li>)}
              flag={item.flags.png}
             />
            
          }else return (
            <div key={i}> {item.name.common} 
              <button 
                onClick={()=>showBtn(item)}>
                  show
              </button>
            </div>
            
          )
        })
       }
      <div> {display}</div>
    </>
  )
}

export default App