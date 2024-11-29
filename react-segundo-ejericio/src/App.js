import './App.css';
import MiComponente  from './MiComponente';
import Contador  from './Contador';
import Formulario from './Formulario';
import Visible from './Visible';
import Tareas from './Tareas';
import Buscador from './Buscador';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Default")

  return (
    <>
    <div className="App">
      <header className="App-header">
        <Contador></Contador>
        <Formulario></Formulario>
        <Visible></Visible>
        <Tareas></Tareas>
        <Buscador></Buscador>
        <div>
          <input type='text' onChange={(e) => setName(e.target.value)}></input>
        </div>
      </header>
    </div>
    </>
  );
}

export default App;
