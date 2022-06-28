import { useState } from 'react';

const Contador = ({ tok }) => {
  const [numeroAtual, mudadorDeNumeroAtual] = useState(tok);
  return (
    <div>
      <div>
        <button onClick={() => mudadorDeNumeroAtual(numeroAtual + 1)}>
          +1
        </button>
      </div>
      <div>
        <span>{numeroAtual}</span>
      </div>
    </div>
  );
};

export default Contador;
