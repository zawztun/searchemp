import React from 'react';
import Employees from './components/Employees';
import './App.css';

const employees = [
  
    {
      name: "Parker Green",
    },
    {
      name: "Jordan Richards",
    },
    {
      name: "Alex Stevens",
    },
    {
      name: "Avery Scott",
    },
    {
      name: "Riley Miller",
    },
    {
      name: "Charlie Green",
    },
  ];


function App() {
  return (
    <div className="App">
      <Employees employees = {employees}/>
    </div>
  );
}

export default App;
