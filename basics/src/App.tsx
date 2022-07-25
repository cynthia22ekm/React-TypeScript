import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '../src/Components/Button'

function App() {
  return (
    <div className="App">
      <Button label='s' size='small' onClick={(event)=>console.log(event)}/>
    </div>
  );
}

export default App;
