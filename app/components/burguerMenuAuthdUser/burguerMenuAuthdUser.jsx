'use client'
import { useEffect } from 'react';
import { useState } from 'react'
import Image from 'next/image.js'
import Menu from "./assets/Menu.svg"
import Link from 'next/link.js'
import './burguerMenuAuthdUser.css'
import Perfil from './assets/Perfil2.svg'
import Chat from './assets/Chat2.svg'
import Treinamento from './assets/Jogos2.svg'
import Missoes from './assets/Missoes2.svg'
import Redacao from './assets/Redacao2.svg'
import Trilha from './assets/Trilha2.svg'



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
                                    <li className='subMenus' onClick={linkClicked}><Link href="/modulos"><div><h2>Módulos</h2><Image  src={Trilha} width={60} height={60}></Image></div></Link></li>
                                    <li className='subMenus' onClick={linkClicked}><Link href="/chat_aurora"><div><h2>Chat com a Aurora</h2><Image  src={Chat} width={60} height={60}></Image></div></Link></li>
                                    <li className='subMenus' onClick={linkClicked}><Link href="/areaTreinamento"><div><h2>Treinamento</h2><Image  src={Treinamento} width={60} height={60}></Image></div></Link></li>
                                    {/* <li className='subMenus' onClick={linkClicked}><Link href="/"><div><h2>Missões</h2><Image  src={Missoes} width={60} height={60}></Image></div></Link></li> */}
                                    <li className='subMenus' onClick={linkClicked}><Link href="/redacao"><div><h2>Área de Redações</h2><Image  src={Redacao} width={60} height={60}></Image></div></Link></li>
                                    <li className='subMenus' onClick={linkClicked}><Link href="/perfil"><div><h2>Perfil do Pupil♡</h2><Image  src={Perfil} width={60} height={60}></Image></div></Link></li>
                                </div>
                                <div>
                                    <li className='subMenus'><Link onClick={linkClicked} href="/login"><h2>Sair</h2></Link></li>
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