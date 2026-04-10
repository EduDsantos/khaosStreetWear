import './header.css'

function Header() {
    return (
        <>
            <title className='tituloNavegador'>Khaos Street Wear</title>
            

            <div className="navBarHeader">
                <div className="logo">
                    <img src="../images/logo.png" alt="Logo" />
                </div>
                <ul className="links">
                    <li><a href="#">Lançamentos</a></li>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </div>

            <div className="header">
                <img src="#" alt="" />
                <h1 className='h1Title'>KHAOS</h1>
                <h2 className='h2Title'>Moda StreetWear</h2>
            </div>

        </>
    )
}

export default Header 