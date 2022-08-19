import React, { useState } from "react";
import uniqid from 'uniqid';
import { images } from './assets';

export function CharacterGrid() {
    const [score, setScore] = useState(0);
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
        {name: 'Sorayama x Arsham Rihanna', url: images['riri.PNG'], id: uniqid()},
        {name: 'Sacai Samurai Uzi', url: images['uzi.PNG'], id: uniqid()},
        {name: 'SamurYe', url: images['ye.PNG'], id: uniqid()}
    ]);

    return (
        <div className="gameContainer">
            <div className="extraBackground">
                <div className="glassBackground">
                    <div className="characterGrid">
                        {characters.map((character) => {
                            return (
                                <div key={character.id} className='character'>
                                    <img src={character.url}></img>
                                    <h4>{character.name}</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )

}