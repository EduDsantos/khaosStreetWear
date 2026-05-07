import React from "react";
import "./cart.css";


export default function Cart() {


    return (
        <button type='button' className="carrinho">
            <img src="../images/carrinho.png" alt="" />
            <span className='carrinho-status'>1</span>
        </button>
    )
}