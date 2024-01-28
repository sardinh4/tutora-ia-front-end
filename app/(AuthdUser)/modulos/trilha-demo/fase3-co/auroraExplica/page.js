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
          <h1>Fase 3 - Homônimos e Parônimos</h1>
        </div>

        <div className={styles.container}>
          <div className={styles.containerExplication}>
            <div className={styles.text}>
              <p><span className={styles.pinkSpan}>Homonimos</span> - São palavras que dividem o mesmo cenário, mas desempenham papéis distintos. Elas compartilham <span className={styles.blueSpan}> pronúncia ou grafia idêntica, mas carregam significados diferentes. </span>
                Um exemplo clássico de palavras homônimas é "manga". Esta palavra pode se referir à fruta suculenta ou à parte de uma peça de roupa, como em "blusa de manga longa". Ambos os significados têm a mesma pronúncia, mas contextos diferentes:
                <br></br><br></br>
                Roda (do verbo rodar): "Vamos rodar a roda do carro."/ Roda (objeto circular): "A bicicleta tem uma roda dianteira."
                <br></br><br></br>
                Ponto (sinal gráfico): "Adicione um ponto ao final da frase."/ Ponto (local específico): "Vamos nos encontrar no ponto de ônibus."
                <br></br><br></br>
                Gosto (verbo gostar): "Eu gosto de estudar para os testes."/ Gosto (paladar): "O gosto do bolo estava incrível."
                <span className={styles.pinkSpan}>Parônimos</span> - Esses são os mestres da camuflagem linguística, apresentando uma<span className={styles.blueSpan}>pronúncia e escrita quase idênticas.</span>
                No entanto, não se deixe enganar! <span className={styles.blueSpan}>Seus significados são distintos:</span>
                <br></br><br></br>
                Apreender (capturar): "A polícia tentou apreender o criminoso."/ Aprender (adquirir conhecimento): "Quero aprender a tocar piano."
                <br></br><br></br>
                Flagrante (evidente): "Ele foi pego em flagrante mentindo."/ Fragrante (perfumado): "O jardim exalava um perfume fragrante."
                <br></br><br></br>
                Descriminar (isentar de crime): "O advogado tentou descriminar o réu."/ Discriminar (tratar de maneira desigual): "Não devemos discriminar as pessoas."
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
            <Link className={`${styles.continue}`} href='/modulos/trilha/fase3/questoes'>
              CONTINUAR

            </Link>
          </div>{/* end container aurora */}

        </div>
        <Link className={`${styles.continueBtnOut}`} href='/modulos/trilha/fase3/questoes'>
          CONTINUAR

        </Link>
      </div>
    </Background>
  )
}
