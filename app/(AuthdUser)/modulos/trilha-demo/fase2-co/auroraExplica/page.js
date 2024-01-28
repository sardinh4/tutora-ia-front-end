import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Background from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton'

export default function Home() {
  return (
    <Background>
      <div className={styles.containerMap}>
        <div className={styles.back}>
          <ArrowBackButton />
        </div> {/* end div back */}

        <div className={styles.containerTitle}>
          <h1>Fase 2 - Porquês</h1>
        </div>

        <div className={styles.container}>
          <div className={styles.containerExplication}>
            <div className={styles.text}>
              <p> Ah, os porquês! Parecem um quebra-cabeça linguístico, né? Mas calma, vamos desvendar esse mistério de forma divertida!
                <br></br><br></br>
                “Por que foi embora?”<br></br>
                <span className={styles.pinkSpan}>Por que</span>(<span className={styles.blueSpan}>separado</span>): é como se fosse o detetive da turma.
                Use quando estiver <span className={styles.blueSpan}>fazendo perguntas</span>, querendo descobrir a razão ou motivo por trás de algo. Substitua por "por qual razão?" e você acerta em cheio!
                <br></br><br></br>
                "Atrasaram, por quê?"<br></br>
                <span className={styles.pinkSpan}>Por quê</span>(<span className={styles.blueSpan}>separado com acento circunflexo</span>): Aqui, ele surge <span className={styles.blueSpan}>no final</span>. É como se a pergunta carregasse consigo todo o mistério. É o toque final para deixar todos se perguntando "Por qual razão isso aconteceu?".
                <br></br><br></br>
                “Porque choveu.”<br></br>
                <span className={styles.pinkSpan}>Porque</span> Esse é o "pois" da história. <span className={styles.blueSpan}>Responde</span> perguntas, explica o motivo. Quando você sabe a razão, solta um "porque"!
                <br></br><br></br>
                “Você sabe o porquê disso.”<br></br>
                <span className={styles.pinkSpan}>Porquê</span>O mestre dos motivos. Sempre acompanhado de um <span className={styles.blueSpan}>artigo (o, a, os, as)</span> ou numeral, é como dizer "o motivo". É o chefão explicativo.
                <br></br><br></br>
                Agora, vamos lá! Você consegue desvendar os porquês no mundo das palavras? Ganhe pontos de sabedoria linguística e torne-se o mestre da gramática!
              </p> {/* end paragraphe */}
            </div> {/* container explicação */}



          </div>{/* end containerExplication*/}

          <div className={styles.containerAurora}> {/* place talk aurora */}

            <div className={`${styles.button} ${styles.audio}`}>
              <button className={styles.btnsong}>
                <Image
                  src='/Explicacao/volume_fill.svg'
                  width="20"
                  height="20"
                  alt=''
                />
              </button>
              <img className={styles.img}
                src='/Explicacao/Aurora.svg'
                alt=''
              ></img>



            </div> {/* end div button audo */}
            <Link className={`${styles.continue}`} href='/modulos/trilha/fase2/questoes'>
              CONTINUAR

            </Link>
          </div>{/* end container aurora */}

        </div>
        <Link className={`${styles.continueBtnOut}`} href='/modulos/trilha/fase2/questoes'>
          CONTINUAR

        </Link>
      </div>
    </Background>
  )
}
