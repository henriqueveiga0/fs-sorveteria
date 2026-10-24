import { Link } from "react-router-dom"
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { useCarrinho } from "../context/CartContext"
import "./Carrinho.css"

function Carrinho(){
   const {
        itens,
        remover,
        alterarQtd,
        totalItens,
        totalPreco
     } = useCarrinho()
     const formatarPreco = (valor: number) => valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
     })
    return(
       <main className="pagina-carrinho">
            <h1>Meu carrinho</h1>
            <p className="carrinho-subtitulo">Confira os sabores que você escolheu</p>
            {itens.length === 0 ? (
                <section className="carrinho-vazio">
                    <ShoppingBag size={48} />
                    <h2>Seu carrinho está vazio</h2>
                    <p>Que tal escolher um sorvete para começar?</p>
                    <Link to="/produtos" className="botao-voltar">
                        Explorar produtos
                    </Link>
                </section>
            
            ): (
                <div className="carrinho-layout">
                    <section className="lista-carrinho">
                        {itens.map((item) => (
                            <article className="item-carrinho" key={item.produto.id}>
                                <img src={item.produto.imagem} alt={item.produto.nome} />

                                <div className="item-detalhes">
                                    <h2>{item.produto.nome}</h2>
                                    <p>{formatarPreco(item.produto.preco)}</p>
                                    <div className="quantidade-controle">
                                        <button onClick={() => alterarQtd(item.produto.id, item.quantidade - 1)} aria-label="Diminuir quantidade">
                                            <Minus size={16} />
                                        </button>
                                        <span>{item.quantidade}</span>
                                        <button onClick={() => alterarQtd(item.produto.id, item.quantidade + 1)} aria-label="Aumentar quantidade">
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>

                                <div className="item-total">
                                    <strong>
                                        {formatarPreco(item.produto.preco * item.quantidade)}
                                    </strong>
                                    <button className="botao-remover" onClick={() => remover(item.produto.id)} aria-label={`Remover ${item.produto.nome}`}>
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </section>

                    <aside className="resumo-carrinho">
                        <h2>Resumo do pedido</h2>
                        <div>
                            <span>Quantidade de itens</span>
                            <strong>{totalItens}</strong>
                        </div>
                        <div className="resumo-total">
                            <span>Total</span>
                            <strong>{formatarPreco(totalPreco)}</strong>
                        </div>
                        <button className="botao-finalizar" onClick={() => alert("O checkout será implementado dps")}>
                            Continuar compra
                        </button>
                        <Link to="/produtos" className="link-continuar">Continuar escolhendo</Link>
                    </aside>
                </div>
            )}
       </main>
    )
}
export default Carrinho