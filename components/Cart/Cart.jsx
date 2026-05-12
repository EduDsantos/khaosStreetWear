import React from "react";
import "./cart.css";


export default function Cart() {


    return (
        <>

            <button type='button' className="carrinho">
                <img src="../images/carrinho.png" alt="" />
                <span className='carrinho-status'>1</span>
            </button>

            <div className="lista-container">
                <option value="">
                    <ul className="carrinho-lista">
                        <li>Produto 1</li>
                        <li>Produto 2</li>
                        <li>Produto 3</li>
                        <li>Produto 3</li>
                        <li>Produto 3</li>
                        <li>Produto 3</li>
                        <li>Produto 3</li>
                        <li>Produto 3</li>
                    </ul>
                </option>
            </div>
        </>
    )
}