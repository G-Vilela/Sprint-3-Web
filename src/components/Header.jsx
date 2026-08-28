function Header({ onLogout }) {
  return (
    <header>
      <h1>Projeto React</h1>
      <button className="btn-sair" onClick={onLogout}>Sair</button>
    </header>
  );
}
export default Header;
