import logo from './logo.svg';
import './App.css';
import Saludar from './Saludo';
import EmailForm from './EmailForm';
import Quiniela from './Quiniela';
import {ApuestasProvider} from './ApuestasProvider'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
          <Quiniela></Quiniela>
        
      </header>
    </div>
  );
}

export default App;
