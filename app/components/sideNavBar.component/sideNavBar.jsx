import Image from "next/image"
import Link from "next/link"
import styles from "./sideNavBar.css"
import Logo from "./assets/CapeloLogo.png"
import Chat from "./assets/Chat.png"
import Jogos from "./assets/Jogos.png"
import Missoes from "./assets/Missoes.png"
import Perfil from "./assets/Perfil.png"
import Redacao from "./assets/Redacao.png"
import Trilha from "./assets/Trilha.png"

export default function SideNavBar() {
  return (
    <div className="sideNavBar">
      <div className="cima">
        <div className="logoContainer">
          <Image
            src={Logo}
            alt="Logo Tutora.IA"

            width={120}
     
            className="logoImage"
          />
        </div>
        <div className="navIcon">
          <Link className="Links" href="/modulos">
            <Image
              src={Trilha}
              alt="Icone Trilha"
              width={80}

            />
          </Link>

          <Link className="Links" href="/chat_aurora">
            <Image
              src={Chat}
              alt="Icone Chat"
              width={80}

            />
          </Link>

          <Link className="Links" href="/areaTreinamento">
            <Image
              src={Jogos}
              alt="Icone Jogos"
              width={80}
            />
          </Link>

          {/* <Link className="Links" href="/">
            <Image
              src={Missoes}
              alt="Icone Missões"
              width={80}
            />
          </Link> */}

          <Link className="Links" href="/redacao">
            <Image
              src={Redacao}
              alt="Icone Redacao"
              width={80}
            />
          </Link>
        </div>
      </div>
      <div className="perfil">
        <Link className="Links" href="/perfil">
          <Image
            src={Perfil}
            alt="Icone Perfil"
            width={80}
          />
        </Link>
      </div>
    </div>
  )
}