import { useEffect, useState } from 'react';
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
      selected: false,
      image: alexis
    },
    {
      name: 'JADEN',
      id: 2,
      selected: false,
      image: jaden
    },
    {
      name: 'KAIBA',
      id: 3,
      selected: false,
      image: kaiba
    },
    {
      name: 'MAI',
      id: 4,
      selected: false,
      image: mai
    },
    {
      name: 'MARIK',
      id: 5,
      selected: false,
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

  const [currentScore, setCurrentScore] = useState(0)

  const resetCurrentScore = () => {
    setCurrentScore(0)
  }

  const incrementCurrentScore = () => {
    setCurrentScore(prevScore => prevScore + 1)
  }

  const [highestScore, setHighestScore] = useState(0)

  const scoreHandler = () => {
    // If score is greater than 9 reset current score and reset selected to false else increment score
    if(currentScore > 9) {
      resetCurrentScore()
      resetAllSelectedToFalse()
    } else {
      incrementCurrentScore()
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
    let reset = false;

    // loop over the characters to find the character id
    const updatedCharacters = characters.map(character => {
      // If character id matches and character select it false
        if(character.id === id && character.selected === false) {
          // Increase score and change selected on object to true
          scoreHandler()
          return {...character, selected: true}
          // If character id equals to id and character selected is true
        } else if(character.id === id && character.selected === true) {
          // Set reset to true and change current character selected to false
          reset = true
          return {...character, selected: false}
        } else return character
      
      })

      // If reset is true reset all selected to false and reset score
      if(reset) {
        resetAllSelectedToFalse()
        resetCurrentScore()
        // Else update characters
      } else {
        setCharacters(updatedCharacters)
      }
      
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

  // Updates on component did render and when current score is changed to shuffle
  useEffect(() => {
    shuffle()
    // If currenScore is higher than highestScore set highestScore equal to currentScore
    if(currentScore > highestScore) {
      setHighestScore(prevState => prevState = currentScore)
    }

    // If current score is 10 reset current score
    if(currentScore === 10) {
      resetCurrentScore();
    }
  }, [currentScore])

  return (
    <div className="App">
      <Header />
      <Scorebar currentScore={currentScore} highestScore={highestScore}/>
      <CardContainer characters={characters} selectCard={selectCard}/>
      {/* <Background /> */}
    </div>
  );
}

export default App;
