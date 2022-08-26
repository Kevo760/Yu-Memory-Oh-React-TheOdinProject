import React from 'react';
import Gamecard from '../components/Gamecard';
import '../styles/cardcontainer.css';

function CardContainer(props) {
    const { characters, shuffle } = props

    const chara = characters.map(character => <Gamecard character={character} key={character.id} shuffle={shuffle}/>)

  return (
    <div className='card-container'>
        {chara}
    </div>
  )
}

export default CardContainer