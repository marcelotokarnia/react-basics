import { useState } from 'react';

const Concatenador = () => {
  const [palavraAtual, mudadorDePalavraAtual] = useState('Sté');
  return (
    <div>
      <div>
        <button onMouseLeave={() => mudadorDePalavraAtual(palavraAtual + 'é')}>
          +é
        </button>
      </div>
      <div>
        <span>{palavraAtual}</span>
      </div>
    </div>
  );
};

export default Concatenador;
