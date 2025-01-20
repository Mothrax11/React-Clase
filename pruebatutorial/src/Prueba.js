import { useState } from 'react';

function Prueba(){

    const [miValor, setMiValor] = useState("");
    
    const handlerValor = (e) => {
        e.prevent.default();
        setMiValor(e.target.value);
    };

    const handlerSubmit = (e) => {
        <p>{miValor}</p>
        setMiValor (e.target.value);
    };




    return (
        <div>
            
            <form onSubmit={(e => handlerValor(e))}>
                <input type='text'></input>
                <button type='submit' onClick={handlerSubmit}>Enviar</button>
            </form>
            <p>{miValor}</p>
        </div>
    );

}
export default Prueba;