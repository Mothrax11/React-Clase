import { useState } from "react";
function Buscador(event){
    const coches = [{Matricula: '1425BTY', Marca: 'Peugeot', Modelo:'3008', Tipo:'híbrido'}, 
        {Matricula:'1762MNY', Marca: 'Mercedes', Modelo:'EQS', Tipo:'Diesel'},
        {Matricula: '9882TPK', Marca: 'Renault', Modelo:'4 E-Tech', Tipo:'Eléctrico'},
        {Matricula: '6634TRV', Marca: 'Volswagen', Modelo:'Golf', Tipo:'Gasolina'},
        {Matricula: '2285RPL', Marca: 'Toyota', Modelo:'RAV4', Tipo:'hibrido'},
        {Matricula: '1782PRT', Marca: 'Peugeot', Modelo:'5008', Tipo:'diesel'}]
    const [texto, setTexto] = useState("");
    let valor = event.target[0].value 
    coches.forEach(element => {
        if(element.Marca.indexOf(valor > 0)){
            setTexto("Modelo encontrado: " + texto)
        }
    });

    const enviar = (event)=>{
        event.preventDefault();
        setTexto (coches + event.target[0].value)
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
export default  Buscador;
