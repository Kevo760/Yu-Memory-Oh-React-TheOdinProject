import React from 'react';
import '../styles/gamecard.css';


function Gamecard(props) {
    const {character, selectCard} = props
    
  return (
    <div className='gamecard' onClick={() => selectCard(character.id)}>
        <div className='gamecard-img-section'>
            <img src={character.image}/>
        </div>
        <h3>{character.name}</h3>
    </div>
  )
}

export default Gamecard