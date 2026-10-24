import { createContext, useContext, useState, type ReactNode } from "react";

export type Produto = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagem: string;
}
type ItemCarrinho = {
    produto: Produto;
    quantidade: number;
}
type CartContextType = {
    itens: ItemCarrinho[];
    adicionar: (produto:Produto) => void;
    remover: (id:number) => void;
    alterarQtd: (id:number, quantidade: number) => void;
    totalItens: number;
    totalPreco: number;
}
const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: {children: ReactNode}){
    const [itens, setItens] = useState<ItemCarrinho[]>([]);

    function adicionar(produto: Produto){
        setItens((atuais) => {
            const existente = atuais.find((item) =>
                 item.produto.id === produto.id)
            if (existente){
                return atuais.map((item) =>
                item.produto.id === produto.id ? { ...item, quantidade: item.quantidade + 1}: item
            )
            }
            return [...atuais, { produto, quantidade: 1}]
        })
    }
    function remover(id:number){
        setItens((atuais) => atuais.filter((item) => item.produto.id !== id))
    }
    function alterarQtd(id:number, quantidade:number){
        if(quantidade <0){
            remover(id)
            return
        }
        setItens((atuais) => atuais.map((item) => item.produto.id === id ? {...item, quantidade}: item
    )
    )
    }
    const totalItens = itens.reduce((total, item) => total + item.quantidade, 0)
    const totalPreco = itens.reduce((total, item) => total + item.produto.preco * item.quantidade, 0)

    return(
        <CartContext.Provider
        value={{
            itens,
            adicionar,
            remover,
            alterarQtd,
            totalItens,
            totalPreco,
        }} >
            {children} 
        </CartContext.Provider>
    )
}

export function useCarrinho(){
    const contexto = useContext(CartContext)
    if (!contexto){
        throw new Error("useCarrinho deve ser usado dentro de cart provider")
    }

return contexto
}
