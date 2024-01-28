import styles from './page.module.css'
import PurpleBackground from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx'
import Link from 'next/link'
import TitleAuthdUser from '@/app/components/titleAuthdUser/titleAuthdUser.jsx'

export default function Home() {
  return (
    <PurpleBackground>
      <TitleAuthdUser>
        <h2 className={styles.training}>TREINAMENTO</h2>
      </TitleAuthdUser>

      <div className={styles.carrosselContainer} >
        <Link className={styles.games}href={'/areaTreinamento/sabeMuito'}>
          <img className={styles.games} src='/AreaTreinamento/SabeMuito.png'/>
        </Link>
        <img className={styles.games} src='/AreaTreinamento/5Erros.png'>
        </img>
        <img className={styles.games} src='/AreaTreinamento/Letris.png'>
        </img>

        <img className={styles.games} src='/AreaTreinamento/Stop.png'>
        </img>
        <img className={styles.games} src='/AreaTreinamento/Cruzar.png'>
        </img>

      </div>
    </PurpleBackground>
  )
}
