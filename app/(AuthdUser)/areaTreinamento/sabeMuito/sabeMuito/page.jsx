'use client';
import React, { useState } from 'react';
import { quiz } from '../api';
import styles from '../page.module.css';
import { exo, poppins } from '@/app/components/fonts.js';
import { IoPaperPlane } from "react-icons/io5";
import Background from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx';
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton.jsx';

const Page = () => {
    const [questionsActive, setActiveQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState("");
    const [check, setCheck] = useState(false);
    const [selectAnswersIndex, setSelectAnswersIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    });

    const { questions } = quiz;
    const { question, answers, correctAnswer } = questions[questionsActive];

    const onAnswerSelected = (answer, idx) => {
        setCheck(true);
        setSelectAnswersIndex(idx);
        if (answer === correctAnswer) {
            setSelectedAnswers(true);
            console.log('true');
        } else {
            setSelectedAnswers(false);
            console.log('false');
        }
    };
    const nextQuestion = () => {
        setSelectAnswersIndex(null)
        setResult((prev) =>
            selectedAnswers ?
                {
                    ...prev,
                    score: prev.score + 5,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : {
                    ...prev,
                    wrongAnswers: prev.wrongAnswers + 1,
                }
        );

        if (questionsActive !== questions.length - 1) {
            setActiveQuestion((prev) => prev + 1)
        } else {
            setActiveQuestion(0)
            setShowResult(true)
        };
        setCheck(false);
    };

    function SaverResult() {
        const data = {
            score, correctAnswer
        }
        console.log(data)
    }

    return (
        <Background>

            <main className={styles.main}>
                <div className={styles.arrow} >
                    <ArrowBackButton />
                </div>

                <div className={styles.Container}>
                    <div>
                        {!showResult ? (
                            <div>
                                <div className={styles.quizContainer}>
                                    <h2>Pergunta: {questionsActive + 1}
                                        <span>/{questions.length}</span>
                                    </h2>
                                    <h3 className={exo.className}>{questions[questionsActive].question}</h3>
                                </div>
                                <div className={styles.containerAwsners}>
                                    {answers.map((answers, idx) => (
                                        <li key={idx}
                                            onClick={() => onAnswerSelected(answers, idx)}
                                            className={selectAnswersIndex === idx ? styles.liSelected : styles.liHover}>
                                            <span className={poppins.className}>{answers}</span>
                                        </li>
                                    ))}
                                </div>
                                <div className={styles.planeButton}>
                                    {check ? (
                                        <button onClick={nextQuestion} className={`${styles.btn}`}>
                                            {questionsActive === question.length - 1 ? <IoPaperPlane /> : <IoPaperPlane />}
                                        </button>
                                    ) : (
                                        <button onClick={nextQuestion} disabled className={`${styles.btn}`}>
                                            {questionsActive === question.length - 1 ? <IoPaperPlane /> : <IoPaperPlane />}
                                        </button>
                                    )}
                                </div>

                            </div>

                        ) : (
                            <div className={styles.quizResult}>
                                <h3>Aqui está seu desempenho!</h3>
                                <p>XP: {(result.score / 25) * 100}</p>
                                <p>Pontuação: {(result.score / 25) * 50}</p>
                                <p>Total de Perguntas corretas: {result.correctAnswers}<span>/{questions.length}</span></p>
                                <p>Total de Perguntas erradas: {result.wrongAnswers}<span>/{questions.length}</span></p>
                                <button onClick={() => window.location.reload()}><p>Reiniciar</p></button>
                            </div>
                        )}
                    </div>
                </div>
            </main>


        </Background>

    );
}

export default Page