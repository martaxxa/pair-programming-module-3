import '../styles/App.scss'

import {useState} from 'react';

import Header from './Header';
import Footer from './Footer';


function App() {
  //selectores de contenido 
    const [dice, setDice] = useState(); 
    const [text, setText] = useState();

  // Estado de los elementos
    const [items, setItems] = useState([
      { type: 'cookie', emoji: '🍪', count: 3 },
      { type: 'egg', emoji: '🥚', count: 3 },
      { type: 'frog', emoji: '🐸', count: 3 }
    ]);

   // Estado de la posición de Grogu
    const [groguPosition, setGroguPosition] = useState(0);
   

    const handleInputDice = (ev) => {
      const numeroAleatorio = Math.floor(Math.random() * 4) + 1; 
      setDice(numeroAleatorio);

      let newText = '';
      let newItems = [...items];
      let newPosition = groguPosition;


      if ( numeroAleatorio === 1 ) {
        setText (`el número es ${numeroAleatorio}: has descargado una galleta`);
      } else if ( numeroAleatorio === 2 ) {
        setText (`el número es ${numeroAleatorio}: has descargado un huevo`);
      } else if ( numeroAleatorio === 3) { 
        setText (`el número es ${numeroAleatorio}: has descargado una rana`);   
      } else {
        setText (`el número es ${numeroAleatorio}: Grogu avanza`);
      };     
      
      setText(newText);
      setItems(newItems);
      setGroguPosition(newPosition);

      // Función para actualizar el recuento de elementos
      const updateItemCount = (items, type) => {
        items.map(item =>
          item.type === type && item.count > 0
            ? { ...item, count: item.count - 1 }
            : item
          );

    };
      
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
          {/* <div className="game-status">{text}</div> */}
        </section>
        <div className="game-status">{text}</div>

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
}

export default App