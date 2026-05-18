import { useState } from "react";
import "./cart.css";

const produtos = [
    { id: 1, nome: "Produto 1", preco: 99.90 },
    { id: 2, nome: "Produto 2", preco: 129.90 },
    { id: 3, nome: "Produto 3", preco: 59.90 },
    { id: 1, nome: "Produto 1", preco: 99.90 },
    { id: 2, nome: "Produto 2", preco: 129.90 },
    { id: 3, nome: "Produto 3", preco: 59.90 },
    { id: 1, nome: "Produto 1", preco: 99.90 },
    { id: 2, nome: "Produto 2", preco: 129.90 },
    { id: 3, nome: "Produto 3", preco: 59.90 },
];

export default function Cart() {
    const [aberto, setAberto] = useState(false);
    const [itens, setItens] = useState(produtos);

    const remover = (id) => setItens(itens.filter(i => i.id !== id));

    return (
        <div className="cart-wrapper">
            <button
                type="button"
                className="carrinho"
                onClick={() => setAberto(!aberto)}
            >
                <img src="../images/carrinho.png" alt="Carrinho" />
                {itens.length > 0 && (
                    <span className="carrinho-status">{itens.length}</span>
                )}
            </button>

            {aberto && (
                <div className="lista-container">
                    <ul className="carrinho-lista">
                        {itens.map(item => (
                            <li key={item.id}>
                                {item.nome},
                                {item.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                                <button onClick={() => remover(item.id)}>✕</button>
                            </li>
                        ))}
                    </ul>
                    <span>total: R$ {itens.reduce((acc, item) => acc + item.preco, 0).toFixed(2)}</span>
                    <button className="finalizar-compra">Finalizar Compra</button>
                </div>
            )}
        </div>
    );
}