import './App.css';
import React from 'react';
import { CharacterGrid } from './components/characters';

function App() {

  return (
    <div className='container'>
      <div className='titleContainer'>
      <h1>Don't click on the same character more than once!</h1>
      </div>
      <CharacterGrid />
    </div>
  )
}

export default App;


