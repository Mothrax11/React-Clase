import React, { createContext, useState, useEffect } from "react";

// Creamos el contexto
export const ApuestasContext = createContext();

export const ApuestasProvider = ({ children }) => {
    const [apuestasItem, setApuestasItem] = useState([]);

    const anadirANuevaLista = (apuesta) => {
        setApuestasItem([...apuestasItem, apuesta]);
    };

    const cargarApuesta = (data) => {
        const aux_data = [];
        let i = 0;
        for (i = 0; i < data.length; i++) {
            let aux_element = data[i];
            aux_element["id"] = i;
            aux_data.push(aux_element);
        }
        setApuestasItem(aux_data);
    };

    const fetchApuestas = async () => {
        const response = await fetch('quinielas.json');
        const data = await response.json();
        cargarApuesta(data.apuestas);
    };

    useEffect(() => {
        fetchApuestas();
    }, []);

    return (
        <ApuestasContext.Provider value={{ apuestasItem }}>
            {children}
        </ApuestasContext.Provider>
    );
};
export default ApuestasProvider;
