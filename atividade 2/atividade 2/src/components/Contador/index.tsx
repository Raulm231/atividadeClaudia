import { useState } from 'react';
import './Contador.css';

export default function Contador({ inicial = 0 }) {
  const [contador, setContador] = useState(inicial);

  return (
    <div className="contador">
      <p>Valor atual: {contador}</p>
      <div className="contador-botoes">
        <button onClick={() => setContador(c => c + 1)}>Incrementar</button>
        <button onClick={() => setContador(c => c - 1)}>Decrementar</button>
      </div>
    </div>
  );
}