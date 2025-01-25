import {useState} from 'react';

function Header () {
     const [name, setName] = useState(''); 

    const handleInputName = (ev) => {
        setName (ev.target.value)
        console.log (name);
    }
    
    return (
    <div>
        <header>
            <h1>¡Cuidado con Grogu {name}! </h1>
        </header>
        <form > Tu nombre
          <input type="text" name= "nombre" id= "nombre" onInput={handleInputName}/>
        </form>
    </div>
    );
}

export default Header;