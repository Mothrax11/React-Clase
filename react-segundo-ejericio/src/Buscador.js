import { useState } from "react";

function Buscador() {
    const coches = [
        { Matricula: '1425BTY', Marca: 'Peugeot', Modelo: '3008', Tipo: 'híbrido' },
        { Matricula: '1762MNY', Marca: 'Mercedes', Modelo: 'EQS', Tipo: 'Diesel' },
        { Matricula: '9882TPK', Marca: 'Renault', Modelo: '4 E-Tech', Tipo: 'Eléctrico' },
        { Matricula: '6634TRV', Marca: 'Volkswagen', Modelo: 'Golf', Tipo: 'Gasolina' },
        { Matricula: '2285RPL', Marca: 'Toyota', Modelo: 'RAV4', Tipo: 'híbrido' },
        { Matricula: '1782PRT', Marca: 'Peugeot', Modelo: '5008', Tipo: 'Diesel' }
    ];

    const [texto, setTexto] = useState("");
    const [resultado, setResultado] = useState("");

    const enviar = (event) => {
        event.preventDefault(); 
        const valor = texto.toLowerCase();
        const coincidencias = coches.filter(coche =>
            coche.Marca.toLowerCase().includes(valor) || 
            coche.Modelo.toLowerCase().includes(valor)
        );

        if (coincidencias.length > 0) {
            setResultado(`Modelos encontrados: ${coincidencias.map(coche => `${coche.Marca} ${coche.Modelo}`).join(", ")}`);
        } else {
            setResultado("No se encontraron coincidencias.");
        }
    };

    return (
        <div>
            <form onSubmit={enviar}>
                <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Escribe la marca o modelo"/>
                <button type="submit">Buscar</button>
            </form>
            <p>{resultado}</p>
        </div>
    );
}

export default Buscador;