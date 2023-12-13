import './App.css';
import CardList from './components/CardList.js';
import {useState, createContext} from 'react'
import dataBase from './Data/data.json'

export const AppContext = createContext()

function App() {
  const [score, setScore] = useState(0)
   const [HeroList, setList] = useState(dataBase.superheroes)
   const [total, settotal] = useState(0)

  return (
    <div className="App">
      <div style={{display:'flex', padding:'20px', justifyContent: 'space-between', maxWidth: '800px', margin: 'auto', textAlign:'left'}}>
        <div>
        <h1>Superheroes Memory Game</h1>
        <p>Get points by clicking on an image but don't click on any more then once!</p>
        </div>
        <div style={{fontSize:'30px', padding: '10px'}}>Now: {score} Best: {total}</div>
      </div>
      <AppContext.Provider value={{score, setScore, HeroList, setList, total, settotal}}>
      <CardList/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
