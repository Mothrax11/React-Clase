import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import  Productos  from './components/Productos';
import  Home  from './components/Home';
import  About  from './components/About';
import  Layout  from './components/Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/productos/:prodId?" element={<Productos />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
