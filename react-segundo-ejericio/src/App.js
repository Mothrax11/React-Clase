import './App.css';
import MiComponente  from './MiComponente';
import Contador  from './Contador';
import Formulario from './Formulario';
import Visible from './Visible';
import Tareas from './Tareas';
import Buscador from './Buscador';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <Contador></Contador>
        <Formulario></Formulario>
        <Visible></Visible>
        <Tareas></Tareas>
        <Buscador></Buscador>
      </header>
    </div>
    </>
  );
}

export default App;
