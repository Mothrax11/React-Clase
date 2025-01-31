import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <a href="/Inicio">Inicio</a>
            <ul>
              <li>
                <a href="/Inicio/Formulario">Formulario</a>
              </li>
              <li>
                <a href="/Inicio/Perfil">Perfil</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/AcercaDeMi ">Acerca de mí</a>
            <ul>
              <li>
                <a href="/AcercaDeMi/Bio">Bio</a>
              </li>
              <li>
                <a href="/AcercaDeMi/MiTrabajo">Mi Trabajo</a>
              </li>
              <li>
                <a href="/AcercaDeMi/TipsParaProfesionales">Tips Para Profesionales</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/CasosDeExito">Casos de éxito</a>
            <ul>
              <li>
                <a href="/CasosDeExito/Clientes">Clientes</a>
              </li>
              <li>
                <a href="/CasosDeExito/Logros">Logros</a>
              </li>
              <li>
                <a href="/CasosDeExito/ComoColaborar">Cómo Colaborar</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/Contacto">Contacto</a>
            <ul>
              <li>
                <a href="/Contacto/RedesSociales">Redes Sociales</a>
              </li>
              <li>
                <a href="/Contacto/DejaUnMensaje">Deja Un Mensaje</a>
              </li>
              <li>
                <a href="/Contacto/Llámame">Llámame</a>
              </li>
            </ul>
          </li>
        </ul>
        <Outlet></Outlet>
      </header>
      <footer>{/* Información de contacto y enlaces */}</footer>
    </div>
  );
};
export default Layout;
