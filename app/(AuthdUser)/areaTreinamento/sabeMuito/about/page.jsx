import React, {useContext} from "react"
import {result} from '@/app/(AuthdUser)/Treinamento/Perguntados/page'
import Image from 'next/image'
import logo from '@/public/Treinamento/logoBranca.svg'
import styles from '../page.module.css'
import { FiPlus } from "react-icons/fi";
import { exo, orbitron } from '@/app/components/fonts.js';

const Page = () => {
    return (
        <main className={styles.mainAbout}>
            <div className={styles.backPink}> 
             <Image className={styles.logoWhite} src={logo} width={300} height={100}/>
           </div>

           <div className={styles.btnAbout}>
            <button className={orbitron.className}><span className={styles.plus}><FiPlus/></span>Novo Jogo</button>
                <div className={styles.dadosContainer}>
                    <h4>Resultados Anteriores</h4>
                    <div className={styles.dados}>
                        <p>UserName | </p>
                        <p>Tema | </p> 
                        <p>Pontuação</p>
                    </div>
                </div>
           </div>


        </main>
    );

}

export default Page