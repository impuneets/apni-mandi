import React, { useState } from 'react';
import Navbar from './components/navbar'
import Locations from './components/locations';
import VegetableList from './components/VegetableList';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState(1)
  const handleSelectChange = (event)=>{
          setSelectedOption(parseInt(event.target.value))
  }

  return (
    <div className="App">
      <Navbar/>
      <Locations selectedLocation={selectedOption} onLocationChange ={handleSelectChange}/>
      <hr/>
      <VegetableList selectedLocation={selectedOption}/>
    </div>
  );
}

export default App;
