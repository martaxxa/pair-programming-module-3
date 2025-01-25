import '../styles/App.scss'

import {useState} from 'react';

import Header from './Header';
import Footer from './Footer';


function App() {
  //selectores de contenido 
    const [dice, setDice] = useState(); 
  //funciones de interacción
    console.log(dice); 

    const handleInputDice = (ev) => {
      const numeroAleatorio = Math.floor(Math.random() * 4) + 1; 
      setDice(numeroAleatorio);
      if ( dice === 1 &&2 &&3) {

      }
    }
  return (
    <div className="page">
      <Header></Header>
      <main className="page">
        <section className="board">
          <div className="cell"><div class="grogu">👣</div></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </section>

        <section>
          <button className="dice" onClick={handleInputDice}>Lanzar Dado</button>
          <div className="game-status">En curso</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
