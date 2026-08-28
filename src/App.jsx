import { useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import Interacao from './components/Interacao';
import Formulario from './components/Formulario';
import Estatisticas from './components/Estatisticas';
import Footer from './components/Footer';

function App() {
  const [logado, setLogado] = useState(() => localStorage.getItem('usuarioLogado') === 'true');

  function entrar() {
    localStorage.setItem('usuarioLogado', 'true');
    setLogado(true);
  }

  function sair() {
    localStorage.removeItem('usuarioLogado');
    setLogado(false);
  }

  if (!logado) return <Login onLogin={entrar} />;

  return (
    <div className="app">
      <Header onLogout={sair} />
      <main>
        <Slideshow />
        <Interacao />
        <Formulario />
        <Estatisticas />
      </main>
      <Footer />
    </div>
  );
}

export default App;
