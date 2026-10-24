import { Link } from "react-router-dom";
import { ShoppingCart, IceCream } from "lucide-react";

function NavBar(){
    return(
        <header className="navbar">
            <Link to="/" className="logo">
                <IceCream size={28} />
                <span>Sorvetella</span>
            </Link>

            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/produtos">Produtos</Link>
                <Link to="/carrinho">

                <ShoppingCart size={18} />
                Carrinho
                </Link>
            </nav>

            <div className="nav-actions">
                <Link to="/login" className="login-link">Entrar</Link>
                <Link to="/cadastro" className="register-button">Criar Conta</Link>
            </div>
        </header>
    )
}
export default NavBar