import "./App.css";
import Saludo from "./Saludos";
import Calculadora from "./Calculadora";
import Despedida from "./Despedida";

function App() {
  const mostrarSaludo = false;
  const coches = [{Matricula: '1425BTY', Marca: 'Peugeot', Modelo:'3008', Tipo:'híbrido'}, 
    {Matricula:'1762MNY', Marca: 'Mercedes', Modelo:'EQS', Tipo:'Diesel'},
    {Matricula: '9882TPK', Marca: 'Renault', Modelo:'4 E-Tech', Tipo:'Eléctrico'},
    {Matricula: '6634TRV', Marca: 'Volswagen', Modelo:'Golf', Tipo:'Gasolina'},
    {Matricula: '2285RPL', Marca: 'Toyota', Modelo:'RAV4', Tipo:'hibrido'},
    {Matricula: '1782PRT', Marca: 'Peugeot', Modelo:'5008', Tipo:'diesel'}] 


  return (
    <>
      <div className="App">
        <header className="App-header">
          <div>
            {mostrarSaludo ? (
              <Saludo nombre="Raúl" />
            ) : (
              <Despedida nombre="Raúl" />
            )}
          </div>
          <div class="StyledTextComponent">
            <ul>
              {coches.map(coches => (
                <div key={coches.Matricula}>{coches.Matricula} - {coches.Modelo} {coches.Marca} ({coches.Tipo})</div>
              ))}
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
