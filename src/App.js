import './App.css';
import React from 'react';
import { CharacterGrid } from './components/characters';

function App() {

  return (
    <div className='container'>
      <h1>Wizards Robbing Kids Memory Game</h1>
      <h3>Don't click on the same character more than once!</h3>
      <CharacterGrid />
      <div className='characterGrid'>
      </div>
    </div>
  )
}

export default App;


//Focus on hooks/lifecycle methods, use functional components
//Create a skeleton of the DOM in APP.js
// a) Include Header "Wizards Robbing Kids Memory Game"
// b) Subheader "Don't click on a tile more than once or else game over"
// c) Grid body, div tiles holding character images

//Grid Body- Character Tiles Component
// State...
// a) will have a Character Object holding the img + an id
// b) will have a Characters array holding the Character Objects
// c) will record which characters have been clicked on in an array
// d) will update score as needed
// State function that shuffles the Characters Array and
// renders each character object to a div that is organized with CSS grid
// Each character div to include a onClick function that reshuffles and rerenders
// In addition, every click will push the character objects ID into an array/hashmap and increase the score
// Each subsequent click will check to see if the ID is already in the array
// If there's a duplicate, clear the id array, clear the score, set best score, and reset the game

//Final step: Stylezzzz


