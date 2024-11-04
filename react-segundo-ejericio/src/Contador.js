import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
        <button onClick={() => setContador(contador == 0)}>Resetear Contador</button>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button onClick={() => setContador(contador - 1)}>Decrementar</button>
    </div>
  );
}
export default Contador;
