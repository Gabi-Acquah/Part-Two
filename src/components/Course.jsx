import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
  
  const Course =({courses})=>{
    return (
      <div>
          {courses.map((course)=>{
            return (
              <div key={course.id}>
                <Header name={course.name} />
                {
                  course.parts.map(part=>{
                    return (
                      <Content key={part.id} content={part} />
                    )
                  })                 
                }
                {<Total parts={course.parts} />}       
              </div>
            )
          })}
      </div>
    )
  
  }
  export default Course