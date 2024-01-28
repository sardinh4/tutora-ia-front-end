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
          <h1>Fase 4 - Homógrafas e Homófonas</h1>
        </div>

        <div className={styles.container}>
          <div className={styles.containerExplication}>
            <div className={styles.text}>
              <p><span className={styles.pink}>Homógrafas</span> - Palavras homógrafas são como caminhos entrelaçados, desafiando a clareza. Elas  têm <span className={styles.blue}> a mesma grafia mas podem ter significados diferentes</span>, independentemente da pronúncia. Por exemplo, "colher" pode ser pegar algo com utensílio, como “Pegue uma colher de sopa.”, ou colher os resultados de ações, como “Vamos colher flores no jardim”:
                <br></br><br></br>
                Aço (metal): "A faca é feita de aço."/ Asso (verbo assar): "Eu asso pães todas as manhãs."
                <br></br><br></br>
                Sinto (verbo sentir): "Eu sinto a brisa do mar."/ Cinto (acessório de vestuário): "Apertei o cinto antes de dirigir."
                <br></br><br></br>
                Auréola (disco luminoso): "O anjo tinha uma auréola sobre a cabeça."/ Aréola (região escura ao redor do mamilo): "A aréola é uma parte da anatomia feminina."
                <br></br><br></br>
                <span className={styles.pink}>Homófonas</span> -  Palavras homófonas são como notas musicais,<span className={styles.blue}>ressoando de maneira semelhante mas sendo escritas diferentes.</span>  Por exemplo, "concerto" pode ser um reparo ou um espetáculo musical. Entre no ritmo do desafio: "O sapateiro fez um bom conserto, enquanto a orquestra preparava-se para dar um ótimo concerto.":
                <br></br><br></br>
                Presente (substantivo - um objeto dado): "Recebi um presente de aniversário."/ Presente (adjetivo - estar atualmente): "Estou presente na reunião."
                <br></br><br></br>
                Projeto (substantivo - plano): "Vamos discutir o projeto para o novo edifício."/ Projeto (verbo projetar - lançar algo para frente): "Ela sabe projetar suas ideias de maneira clara."
                <br></br><br></br>
                Concerto (evento musical): "Vamos ao concerto da orquestra hoje à noite."/ Concerto (reparo): "O carro está na oficina para um concerto no motor."
                <br></br><br></br>
                Vale ressaltar que uma palavra <span className={styles.blue}>pode ser ambas homógrafa e homônima</span>, dependendo do contexto em que é usada.
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
            <Link className={`${styles.continue}`} href='/modulos/trilha/fase4/questoes'>
              CONTINUAR

            </Link>
          </div>{/* end container aurora */}

        </div>
        <Link className={`${styles.continueBtnOut}`} href='/modulos/trilha/fase4/questoes'>
          CONTINUAR
        </Link>
      </div>
    </Background>
  )
}
