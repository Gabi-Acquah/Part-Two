import React from 'react'

const PersonForm = ({addData,newName, changeName, num, changeNum}) => {
  return (
    <div>
        <h2>Add a new</h2>
      <form onSubmit={addData}>
        <div>
          name: <input value={newName} onChange={changeName}/>
        </div>
        <div>
        number: <input value={num} onChange={changeNum} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm