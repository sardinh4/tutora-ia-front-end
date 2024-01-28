'use client'
import { useEffect } from 'react';
import { useState } from 'react'
import Image from 'next/image.js'
import Menu from "./assets/Menu.svg"
import Link from 'next/link.js'
import './burguerMenu.css'



const MenuBtn = () => {
    const [isListvisible, setIsListVisible] = useState(false);


    const menuBtnClicked = () => {
        setIsListVisible(!isListvisible);
    };

    const linkClicked = () => {
        setIsListVisible(!isListvisible);
    };

    const windowResized = () => {
        if (isListvisible == true){
            setIsListVisible(!isListvisible);
        }
    };

    useEffect(()=>{
        window.addEventListener('resize', windowResized);
    })

    

    return (
        
        <>
            <div className='divBtn'>
                <Image onClick={menuBtnClicked} className='menuBtn' src={Menu} alt="botão de menu"></Image>
            </div>

            {isListvisible &&
                <div className='containerMenu'>
                    <hr className='hrLine' />

                    <div className='menuMenuBtn'>
                        <ul>
                            <div className='listItensDiv'>
                                <div>
                                    <li onClick={linkClicked}><Link href="/">Home</Link></li>
                                    <li onClick={linkClicked}><Link href="/#planes">Planos</Link></li>
                                    <li><Link onClick={linkClicked} href="/sobre">Sobre</Link></li>
                                    <li><Link onClick={linkClicked} href="/suporte">Suporte</Link></li>
                                </div>
                                <div>
                                    <li><Link onClick={linkClicked} href="/login">Entrar</Link></li>
                                    <li><Link onClick={linkClicked} href="/cadastro">Cadastre-se</Link></li>
                                </div>
                            </div>
                        </ul>
                    </div>


                </div>
            }
        </>

    )
};




export default MenuBtn 