
import { useState} from 'react';


function Formulario() {
    const [texto, setTexto] = useState("");
    const enviar = (event)=>{
        event.preventDefault();
        setTexto ("Bienvenido, " + event.target[0].value)
    }
    return (
      <div>
        <form onSubmit={(e => enviar(e))}>
        <input type='text' id='inputText'></input>
        <button type='submit'>Enviar</button>
        <p>{texto}</p>
        </form>  
      </div>
    );
  }
  
      
export default Formulario;
