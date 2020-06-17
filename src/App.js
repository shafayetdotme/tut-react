import React from 'react';
import './App.css';
import Greet from './components/Greet';

function App() {
  return (
    <div className="App">
      <Greet name="shafayet" shortName="SFT"/>
      <Greet name="kabir" shortName="KBR"/>
      <Greet name="shajib" shortName="SJB"/>
    </div>
  );
}

export default App;
