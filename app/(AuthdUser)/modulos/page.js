import Link from 'next/link'
import styles from './page.module.css'
import PurpleBackground from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx'
import TitleAuthdUser from '@/app/components/titleAuthdUser/titleAuthdUser.jsx'

export default function Home() {
  return (

    <PurpleBackground>
      <TitleAuthdUser>
        <h2 className={styles.modulos}>MÓDULOS</h2>
      </TitleAuthdUser>
      <main className={styles.main}>


        <div className={styles.row}>
          <Link className={styles.link} href="./modulos/trilha-demo">
          <button className={`${styles.button} ${styles.demo}`}>
            <h2>Demo</h2>
            <img src='/Modulos/capeloTrilha.svg' alt='Liberado'></img>
          </button>
          </Link>

          <button className={`${styles.button} ${styles.Accentuation}`}>
            <img src='/Modulos/Lock.svg' alt='Bloqueado'></img>
            <h2>Substantivos</h2>
          </button>

          <button className={`${styles.button} ${styles.Accentuation}`}>
            <img src='/Modulos/Lock.svg' alt='Bloqueado'></img>
            <h2>Verbos</h2>
          </button>

          <button className={`${styles.button} ${styles.Accentuation}`}>
            <img src='/Modulos/Lock.svg' alt='Bloqueado'></img>
            <h2>Pronomes</h2>
          </button>

          <button className={`${styles.button} ${styles.adverb}`}>
            <img src='/Modulos/Lock.svg' alt='Bloqueado'></img>
            <h2>Advérbio</h2>
          </button>

          <button className={`${styles.button} ${styles.adjective}`}>
            <img src='/Modulos/Lock.svg' alt='Bloqueado'></img>
            <h2>Adjetivo</h2>
          </button>

          <button className={`${styles.button} ${styles.Accentuation}`}>
            <img src='/Modulos/Lock.svg' alt='Bloqueado'></img>
            <h2>Acentuação</h2>
          </button>
        </div>

      </main>

    </PurpleBackground>
  )
}
