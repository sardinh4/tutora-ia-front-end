import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import aurora from '@/public/Aurora.svg'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton.jsx'
import Background from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx'


export default function Home() {
  return (
    <Background>
      <main className={styles.mainHome}>
        <div className={styles.arrow}><ArrowBackButton /></div>
        <div className={styles.ContainerHome}>
          <img className={styles.logoMain} src='/SabeMuito/LogoBranca.svg'></img>
          <h1 className={`${styles.tituloHome}`}>Sabe Muito</h1>
          <div className={styles.circle}></div>
          <Link href='/areaTreinamento/sabeMuito/sabeMuito'>
            <button className={`${styles.btnHome}`}>
              Jogar
            </button>
          </Link>
        </div>
        <Image className={styles.aurora} src={aurora} width={300} height={300} />
      </main>
    </Background>
  )
}