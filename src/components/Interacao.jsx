import { useState } from 'react';

function Interacao() {
  const [texto, setTexto] = useState('Clique nos botões acima');

  function mostrarPrompt() {
    const nome = prompt('Digite seu nome:');
    if (nome) {
      setTexto(`Olá, tenha um ótimo dia ${nome}`);
      localStorage.setItem('nomeVisitante', nome);
    }
  }

  return (
    <section className="container">
      <h2>Menu de interação</h2>
      <button onClick={() => alert('Usamos React e JavaScript para fazer esse trabalho!')}>Mostrar Alerta</button>
      <button onClick={mostrarPrompt}>Mostrar Prompt</button>
      <div id="caixa">{texto}</div>
    </section>
  );
}
export default Interacao;
