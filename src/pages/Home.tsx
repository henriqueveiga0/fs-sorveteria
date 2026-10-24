import { Link } from "react-router-dom"
import "./Home.css"
import Banner from "../assets/banner.png"
import Morango from "../assets/sorvete-morango.jpeg"
import Chocolate from "../assets/sorvete-chocolate.jpeg"
import Baunilha from "../assets/sorvete-baunilha.jpeg"

const produtos = [
    {
        id: 1,
        nome: "Morango Cremoso",
        desc: "Sorvete suave com sabor de morango",
        preco: "R$ 12,00",
        imagem: Morango
    },
    {
        id: 2,
        nome: "Chocolate Belga",
        desc: "Uma combinação intensa de chocolate",
        preco: "R$ 14,00",
        imagem: Chocolate
    },
    {
        id: 3,
        nome: "Baunilha Clássica",
        desc: "Cremoso, delicado e irresistível",
        preco: "R$ 10,00",
        imagem: Baunilha
    },
];

function Home(){
    return(
        <main className="home">
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-tag">Feito para adoçar seu dia</span>
                    <h1>Um mundo de sabores em cada colherada!</h1>
                    <p>Descubra seus novos sorvetes favoritos</p>
                    <Link to="/produtos" className="primary-button">Explorar sabores</Link>
                </div>
                <img src={Banner} alt="Sorvetes coloridos" className="hero-image" />
            </section>

            <section className="featured">
                <div className="section-heading">
                    <div>
                        <h2>Favoritos da Sorvetella</h2>
                        <p>Uma seleção especial para você</p>
                    </div>
                    <Link to="/produtos" className="text-link">Ver todos</Link>
                </div>

                <div className="product-grid">
                    {produtos.map((produto) =>(
                        <article className="product-card" key={produto.id}>
                            <img src={produto.imagem} alt={produto.nome} className="product-image" />
                            <div className="product-info">
                                <h3>{produto.nome}</h3>
                                <p>{produto.desc}</p>
                                <span className="product-price">{produto.preco}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

        </main>
    )
}
export default Home