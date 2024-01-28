import styles from './page.module.css'
import Link from 'next/link'
import React from 'react'
import PurpleBackground from '@/app/components/purpleBackgroundAuthdUser/purpleBackground.jsx'
import TitleAuthdUser from '@/app/components/titleAuthdUser/titleAuthdUser.jsx'


export default function Home() {
  return (
    <PurpleBackground>
      <TitleAuthdUser>
        <h2 className={styles.demo}>DEMO</h2>
      </TitleAuthdUser>


      <main className={styles.trailContainer}>
        <div className={styles.trail}>

          {/* LINES */}
          <div className={`${styles.linhaEmL1} ${styles.linhaEmL} ${styles.linhaEmLOpen}`}></div>

          <div className={`${styles.linhaEmL2} ${styles.linhaEmL} ${styles.linhaEmLOpen}`}></div>

          <div className={`${styles.linhaEmL3} ${styles.linhaEmL} ${styles.linhaEmLOpen}`}></div>

          <div className={`${styles.linhaEmL4} ${styles.linhaEmL} `}></div>


          {/* SQUARES */}
          <Link href={'./trilha-demo/fase1/aurora-explica'}>
            <div className={`${styles.squareFase1} ${styles.squareFaseOpens} ${styles.squareFases}`}>

              <div className={`${styles.square2Fase1} ${styles.square2FaseOpen} ${styles.square2Fases}`}>
                <div className={styles.faseIcon}>
                  <img className={styles.faseIcon} src='/Modulos/pinkHat.svg'></img>
                </div>

                {/* <div className={styles.bubbleDiv}>
                    <img className={styles.bubble} src='/Modulos/bubble.svg'></img>
                    <h2>Iniciar</h2>
                  </div>*/}
              </div>
            </div></Link>

          <Link href={'./trilha-demo/fase2/aurora-explica'}>
            <div className={`${styles.squareFase2} ${styles.squareFases}`}>
              <div className={`${styles.square2Fase2} ${styles.square2Fases}`}>

                <div className={styles.bubbleDiv}>
                  <img className={styles.bubble} src='/Modulos/bubble.svg'></img>
                </div>

                <div className={styles.faseIcon}>
                  {/* <img className={styles.faseIcon} src='/Modulos/lockImage.svg'></img> */}
                  <img className={styles.faseIcon} src='/Modulos/pinkHat.svg'></img>
                </div>

              </div>
            </div>
          </Link>

          <Link href={'./trilha-demo/fase3/aurora-explica'}>
            <div className={`${styles.squareFase3} ${styles.squareFases}`}>
              <div className={`${styles.square2Fase3} ${styles.square2Fases}`}>

                <div className={styles.bubbleDiv}>
                  <img className={styles.bubble} src='/Modulos/bubble.svg'></img>
                </div>

                <div className={styles.faseIcon}>
                  {/* <img className={styles.faseIcon} src='/Modulos/lockImage.svg'></img> */}
                  <img className={styles.faseIcon} src='/Modulos/pinkHat.svg'></img>
                </div>

              </div>
            </div>
          </Link>

          <Link href={'./trilha-demo/fase4/aurora-explica'}>
            <div className={`${styles.squareFase4} ${styles.squareFases}`}>
              <div className={`${styles.square2Fase4} ${styles.square2Fases}`}>

                <div className={styles.bubbleDiv}>
                  <img className={styles.bubble} src='/Modulos/bubble.svg'></img>
                </div>

                <div className={styles.faseIcon}>
                  {/* <img className={styles.faseIcon} src='/Modulos/lockImage.svg'></img> */}
                  <img className={styles.faseIcon} src='/Modulos/pinkHat.svg'></img>
                </div>

              </div>
            </div>
          </Link>


          {/* IMAGES AND ICONS */}
          <img className={styles.auroraLine} src='/Modulos/auroraLine2.svg'></img>
          <img className={styles.plate} src='/Modulos/plate.svg'></img>
          <img className={styles.trees} src='/Modulos/trees.svg'></img>
          <img className={styles.trees2} src='/Modulos/trees.svg'></img>
          <img className={styles.trees3} src='/Modulos/trees.svg'></img>
          <img className={styles.trees4} src='/Modulos/trees.svg'></img>
          <img className={styles.treesAndMountain} src='/Modulos/treesAndMountain.svg'></img>
          <img className={styles.treesAndMountain2} src='/Modulos/treesAndMountain.svg'></img>


        </div>

      </main>


    </PurpleBackground>
  )
}
