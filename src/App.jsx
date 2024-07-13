import { useState } from 'react'
import './App.css'
import People from './components/People';


function App() {
  const [persons,setPersons]= useState([
    {
        id: 1,
        name: "juan david",
        role:"Developer",
        img:"https://bootdey.com/img/Content/avatar/avatar1.png"
    },
    {
        id: 2,
        name: "juan guillermo",
        role:"Project Manager",
        img:"https://bootdey.com/img/Content/avatar/avatar5.png"
    },
    {
        id: 3,
        name: "grabirel felipe",
        role:"Sponsor",
        img:"https://bootdey.com/img/Content/avatar/avatar2.png"
    },
]);

  return (
    <div className='App'>
      <div className='container'>
        <People
          persons={persons}
          setPersons={setPersons}/>
      </div>
  </div>
  )
}

export default App
