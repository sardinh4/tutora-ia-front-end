'use client'

import React, { useState, useRef, useEffect } from 'react';
import styles from './page.module.css'
import PurpleBackground from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx'
import PromptForm from '@/app/components/promtForm/PromptForm.js'
import TitleAuthdUser from '@/app/components/titleAuthdUser/titleAuthdUser.jsx'



export default function Home() {
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Rola automaticamente para a última mensagem sempre que o chatHistory é atualizado
    scrollToBottom();
  }, [chatHistory]);

  const handlePromptSubmit = async (prompt) => {
    setIsLoading(true);

    try {
      // Adiciona a pergunta do usuário ao histórico
      setChatHistory([...chatHistory, { type: "user", content: prompt }]);


      try {
        const response = await fetch("/chat_aurora/api/chat_api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: prompt,
          }),
        });

        const result = await response.json();

        // Adiciona a resposta da Aurora ao histórico
        setChatHistory((prevChatHistory) => [
          ...prevChatHistory,
          { type: "aurora", content: result.choices[0].message.content },
        ]);

      } catch (error) {
        console.error("Erro ao processar a solicitação:", error);
      } finally {
        setIsLoading(false);
      }

    } catch (error) {
      console.error("Erro ao processar a solicitação:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <PurpleBackground>

        {/* TOP SECTION */}
        <section className={styles.topSection}>

          <TitleAuthdUser>
          <h2 className={styles.titleh2}>CHAT COM A AURORA</h2>
          </TitleAuthdUser>
        </section>


        {/* BOTTOM SECTION */}
        <section className={styles.bottomSection}>
          {/* LEFT SECTION */}
          <section className={styles.leftSection}>
            <section className={styles.topLeftSection}>
              {chatHistory.map((chat, index) => (
                <div
                  className={chat.type === "user" ? styles.answerUser : styles.answerAurora}
                  key={index}
                >
                  {chat.type === "user" && (
                    <div className={styles.iconAdnName}><img className={styles.userIcon} src='/ChatAurora/iconeUser.svg'></img><p>Você</p></div>
                  )}
                  <p className={chat.type === "user" ? styles.pAnswerUser : styles.pAnswerAurora}>
                    {chat.content}
                  </p>
                  {chat.type === "aurora" && (
                    <div className={styles.iconAdnName}><img className={styles.auroraIcon} src='/ChatAurora/iconeAurora.svg'></img><p>Aurora</p></div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} /> {/* Referência para a última mensagem */}
            </section>

            <section className={styles.bottomLeftSection}>
              <PromptForm isLoading={isLoading} onSubmit={handlePromptSubmit} />
            </section>
          </section>

          {/* RIGHT SECTION */}
          <section className={styles.rightSection}>
            <img className={styles.aurora} src='/ChatAurora/Aurora.svg'></img>
          </section>
        </section>

    </PurpleBackground>
  )
}
