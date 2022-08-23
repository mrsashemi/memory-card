import React, { useEffect, useState } from "react";
import uniqid from 'uniqid';
import { images } from './assets';
import { SetScore } from "./score";

export function CharacterGrid() {
    const [score, setScore] = useState([]);
    const [characters, setCharacters] = useState([
        {name: 'Hokage Abe', url: images['abe.PNG'], id: uniqid()},
        {name: 'Sailor Beyonce', url: images['beyonce.PNG'], id: uniqid()},
        {name: 'Demon Slayin Cudi', url: images['cudi.PNG'], id: uniqid()},
        {name: 'Fisher Frank', url: images['frank.PNG'], id: uniqid()},
        {name: 'Samurai Madsaki', url: images['madsaki.PNG'], id: uniqid()},
        {name: 'Ghost Meek', url: images['meek.PNG'], id: uniqid()},
        {name: 'Samurai Minoru Muraoka', url: images['minoru.PNG'], id: uniqid()},
        {name: 'Samurai Murakami', url: images['murakami.PNG'], id: uniqid()},
        {name: 'Fisher Pharrell', url: images['pharrell.PNG'], id: uniqid()},
        {name: 'Sorayama/Arsham Rihanna', url: images['riri.PNG'], id: uniqid()},
        {name: 'Sacai Samurai Uzi', url: images['uzi.PNG'], id: uniqid()},
        {name: 'SamurYe', url: images['ye.PNG'], id: uniqid()}
    ]);

    function onCharacterSelect(e) {
        let shuffleCharacters = characters
            .map(value => ({value, sort: Math.random()}))
            .sort((a,b) => a.sort - b.sort)
            .map(({value}) => value);

        setCharacters(() => [...shuffleCharacters]);
        (score.indexOf(e.target.id) === -1) ? setScore(() => score.concat(e.target.id)) : setScore(() => []); 
    };

    function hover(e) {
        (e.target.parentNode.lastChild.className == "hidden") ? 
        e.target.parentNode.lastChild.className = "shown" : e.target.parentNode.lastChild.className = "hidden";
    };

    return (
        <div className="gameContainer">
            <div className="extraBackground">
                <div className="glassBackground">
                    <div className="characterGrid" >
                        <SetScore score={score} />
                        {characters.map((character) => {
                            return (
                                <div key={character.id} className='character' >
                                    <img 
                                        src={character.url} 
                                        onClick={onCharacterSelect} 
                                        onMouseEnter={hover} 
                                        onMouseLeave={hover} 
                                        id={character.id} 
                                        className='characterImg'>
                                    </img>
                                    <h4 className="hidden" >{character.name}</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )

}