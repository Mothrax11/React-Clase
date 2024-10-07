import logo from './Logo_Mothrax_Redondo.png';
import './App.css';
import Square from './Square';
import {useState} from  'react';

const solution ='CLASE';
function App() {
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [messageWinner, setMessageWinner] = useState("");

  const guesses = ["     ", "     ","     " , "     ", "     "];

  return (
    <div className="App">
      <header className="App-header">
        <p>
          WORDLE
        </p>
      </header>
      <p>
        <div className='board'>
          
          <div id="row"  className='row' > 
            <Square row="1" column="1" attempt={currentAttempt}></Square>
            <Square row="1" column="2" attempt={currentAttempt}></Square>
            <Square row="1" column="3" attempt={currentAttempt}></Square>
            <Square row="1" column="4" attempt={currentAttempt}></Square>
            <Square row="1" column="5" attempt={currentAttempt}></Square>
          </div>
          <div id="row" className='row'  > 
            <Square row="2" column="1" attempt={currentAttempt}></Square>
            <Square row="2" column="2" attempt={currentAttempt}></Square>
            <Square row="2" column="3" attempt={currentAttempt}></Square>
            <Square row="2" column="4" attempt={currentAttempt}></Square>
            <Square row="2" column="5" attempt={currentAttempt}></Square>
          </div>
          <div id="row" className='row'  > 
            <Square row="3" column="1" attempt={currentAttempt}></Square>
            <Square row="3" column="2" attempt={currentAttempt}></Square>
            <Square row="3" column="3" attempt={currentAttempt}></Square>
            <Square row="3" column="4" attempt={currentAttempt}></Square>
            <Square row="3" column="5" attempt={currentAttempt}></Square>
          </div>
          <div id="row" className='row'  > 
            <Square row="4" column="1" attempt={currentAttempt}></Square>
            <Square row="4" column="2" attempt={currentAttempt}></Square>
            <Square row="4" column="3" attempt={currentAttempt}></Square>
            <Square row="4" column="4" attempt={currentAttempt}></Square>
            <Square row="4" column="5" attempt={currentAttempt}></Square>
          </div>
          <div id="row" className='row'  > 
            <Square row="5" column="1" attempt={currentAttempt}></Square>
            <Square row="5" column="2" attempt={currentAttempt}></Square>
            <Square row="5" column="3" attempt={currentAttempt}></Square>
            <Square row="5" column="4" attempt={currentAttempt}></Square>
            <Square row="5" column="5" attempt={currentAttempt}></Square>
          </div>
          </div>
      </p>

    </div>
  );
}
export default App;

