import React, { useState, useEffect } from 'react';
import './productos.css';  // Importa el archivo CSS

function Productos() {
  const [articles, setArticles] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("articulos.json");
      const data = await response.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  const agregarAlCarrito = (article) => {
    if (!carrito.some((item) => item.id === article.id)) {
      setCarrito([...carrito, article]);
    }
  };

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  const eliminarDelCarrito = (article) => {
    const newCarrito = carrito.filter((itemInCart) => itemInCart.id !== article.id);
    setCarrito(newCarrito);
  };

  return (
    <div>
      <button 
        className="carrito-btn" 
        onClick={toggleCarrito}
      >
        🛒
      </button>

      {mostrarCarrito && (
        <div className="carrito-popup">
          <h2>Carrito</h2>
          <ul className="carrito-lista">
            {carrito.map((item) => (
              <li key={item.id} className="carrito-item">
                <button className="eliminar-btn" onClick={() => eliminarDelCarrito(item)}>
                  ❌
                </button>
                {item.nombre} - ${item.precio}
              </li>
            ))}
          </ul>
          <button className="carrito-cerrar-btn" onClick={toggleCarrito}>
            Cerrar
          </button>
        </div>
      )}

      <div >
        <h1>Lista de Productos</h1>
        <ul className="producto-lista">
          {articles.map((article) => (
            <li key={article.id} className="producto-item">
              <div className="card">
                {article.nombre} - {article.descripcion} - ${article.precio}
                <button className="add-to-carrito-btn" onClick={() => agregarAlCarrito(article)}>
                  Añadir al carrito
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Productos;
