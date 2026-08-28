import { useState } from 'react';

function Estatisticas() {
  const [numero, setNumero] = useState(() => Math.floor(Math.random() * 100) + 1);

  function gerar() {
    setNumero(Math.floor(Math.random() * 100) + 1);
  }

  const raiz = Math.sqrt(numero).toFixed(2);
  const arredondado = Math.round(Number(raiz));

  return (
    <section className="container">
      <h2>Estatísticas com Math</h2>
      <p>Número aleatório: <strong>{numero}</strong></p>
      <p>Raiz quadrada: <strong>{raiz}</strong></p>
      <p>Raiz arredondada: <strong>{arredondado}</strong></p>
      <button onClick={gerar}>Gerar novo número</button>
    </section>
  );
}
export default Estatisticas;
