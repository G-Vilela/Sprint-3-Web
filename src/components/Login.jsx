import { useState } from 'react';

function Login({ onLogin }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [tipo, setTipo] = useState('');

  function fazerLogin() {
    if (!usuario || !senha) {
      setMensagem('Preencha todos os campos');
      setTipo('erro');
      return;
    }

    if (usuario === 'Aluno Fiap' && senha === '1234') {
      localStorage.setItem('ultimoUsuario', usuario);
      setMensagem('Login realizado com sucesso');
      setTipo('sucesso');
      onLogin();
    } else {
      setMensagem('Usuário ou senha incorretos');
      setTipo('erro');
    }
  }

  return (
    <div className="tela active">
      <div className="container login">
        <h1>Login</h1>
        <input value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Usuário" />
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" />
        <button onClick={fazerLogin}>Entrar</button>
        <p className={tipo}>{mensagem}</p>
        <small>Usuário: Aluno Fiap | Senha: 1234</small>
      </div>
    </div>
  );
}

export default Login;
