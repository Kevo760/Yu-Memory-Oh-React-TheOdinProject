import { useState } from 'react';
import './App.css';
import Gamecard from './components/Gamecard';
import Header from './components/Header';
import Scorebar from './components/Scorebar';
import alexis from './images/alexis.png';
import jaden from './images/jaden.png';
import kaiba from './images/kaiba.png';
import mai from './images/mai.png';
import marik from './images/marik.png';
import jack from './images/jack.png';
import joey from './images/joey.png';
import yami from './images/yami.png';
import yusei from './images/yusei.png';
import zane from './images/zane.png';
import CardContainer from './components/CardContainer';


function App() {
  const [ characters, setCharacters ] = useState([
    {
      name: 'ALEXIS',
      id: 1,
      selected: true,
      image: alexis
    },
    {
      name: 'JADEN',
      id: 2,
      selected: true,
      image: jaden
    },
    {
      name: 'KAIBA',
      id: 3,
      selected: true,
      image: kaiba
    },
    {
      name: 'MAI',
      id: 4,
      selected: true,
      image: mai
    },
    {
      name: 'MARIK',
      id: 5,
      selected: true,
      image: marik
    },
    {
      name: 'JACK',
      id: 6,
      selected: false,
      image: jack
    },
    {
      name: 'JOEY',
      id: 7,
      selected: false,
      image: joey
    },
    {
      name: 'YAMI',
      id: 8,
      selected: false,
      image: yami
    },
    {
      name: 'YUSEI',
      id: 9,
      selected: false,
      image: yusei
    },
    {
      name: 'ZANE',
      id: 10,
      selected: false,
      image: zane
    },
  ])

  const [currentPoints, setCurrentPoints] = useState(0)

  const resetCurrentPoints = () => {
    setCurrentPoints(0)
  }

  const incrementCurrentPoints = () => {
    setCurrentPoints(prevPoints => prevPoints + 1)
  }

  const [highestPoints, setHighestPoints] = useState(0)

  const increasePoints = () => {
    // If current points is greater or equal to 10 reset points
    if(currentPoints >= 10) {
      resetCurrentPoints()
      incrementCurrentPoints()
    } else {
      increasePoints()
    }

    if(currentPoints >= highestPoints) {
      setHighestPoints(currentPoints)
    }
  }

  // Shuffles the objects in the array
  const shuffle = () => {
    for(let i = characters.length; --i;) {
      let j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]]
    }
    setCharacters([...characters])
  }


  const selectCard = (id) => {
    // loop over the characters to find the character id
    let updatedCharacters = characters.map(character => {
        if(character.id === id && character.selected === false) {
          return {...character, select: true}
        } else if(character.id === id && character.selected === true) {
          return resetAllSelectedToFalse()
        }
      })
  }

  const resetAllSelectedToFalse = () => {
    // Go through all characters
    const updatedCharacters = characters.map(character => {
      // If character selected is true set character selected to false
      if(character.selected === true) {
        return {...character, selected: false}
      }
      return character
    })
    // sets updated characters
    setCharacters(updatedCharacters)
  }

  return (
    <div className="App">
      <Header />
      <Scorebar />
      <button onClick={() => console.log(characters)}>Click Me</button>
      <CardContainer characters={characters} shuffle={shuffle}/>
    </div>
  );
}

export default App;
