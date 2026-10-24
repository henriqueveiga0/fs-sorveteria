import { Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react"
import { useCarrinho, type Produto } from "../context/CartContext"
import "./Produtos.css"
import Baunilha from "../assets/sorvete-baunilha.jpeg"
import Morango from "../assets/sorvete-morango.jpeg"
import Pistache from "../assets/sorvete-pistache.jpeg"
import Flocos from "../assets/sorvete-flocos.jpeg"
import DoceLeite from "../assets/sorvete-doce-leite.jpeg"
import Chocolate from "../assets/sorvete-chocolate.jpeg"

const produtos: Produto[] = [
  {
    id: 1,
    nome: "Morango Cremoso",
    descricao: "Sorvete suave com sabor de morango.",
    preco: 12,
    imagem: Morango,
  },
  {
    id: 2,
    nome: "Chocolate Belga",
    descricao: "Uma combinação intensa de chocolate.",
    preco: 14,
    imagem: Chocolate,
  },
  {
    id: 3,
    nome: "Baunilha Clássica",
    descricao: "Cremoso, delicado e irresistível.",
    preco: 10,
    imagem: Baunilha,
  },
  {
    id: 4,
    nome: "Cookies & Cream",
    descricao: "Creme gelado com sabor de biscoito.",
    preco: 15,
    imagem: Flocos,
  },
  {
    id: 5,
    nome: "Pistache",
    descricao: "Um sabor marcante e especial.",
    preco: 16,
    imagem: Pistache,
  },
  {
    id: 6,
    nome: "Doce de Leite",
    descricao: "",
    preco: 13,
    imagem: DoceLeite
  },
];


function Produtos(){
    const { adicionar, totalItens } = useCarrinho()

    return(
      <main className="pagina-produtos">
        <section className="produtos-header">
            <span className="produtos-tag">Nossos sabores</span>
            <h1>Encontre seu próximo favorito!</h1>
            <p>Descubra os sabores preparados para adoçar seu dia</p>
            <Link to="/carrinho" className="botao-carrinho">
            <ShoppingCart size={18} />
            Carrinho ({totalItens})
            </Link>
        </section>

        <section className="produtos-grid">
            {produtos.map((produto) => (
                <article className="produto-card" key={produto.id}>
                    <img src={produto.imagem} alt={produto.nome} className="produto-imagem" />
                     <div className="product-info">
                                <h3>{produto.nome}</h3>
                                <p>{produto.descricao}</p>
                            </div>
                    <div className="produto-rodape">
                        <strong >
                            {produto.preco.toLocaleString("pt-BR",
                                {style: "currency",
                                    currency: "BRL",
                                }
                            )}
                        </strong>
                        <button className="botao-adicionar" onClick={() => adicionar(produto)} aria-label={`Adicionar ${produto.nome}`}
                            >
                                <ShoppingCart size={17} />
                        </button>
                    </div>
                    </article>
            ))}
        </section>

      </main>
    )
}
export default Produtos