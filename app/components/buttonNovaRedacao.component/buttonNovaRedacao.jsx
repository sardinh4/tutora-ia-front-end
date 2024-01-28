'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ButtonNovaRedacao.css'
import LapisRedacao from './assets/LapisRedacao.svg'

export default function ButtonNovaRedacao() {
    return (
        <Link href="/">
            <button className='buttonAddRedacao'>
                <div className='containerImgLapis'>
                    <Image
                        src={LapisRedacao}
                        alt="Simbolo de lapis para o botao de redação"
                        fill={true}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className= 'lapisImage'
                    />
                </div>
            </button>
        </Link>
    )
}
