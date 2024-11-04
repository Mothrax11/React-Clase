import './App.css';
import MiComponente  from './MiComponente';
import Contador  from './Contador';
import Formulario from './Formulario';

function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <Contador></Contador>
        <Formulario><p>hola</p></Formulario>
      </header>
    </div>
    </>
  );
}

export default App;
