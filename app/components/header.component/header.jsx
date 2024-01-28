'use client'

import Image from 'next/image.js'
import Menu from "@/app/components/burguerMenu/burguerMenu.jsx"
import Link from 'next/link.js'
import './header.css'
import { motion } from 'framer-motion'
import ComponentAppear from '@/app/components/appearAndDesappear/appearAndDesappear.jsx'
import { usePathname } from 'next/navigation'

const links = [
    { href: "/", label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/suporte', label: 'Suporte' },
    { href: '/#planes', label: 'Planos' },
]



export default function Header() {
    const path = usePathname();

    return (
        <>
            <header className="cabecalho">
                <div className="containerEsquerda">
                    <div className="containerImage">
                        <Image
                            className="logo"
                            width={200}
                            height={55}
                            src="/logo.png"
                            alt="Logo Tutora.IA"
                        />
                    </div>

                    <nav className='navBar'>
                        <ul>
                            {links.map((link) => (
                                <li key={link.href}>
                                    <Link className="navBarLink" href={link.href}>
                                        {link.href === path && (
                                            <motion.span
                                                layoutId='underline'
                                                className="underline"
                                            />
                                        )}
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className="containerDireita">
                    <ComponentAppear
                        content={
                            <button className="btnEntrar">
                                <Link className="btnTexto" href="/login">Entrar</Link>
                            </button>
                        }

                        elementId={'btnLogin'}
                    />

                    <ComponentAppear
                        content={
                            <button className="btnCadastrar">
                                <Link className="btnTexto" href="/cadastro">Cadastre-se</Link>
                            </button>
                        }

                        elementId={'btnCadastro'}
                    />


                </div>
                <Menu />
            </header>
            <div className="linha" />
        </>
    )
}