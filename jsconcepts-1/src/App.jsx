import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)  
let student = [{name:"ngawang",age:22,grades:[80,90,70]},
               {name:"tashi",age:24,grades:[80,88,75]},
               {name:"tsering",age:23,grades:[90,60,85]}];

function calculateAverageGrade(student){
   let avg;
   const sum = student.grades.reduce((total, item) => total + item); 
   avg = sum / student.grades.length   
   return avg
};

function printStudentInfo(student){
  console.log("Name:", student.name)
  console.log("Age:", student.age)
  console.log("AverageGrade:", calculateAverageGrade(student))
};
printStudentInfo(student[0])

return (
    <div>
    <h1>Student Info</h1>
    {student.map((student, index) => (
      <div key={index}>
        <h2>{student.name}</h2>
        <p>Age: {student.age}</p>
        <p>Average Grade: {calculateAverageGrade(student)}</p>
      </div>
    ))}
    </div>
  )
}

export default App
