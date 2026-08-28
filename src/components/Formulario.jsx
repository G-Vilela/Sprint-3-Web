import { useState } from 'react';

function Formulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [resultado, setResultado] = useState('');
  const [tipo, setTipo] = useState('');

  function enviar() {
    if (!nome || !email) {
      setResultado('Preencha todos os campos');
      setTipo('erro');
      return;
    }
    if (!email.includes('@')) {
      setResultado('Digite um e-mail válido');
      setTipo('erro');
      return;
    }

    const dados = { nome, email, data: new Date().toLocaleString('pt-BR') };
    localStorage.setItem('formulario', JSON.stringify(dados));
    setResultado('Formulário enviado e salvo com sucesso');
    setTipo('sucesso');
  }

  return (
    <section className="container">
      <h2>Formulário</h2>
      <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
      <button onClick={enviar}>Enviar</button>
      <p className={tipo}>{resultado}</p>
    </section>
  );
}
export default Formulario;
