import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Página Inicial</Link></li>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/books">Lista de Livros</Link></li>
                <li><Link to="/add">Cadastrar</Link></li>
            </ul>
        </nav>

    );
}
export default NavBar;