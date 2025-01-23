import './styles/App.scss'

import {useState} from 'react';

function App() {
    const [name, setName] = useState(''); 
    const handleInputName = (ev) => {
      setName (ev.target.value)
      console.log (name);
    }
  return (
    <div className="page">
      <header>
        <h1>¡Cuidado con Grogu {name}! </h1>
      </header>
      <main className="page">
        <form > Tu nombre
          <input type="text" name= "nombre" id= "nombre" onInput={handleInputName}/>
        </form>
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
          <button className="dice">Lanzar Dado</button>
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
    </div>
  )
}

export default App
