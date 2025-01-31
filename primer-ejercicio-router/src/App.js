import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import  Inicio  from './components/Inicio';
import  Layout from './components/Layout';
import Formulario from './components/Formulario';
import Perfil from './components/Perfil';
import AcercaDeMi from './components/AcercaDeMi';
import CasosDeExito from './components/CasosDeExito';
import TipsParaProfesionales from './components/TipsParaProfesionales';
import Bio from './components/CasosDeExito';
import MiTrabajo from './components/MiTrabajo';
import Clientes from './components/Clientes';
import Logros from './components/Logros';
import Contacto from './components/Contacto';
import Llamame from './components/Llamame';
import RedesSociales from './components/RedesSociales';
import DejaUnMensaje from './components/DejaUnMensaje';
import ComoColaborar from './components/ComoColaborar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              
              <Route path='/Inicio' element={<Inicio/>} />
              <Route path='/Inicio/Formulario' element={<Formulario/>} />
              <Route path='/Inicio/Perfil' element={<Perfil/>} />

              <Route path='/AcercaDeMi' element={<AcercaDeMi/>} />
              <Route path='/AcercaDeMi/Bio' element={<Bio/>} />
              <Route path='/AcercaDeMi/MiTrabajo' element={<MiTrabajo/>} />
              <Route path='/AcercaDeMi/TipsParaProfesionales' element={<TipsParaProfesionales/>} />

              <Route path='/CasosDeExito' element={<CasosDeExito/>} />
              <Route path='/CasosDeExito/Clientes' element={<Clientes/>} />
              <Route path='/CasosDeExito/Logros' element={<Logros/>} />
              <Route path='/CasosDeExito/ComoColaborar' element={<ComoColaborar/>} />

              <Route path='/Contacto' element={<Contacto/>} />
              <Route path='/Contacto/RedesSociales' element={<RedesSociales/>} />
              <Route path='/Contacto/DejaUnMensaje' element={<DejaUnMensaje/>} />
              <Route path='/Contacto/Llámame' element={<Llamame/>} />
              
            </Route>
          </Routes>
          
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
