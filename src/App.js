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
      image: alexis,
      selected: false
    },
    {
      name: 'JADEN',
      id: 2,
      image: jaden,
      selected: false
    },
    {
      name: 'KAIBA',
      id: 3,
      image: kaiba,
      selected: false
    },
    {
      name: 'MAI',
      id: 4,
      image: mai,
      selected: false
    },
    {
      name: 'MARIK',
      id: 5,
      image: marik,
      selected: false
    },
    {
      name: 'JACK',
      id: 6,
      image: jack,
      selected: false
    },
    {
      name: 'JOEY',
      id: 7,
      image: joey,
      selected: false
    },
    {
      name: 'YAMI',
      id: 8,
      image: yami,
      selected: false
    },
    {
      name: 'YUSEI',
      id: 9,
      image: yusei,
      selected: false
    },
    {
      name: 'ZANE',
      id: 10,
      image: zane,
      selected: false
    },
  ])

  // Shuffles the objects in the array
  const shuffle = () => {
    for(let i = characters.length; --i;) {
      let j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]]
    }
    setCharacters([...characters])
  }

  return (
    <div className="App">
      <Header />
      <Scorebar />
      <CardContainer characters={characters} shuffle={shuffle}/>
    </div>
  );
}

export default App;
