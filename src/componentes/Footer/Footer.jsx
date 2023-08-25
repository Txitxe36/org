import "./Footer.css"

const Footer = ()=>{
    return <footer className='footer' style={{backgroundImage:"url(/img/footer.png)"}}>
        <div className="redes">
            <a href="https://www.aluracursos.com/">
                <img src="/img/facebook.png" alt="facebook"/>
            </a>
            <a href="https://www.aluracursos.com/">
                <img src="/img/twitter.png" alt="facebook"/>
            </a>
            <a href="https://www.aluracursos.com/">
                <img src="/img/instagram.png" alt="facebook"/>
            </a>
        </div>
        <img src="/img/Logo.png" alt="org"></img>
        <strong>Desarrollado por Miguel García</strong>
    </footer>
}

export default Footer