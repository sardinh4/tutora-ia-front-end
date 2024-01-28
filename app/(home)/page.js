import Link from 'next/link'
import styles from './page.module.css'
import BackGroundLinearGradient from '@/app/components/backgroundLinearGradient.component/backgroundLinearGradient.jsx'
import BackgroundGray from '@/app/components/backgroundGray.component/backgroundGray.jsx'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <BackGroundLinearGradient heightBackground={'100vh'} >

        <section className={styles.mainContainer}>

          <div className={styles.mainContainerLeft}>
            <div className={styles.logoAndDescription}>

              <img
                id='logoPosition'
                className={`${styles.logo} `}
                src={'/Home/logo.svg'}
                alt='Logo da Tutora.IA'></img>

              <p className={styles.mainDescription}>
                Colocando um ponto final nos seus <br></br>
                questionamentos da Língua Portuguesa.
              </p>

            </div>

            <img
              className={styles.auroraMainLeft}
              alt='Foto da nossa IA Aurora'
              src="/Home/Aurora.svg"
            ></img>

            {/* buttons register and login */}
            <div className={styles.buttons}>

              <button id='btnCadastro' type='button' className={styles.btn}>
                <Link href="/cadastro">
                  <h2>CADASTRAR</h2>
                </Link>
              </button>

              <button id='btnLogin' type='button' className={`${styles.btn} ${styles.btn2}`}>
                <Link href="/login">
                  <h2>ENTRAR</h2>
                </Link>
              </button>

            </div>
          </div>


          {/* AURORA */}
          <img
            className={styles.aurora}
            alt='Foto da nossa IA Aurora'
            src="/Home/Aurora.svg"
          ></img>


        </section>


      </BackGroundLinearGradient>


      <BackgroundGray>

        <div className={styles.sectionContentDiv}>

          {/* GAMIFYING */}
          <section className={`${styles.gamifyingContent} `}>
            <h2 className={styles.h2Home}>Gamificando seu aprendizado</h2>
            <p>
              Pronto para se aventurar em uma jornada gamificada que revolucionará a maneira como as
              pessoas elevam seu nível em português? Apresentamos a você uma plataforma dinâmica e
              dedicada ao aprimoramento da língua portuguesa! Explore nosso conteúdo:
            </p>

            {/* icons image section */}
            <div className={styles.iconsSection}>

              <div className={styles.rowIcons}>
                <div>
                  <img
                    className={`${styles.icon} ${styles.trilha}`}
                    src="/Home/trilha.svg"
                    alt='Foto da nossa trilha'
                  >
                  </img>
                  <h2>Trilha <br></br> de estudos</h2>
                </div>

                <div>
                  <img
                    className={`${styles.icon} ${styles.chat}`}
                    src="/Home/chat.svg"
                    alt='icone chat'
                  ></img>
                  <h2>Lições com a <br></br>
                    Aurora</h2>
                </div>

              </div>

              <div className={styles.rowIcons}>
                <div>
                  <img
                    className={`${styles.icon} ${styles.joystick}`}
                    src="/Home/joystick.svg"
                    alt='icone em formato de joystick'
                  ></img>

                  <h2>Jogos<br></br>
                    Interativos</h2>
                </div>

                <div>
                  <img
                    className={`${styles.icon} ${styles.correct}`}
                    src="/Home/essay.svg"
                    alt='icone correct'
                  ></img>
                  <h2>Correção de <br></br>
                    Redações</h2>
                </div>
              </div>

              <div className={styles.rowIcons}>
                <div>
                  <img
                    className={`${styles.icon} ${styles.mission}`}
                    src="/Home/mission.svg"
                    alt='icone missão'
                  ></img>
                  <h2>Missões e <br></br>
                    objetivos</h2>
                </div>
                <div>
                  <img
                    className={`${styles.icon} ${styles.correct}`}
                    src="/Home/correct.svg"
                    alt='correct icon'
                  ></img>
                  <h2>Aprendizado de<br></br>
                    Qualidade</h2>
                </div>
              </div>

            </div>
          </section>

          <hr className={styles.line}></hr>

          {/* DISTINCTIVE QUALITIES */}
          <section>
            <div className={styles.ourDistinctiveQualities}>
              <h2 className={styles.h2Home}>NOSSOS DIFERENCIAIS</h2>

              <section className={styles.iaSection}>
                <img
                  className={styles.ia}
                  src="/Home/IA.svg"
                  alt='Icone d inteligência artificial'
                ></img>
                <div className={`${styles.iaInformation}`}>
                  <h2>Inteligência Artificial</h2>
                  <p>
                    Nossa IA, Aurora, impulsiona a evolução do seu conhecimento com  exercícios dinâmicos, proporcionando uma experiência envolvente que bota um ponto final em suas dúvidas.
                  </p>
                </div> {/* end div ia */}
              </section> {/* end section */}

              <section className={styles.expandingYourLearning}>
                <div className={styles.expandingInformation}>
                  <h2>Expandindo seus conhecimento</h2>
                  <p>
                    Por meio de diversas estratégias, impulsionamos a evolução, sem ficar restritos a soluções únicas, adaptando-nos para aprimorar a experiência de aprendizado no "game" da educação.
                  </p>
                </div>  {/*end div apprenticeship */}

                <img
                  className={styles.learning}
                  src="/Home/learning.svg"
                  alt='símbulo de aprendizado'
                ></img>

              </section>
            </div>
          </section>


          <hr id="planes" className={styles.line}></hr>

          {/* PLANES */}

          <section className={styles.planesSection}>
            <h2 className={styles.h2Home}>PLANOS</h2>

            <h3 >
              Faça um upgrade no seu aprendizado! Escolha seu
              plano ideal para um futuro mais que perfeito.
            </h3>

            {/* PLANES LIST */}

            <section className={styles.planesList}>

              <div className={styles.containerFree}> {/* card plan style */}

                <h4 className={styles.titleFreePlan}>Básico</h4>
                <h5 className={styles.subtitleFreePlan}>Funcionalidades gratuitas</h5>

                <ul>
                  <li>Trilha de aprendizado</li>
                  <li>Desafio Enem</li>
                  <li>1 redação por semana e 2 treinos de redação</li>
                  <li>10 perguntas diárias para a IA</li>
                  <li>Missões diárias e desafios </li>
                </ul>

                <button type="button" className={styles.freeBtn} ><Link href="#">
                  CRIAR CONTA</Link>
                </button>
              </div>   {/*end div container free*/}

              <div className={styles.containerPremiumMonthly}>
                <h4 className={styles.premiumMonthlyTitle}>PREMIUM MENSAL</h4>

                <h5 className={styles.priceMonthly}>R$14,99<span>/por mês</span></h5>
                <ul>
                  <li>Correções ilimitadas de redações </li>
                  <li>Conversas ilimitadas com a IA Aurora</li>
                  <li>Trilha de estudos Personalizada  </li>
                  <li>Novos modelos de avaliação </li>
                  <li>Correção, criação e explicação de exercícios ilimitadas</li>
                </ul>

                <button type="button" className={styles.premiumMounthlyBtn} ><Link href="X">
                  EXPERIMENTAR 7
                  DIAS GRÁTIS</Link>
                </button>
              </div> {/* end div container monthly */}

              <div className={styles.containerPremiumYear}>
                <h4 className={styles.premiumYearTitle}>PREMIUM ANUAL</h4>

                <h5 className={styles.priceYear}>R$10,50<span>/por mês</span></h5>

                <ul>
                  <li>Correção de redações limitada à 1 vez ao mês</li>
                  <li>Tirar dúvidas com a IA Tutora, limitado a 5 perguntas diárias</li>
                  <li>Missões e objetivos </li>
                  <li>Trilha de estudos Personalizada </li>
                  <li>Correção e explicação de exercícios</li>
                  <li>Melhor custo benefício a longo prazo</li>
                </ul>

                <button type="button" className={styles.premiumYearBtn} ><Link href="X">
                  EXPERIMENTAR 7
                  DIAS GRÁTIS</Link>
                </button>

              </div> {/* end container year */}
            </section> {/* end section plans */}
          </section>

          <hr className={styles.line}></hr>
        </div>

      </BackgroundGray>
    </>

  )
}
