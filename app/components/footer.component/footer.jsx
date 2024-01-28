import { poppins } from '../fonts.js'
import Link from 'next/link.js'
import './footer.css'

export default function Footer() {
    return (
        <>
            <div className="linha" />
            <footer className={`footer ${poppins.className}`} >
                <div className="footerEsquerda">
                    <p className='pfooter'>Menu</p>
                    <ul>
                        <li><Link className="links" href="/">Home </Link></li>
                        <li><Link className="links" href="/#planes">Planos</Link></li>
                        <li><Link className="links" href="/">Sobre</Link></li>
                        <li><Link className="links" href="/">Suporte</Link></li>
                    </ul>

                </div>

                <div className="footerMeio">
                    <p className='pfooter'>Termos de privacidade</p>
                    <ul>
                        <li><Link className="links" href="/">Termos de uso</Link></li>
                        <li><Link className="links" href="/">Privacidade</Link></li>
                    </ul>
                    <p className='copyright'>Copyright @ 2023 Tutora.IA. Todos os direitos reservados.</p>

                </div>
                <div className="footerDireita">
                    <div>
                        <p className='pfooter'>Rede Social</p>
                        <ul>
                            <li><Link className="links" href="/">Instagram</Link></li>
                        </ul>
                    </div>
                    <div>
                        <p className='pfooter'>E-mail</p>
                        <Link className="links" href="mailto:tutora.ia@outlook.com">Tutora.IA@outlook.com</Link>
                    </div>
                </div>
            </footer>
        </>
    )
}