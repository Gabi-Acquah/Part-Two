const Total =({parts})=>{
    return (
      <div>
        <strong>total of {parts.reduce((a,part)=>a += part.exercises,0)} exercises</strong>
      </div>
    )
  }
export default Total