import React from 'react';
import backgroundImage from './Rectangle.png';

import Timer from "./components/Timer";



import './App.css';

function App() {
  return (
    <div className="container">
      <div className="background-image">
        <h1>big sale on lifetime plan</h1>
        <p className='little'>there is very little left</p>
        <Timer/>


      </div>
      <h1></h1>
    </div>
  );
}

export default App;

