
import './App.css';
import { Salary } from './components/Salary';
import { Job } from './components/Job';
import { useState } from 'react';
function App() {
  const students = ["ANTAR","OVI","EKA"];
  // let age = 0;
  const [age,setAge] = useState(0);
  let [increase,setMarks] = useState(0);
  const results = [
    {name:"ANTAR",marks:"98" },
    {name:"EKA",marks:"99"}
   ];
   const salary = [
    {name:"ANTAR",salary:"98" },
    {name:"EKA",salary:"99"}
   ];
   const increaseage = () =>{
    setAge(age+1)
   }
   const increasef = () =>{
    setMarks(increase + 1)
   }
   const decreasef = () =>{
    setMarks(increase-1)
   }
   const zerof = () =>{
    setMarks(0)
   }
  return (
    <div className="App">
      <Job name="ANTAR NANDI" age="27" gender="Male"/>
      <hr></hr>
      <h3 className="list">Working With List/Array</h3>
      {students.map((value,key) => {

        return <h2 key={key}>{value}</h2>
      })}
      <hr></hr>
      <h3 className="list">Working With Array of Objects</h3>
      {results.map((value,key) => {

          return <h2 key={key}>{value.name } : {value.marks}</h2>
          })
      }
      <hr></hr>
      <h3 className="list">Working With components props passing</h3>
      {salary.map((value,key) => {

          return <Salary name={value.name} salary={value.salary}/>
          })
      }   
       <h3 className="list">Usestate and hook</h3>
       <h2><button onClick={increaseage} className="btn">Increase Your Age</button> Age is {age} </h2>
       <h3 className="list">Usestate and hook extended</h3>
       {increase}
       <h2><button onClick={increasef} className="btn">+</button></h2>
       <h2><button onClick={decreasef} className="btn">-</button></h2>
       <h2><button onClick={zerof} className="btn">0</button></h2>
    </div>
  );
}

export default App;
