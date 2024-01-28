import { useState } from "react";
import styles from './PromptForm.module.css'
import { set } from "react-hook-form";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function PromptForm({ onSubmit, isLoading }) {

    const [prompt, setPrompt] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (prompt === "") {
            return;
        }

        onSubmit(prompt);
        setPrompt("");
    };


    return (
        <form className={styles.form}
        onSubmit={handleSubmit}>
            <input className={styles.input} placeholder="Digite aqui, Pupil♡." type="text" value={prompt} onChange={e => {
                setPrompt(e.target.value)
            }} />

            <button className={styles.btnSubmit} type="submit" disabled={isLoading}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>


        </form>
    )
}