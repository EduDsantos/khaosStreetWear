import './home.css'
import { useRef } from 'react'
import bolsa1 from '../../images/produtos/bolsa1.jpeg'
import bolsa2 from '../../images/produtos/bolsa2.jpeg'
import bolsa3 from '../../images/produtos/bolsa3.jpeg'
import bolsa4 from '../../images/produtos/bolsa4.jpeg'
import tattoo1 from '../../images/produtos/tattoo1.jpeg'
import tattoo2 from '../../images/produtos/tattoo2.jpeg'
import tattoo3 from '../../images/produtos/tattoo3.jpeg'
import tattoo4 from '../../images/produtos/tattoo4.jpeg'
import tattoo5 from '../../images/produtos/tattoo5.jpeg'
import tattoo6 from '../../images/produtos/tattoo6.jpeg'
import modelo1 from '../../images/modelo1.jpeg'
import modelo2 from '../../images/modelo2.jpeg'
import modelo3 from '../../images/modelo3.jpeg'
import modelo4 from '../../images/modelo4.jpeg'
import modelo5 from '../../images/modelo5.jpeg'
import logo from '../../images/logo.png'


export function Home() {



    return (
        <>

            <section className='vitrineSection'>
                <div className="vitrine">
                    <h2 className='h2Vitrine'>Produtos em Destaque</h2>
                    <div className="buttonsCarrocel">
                        <button className='buttonCarrocel1' >{"<"}</button>
                        <button className='buttonCarrocel2' >{">"}</button>
                    </div>
                    <div className="vitrineItens">
                        <img src={bolsa1} alt="bolsa1" />
                        <img src={bolsa2} alt="bolsa2" />
                        <img src={bolsa3} alt="bolsa3" />
                        <img src={bolsa4} alt="bolsa4" />
                        <img src={bolsa3} alt="bolsa3" />
                        <img src={bolsa4} alt="bolsa4" />
                        <img src={bolsa1} alt="bolsa1" />
                    </div>
                </div>
            </section>
            <section className="modeloSection">
                <div className="modeloFotos">
                    <div className="modelo5"><img src={modelo5} alt="Modelo 1" /></div>
                    <div className="modelo2"><img src={modelo2} alt="Modelo 2" /></div>
                    <div className="modelo3"><img src={modelo3} alt="Modelo 3" /></div>
                </div>
            </section>
            <section className="maisProdutos">
                <h2 className="h2maisProdutos">Veja mais do meu trabalho!</h2>
                <div className="vitrine">
                    <div className="buttonsCarrocel">
                        <button className='buttonCarrocel1' >{"<"}</button>
                        <button className='buttonCarrocel2' >{">"}</button>
                        <div className="vitrineItens">
                            <img src={tattoo1} alt="tattoo1" />
                            <img src={tattoo2} alt="tattoo2" />
                            <img src={tattoo1} alt="tattoo1" />
                            <img src={tattoo3} alt="tattoo3" />
                            <img src={tattoo2} alt="tattoo2" />
                            <img src={tattoo3} alt="tattoo3" />
                        </div>
                    </div>
                    <h2>Entre em contato para fazer o seu orçamento!</h2>
                </div>
            </section>
            <div className="infoKali">
                <img src={modelo1} className='modelo1' alt="Modelo 1" />
                <div className="textoSobre">
                    <img src={logo} className='logoSobre' alt="Logo" />
                    <h3>A Khaos surgiu para trazer uma nova abordagem para o mundo das vestimentas de rua e das tatuagens.
                        fundada em Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit maiores accusamus omnis, molestias ad aliquid at, repellendus quaerat corrupti sint perferendis iure rerum optio soluta magnam quisquam tenetur ipsa! Cum!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A similique vero rem voluptatum ea quis, at et aliquam quia rerum blanditiis dicta, commodi iure alias, laudantium facilis temporibus libero aspernatur.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus exercitationem dolorem consectetur quisquam eaque dolorum commodi provident voluptas impedit iusto dignissimos ex sit atque, debitis sint maxime quia. Aliquid, perspiciatis.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consequatur culpa rerum enim in eos incidunt doloremque? Beatae eveniet minima facilis neque dolorem minus, saepe mollitia temporibus cumque, accusamus harum!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptas, sunt animi at a cumque porro, nobis non velit quos ut. Ea totam quam distinctio suscipit veniam repellendus consectetur maiores?
                    </h3>
                </div>
            </div>



        </>
    )


}