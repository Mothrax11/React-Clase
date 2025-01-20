import React, { useState, useEffect } from "react";

function VuelosPorDestino() {
  const [vuelos, setVuelos] = useState([]);

  useEffect(() => {
    const fetchVuelos = async () => {
      const response = await fetch('vuelos.json');
      const data = await response.json();
      setVuelos(data);
    };
    fetchVuelos();
  }, []); 

  const [selectedFlight, setSelectedFlight] = useState(null);
  const [listaVuelos, setListaVuelos] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(false);
  const [plazas, setPlazas] = useState(0);
 
 
  const añadirVuelo = (vuelo) => {
    setListaVuelos([...listaVuelos, vuelo])
  }

  const cerrarPopUp = (e) =>{
    setPlazas(0);
    setSelectedFlight(null);
  }

  const liberar = (plazas) => {
  setPlazas(plazas - 1);
  }

  const reservar = (plazas) => {
    setPlazas(plazas + 1);
  }

  return (
    <>
    <div>
      <h1>Vuelos por Destino</h1>
      {vuelos.map((destino, index) => (
        <div key={index}>
          <h2>{destino.destination}</h2>
          <ul>
            {destino.flights.map((vuelo, vueloIndex) => (
              <li key={vueloIndex}>
                {vuelo.number} - {vuelo.date}
                <button className="botones" onClick={() => setSelectedFlight({vuelo, destino})}>
                  Ver detalles
                </button>
                <button className="botones" onClick={() =>añadirVuelo(vuelo)}>Añadir a lista</button>
              </li>
            ))}
          </ul>
          <button className="botones" onClick={() => setMostrarLista(!mostrarLista)}>Mostrar lista de vuelos</button>
        </div>
      ))}
      {selectedFlight && (
        <div style={popUp.overlay}>
          <div style={popUp.vueloInfo}>
            <h3>Detalles del vuelo</h3>
            <p>Destino: {selectedFlight.destino.destination}</p>
            <p>Número: {selectedFlight.vuelo.number}</p>
            <p>Fecha: {selectedFlight.vuelo.date}</p>
            <p>Hora: {selectedFlight.vuelo.time}</p>
            <div>
              <p>Plazas: {selectedFlight.vuelo.seats}</p>
              <p>Plazas Libres: {selectedFlight.vuelo.seats - plazas}</p>
              <p>Plazas Ocupadas: {plazas}</p>

              <p>{selectedFlight.vuelo.seats - plazas > 0 ? <button className="botones" onClick={() => reservar(plazas, selectedFlight.vuelo.seats)}>Reservar plaza</button> : ""}</p>
              <p>{(selectedFlight.vuelo.seats - plazas !== selectedFlight.vuelo.seats)  ? <button className="botones" onClick={() => liberar(plazas, selectedFlight.vuelo.seats)}>Liberar plaza</button> : ""}</p>

              <p>{(selectedFlight.vuelo.seats - plazas <= 3) && (selectedFlight.vuelo.seats - plazas > 0) ? "Ultimas plazas disponibles, solo hay " + (selectedFlight.vuelo.seats - plazas) + " plazas más!" : ""}</p>
              <p>{selectedFlight.vuelo.seats - plazas === 0 ? "No hay plazas disponibles para este vuelo" : ""}</p>
            </div>
            <button className="botones" onClick={() => cerrarPopUp()}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
    <div>
      {mostrarLista && (
        <div style={popUp.overlay}>
          <div style={popUp.vueloInfo}>
            {listaVuelos.map(vuelo => (
              <li key={vuelo}>
                  <a>{vuelo.number} - {vuelo.date}</a>
              </li>
            ))}
            <button onClick={() => setMostrarLista(!mostrarLista)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
const popUp = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent:'flex-end',
    display: 'flex',
  },
  
  vueloInfo: {
    backgroundColor: '#fff',
    padding: '20px',
    width: '90%',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    color:'black',
  },
};
export default VuelosPorDestino;