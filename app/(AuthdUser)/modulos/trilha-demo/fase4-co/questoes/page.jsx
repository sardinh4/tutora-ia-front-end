
'use client';
import React, { useState } from 'react';
import { quiz } from './api';
import styles from './page.module.css';
import Link from 'next/link'
import Background from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx'
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

    function Completed() {
        if (correctAnswers === questions.length) {
            return true
        }
        else {
            return false
        }
    }

    return (
        <Background>
            <div className={styles.containerMainQuestions}>
                <ArrowBackButton />
                <main className={styles.mainQuestions}>

                    {!showResult ? (

                        <div className={styles.mainCont}>
                            <div className={questionsActive === questions.length - 1 ? styles.containerQuestions2 : styles.containerQuestions}>
                                <h2 >Fase 4 - Homógrafas e Homófonas
                                </h2>
                            </div>
                            <div className={styles.pergunta}>
                                <h3><span className={styles.p}>Pergunta:</span> {questions[questionsActive].question}</h3>
                            </div>

                            <div className={styles.containerAwsners}>
                                {answers.map((answers, idx) => (
                                    <li key={idx}
                                        onClick={() => onAnswerSelected(answers, idx)}
                                        className={selectAnswersIndex === idx ? styles.liSelected : styles.liHover}>
                                        {answers}
                                    </li>
                                ))}
                            </div>

                            <div className={styles.planeButton}>
                                {check ? (
                                    <button onClick={nextQuestion} className={`${styles.btn}`}>
                                        {questionsActive === questions.length - 1 ? 'Finalizar' : 'Continuar'}
                                    </button>
                                ) : (
                                    <button onClick={nextQuestion} disabled className={`${styles.btn}`}>
                                        {questionsActive === questions.length - 1 ? 'Finalizar' : 'Continuar'}
                                    </button>
                                )}
                            </div>

                        </div>

                    ) : (
                        <div className={styles.mainCont2}>
                            <div className={styles.containerQuestions3}>
                                <h2 >Fase 4 - Homógrafas e Homófonas
                                </h2>
                            </div>
                            <div className={styles.classification}>
                                <div className={styles.classificationCont}>
                                    <h1>{result.correctAnswers === questions.length ? 'PARABÉNS, PUPIL♡, VOCÊ FOI INCRÍVEL!!!' : 'QUE PENA, NÃO FOI DESSA VEZ! MAS CONTINUE TENTANDO SEMPRE!'}
                                    </h1>

                                    <Link href={result.correctAnswers === questions.length ? '/modulos/trilha' :
                                        '/modulos/trilha/fase4/auroraExplica'}>
                                        <button className={`${styles.btnClassification} `}>
                                            {result.correctAnswers === questions.length ? 'VOLTAR A TRILHA' : 'FAZER NOVAMENTE'}
                                        </button>
                                    </Link>

                                </div>
                                <img className={styles.auroraImg} src='/Aurora.svg'></img>



                            </div>
                        </div>
                    )}
                </main>
            </div>
        </Background>
    );
}

export default Page