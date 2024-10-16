import logo from './Logo_Mothrax_Redondo.png';
import './App.css';
import Square from './Square';
import {useState, textUpdate} from  'react';

export const solution ='CLASES';

const replaceAt = function(cadena, index, char){
  var a = cadena.split("");
  a[index] = char;
  return a.join("");
}

function App() {
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [messageWinner, setMessageWinner] = useState("");
  const guesses = ["      ", "      ","      " , "      ", "      ", "      "];

  
  const handleSquareChage=(parameters)  => {

      guesses[parameters.row-1] = replaceAt(guesses[parameters.row-1], 
      parameters.column-1, parameters.letter);
      let isAttemptComplete = true;
      for (let i = 0; i < 6; i++){
        if(guesses[parameters.row-1].charAt(i) == " "){
          isAttemptComplete = false;
          break;
        }
      }
      if(isAttemptComplete){
        if(guesses[parameters.row-1] == solution){
          setMessageWinner("¡Felicidades! Ganaste");
          setCurrentAttempt(10);
        }
      else {
        if(currentAttempt < 5){
          setCurrentAttempt(currentAttempt + 1);
        } else {
          setMessageWinner("Game Over");
          setCurrentAttempt(10);
        }
      }
    }
  }
    
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
            <Square row="1" column="1" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="1" column="2" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="1" column="3" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="1" column="4" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="1" column="5" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="1" column="6" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
          </div>
          <div id="row" className='row'  > 
            <Square row="2" column="1" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="2" column="2" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="2" column="3" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="2" column="4" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="2" column="5" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="2" column="6" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
          </div>
          <div id="row" className='row'  > 
            <Square row="3" column="1" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="3" column="2" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="3" column="3" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="3" column="4" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="3" column="5" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="3" column="6" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
          </div>
          <div id="row" className='row'  > 
            <Square row="4" column="1" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="4" column="2" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="4" column="3" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="4" column="4" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="4" column="5" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="4" column="6" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
          </div>
          <div id="row" className='row'  > 
            <Square row="5" column="1" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="5" column="2" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="5" column="3" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="5" column="4" attempt={currentAttempt} 
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="5" column="5" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
            <Square row="5" column="6" attempt={currentAttempt}
            textUpdate={(e) => handleSquareChage(e)}></Square>
          </div>
          </div>
      </p>
      <footer>Created by Mothrax</footer>
    </div>
    
  );
}
export default App;
