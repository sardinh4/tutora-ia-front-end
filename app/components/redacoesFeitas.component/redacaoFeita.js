import React from "react"
import Link from "next/link"
import styles from "./redacaoFeita.css"

//codigo provisorio apenas para demosntração de como ficaria
async function getRedacoes() {
    const request = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await request.json();
    return data;
}

export default async function RedacaoFeita() {
    const redacoes = await getRedacoes();
    return (
        <div className='redacoes'>
            {redacoes.map(({ id, title, body }) => (
                <div className="redacaoContainer" key={id}>
                    <button className='redacao'>
                        <p>{body}</p>
                    </button>
                    <h5> {title} </h5>
                </div>
            ))}
        </div>
    )
}


