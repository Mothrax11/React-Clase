import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import Layout from './Layout';
import PopUp from './Popup';
import Mockup from './Mockup'

function App() {
  return (
    <div>
      <header className='App-header'>
      <Layout></Layout>
      <Mockup></Mockup>
      </header>
    </div>
    
  );
}

export default App;
