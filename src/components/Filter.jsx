import React from 'react'

const SearchList = ({dataSearch, search, changeSearch}) => {
  return (
    <div>
        <h2>Phonebook</h2>
        <form onSubmit={dataSearch}>
        filter shown with <input type="text" value={search} 
        onChange={changeSearch}
     />
        </form>
    </div>
  )
}

export default SearchList