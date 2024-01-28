import Link from 'next/link';
import styles from './page.module.css'
import ListItens from '@/app/components/contactList.component/contactList.jsx'
import BackgroundWithColoredCircles from '@/app/components/backgroundWithColoredCircles.component/backgroundWithColoredCircles.jsx'
import BackgroundGray from '@/app/components/backgroundGrayDenuncia.component/backgroundGrayDenuncia.jsx'

export default function Home() {
    return (

        <>
            <BackgroundWithColoredCircles
                heightContainer={'100%'}
                circleColor={'#4B2395'}>
                <div className={styles.areaDeDenuncia}>

                    {/* MAIN */}
                    <div className={styles.main}>

                        {/* TOP */}

                        <div className={styles.containerTop}>
                            <img className={styles.robot} src='/Denuncia/AuroraAtenta.svg' alt='Robô sem energia'></img>
                            <div className={styles.containerForms}>
                                <form className={styles.form} action="">
                                    <h2 className={styles.title}>Reportar Problema</h2>

                                    <div className={styles.inputbox}>
                                        <input type="text" placeholder="Nome completo" required />
                                    </div>

                                    <div className={styles.inputbox}>
                                        <input type="text" placeholder="E-mail" required />

                                    </div>
                                    <div className={`${styles.inputbox} ${styles.textbox}`}>
                                        <textarea name="problema" placeholder="Digite aqui como podemos te ajudar" required></textarea>
                                    </div>

                                    <button type="submit" className={styles.btn}>
                                        Enviar
                                    </button>
                                </form>

                            </div>

                        </div>


                    </div>
                </div>


            </BackgroundWithColoredCircles >
            <BackgroundGray>
                {/* BOTTON */}
                <div className={styles.botton}>

                    <h2 className={styles.title}>Você não está sozinh<span>♡</span> nesta jornada!</h2>
                    <div className={styles.bottonMain}>

                        {/* LEFT */}

                        <div className={styles.leftContent}>
                            <img className={styles.hands} src='/Denuncia/maoAbertaDenuncia.svg' alt='desenho de uma mão direita aberta, na cor branca e fundo roxo, com a palma para frente e o polegar fechado' />
                            <img className={styles.hands} src='/Denuncia/maoFechadaDenuncia.svg' alt='desenho de uma mão direita fechada, na cor branca e fundo roxo, com os demais dedos cobrindo o polegar direito' />

                        </div>



                        {/* RIGHT */}
                        <div className={styles.rightContent}>

                            {/* WHATSAPP DISQUE 100 */}

                            <ListItens className={styles.contactList}

                                listItem1={
                                    <div className={styles.purpleBox}>
                                        <p>Fale por Chat</p>
                                        <img className={styles.plus} src='/Denuncia/plus.svg' alt='botão para saber como falar por chat'></img>
                                    </div>}

                                listItem2={
                                    <div className={styles.whiteBox}>
                                        <Link href='https://api.whatsapp.com/send?phone=5561996110100'>Se precisar de ajuda, inicie uma conversa por chat. Lembre-se, você não está sozinha(o), e há apoio disponível.</Link>
                                    </div>}>

                            </ListItens>


                            {/* PHONES */}
                            <ListItens className={styles.contactList}

                                listItem1={
                                    <div className={styles.purpleBox} >
                                        <p>Fale por Telefone</p>
                                        <img className={styles.plus} src='/Denuncia/plus.svg' alt='botão para saber como falar por telefone'></img>
                                    </div>}

                                listItem2={
                                    <div>
                                        <ul>
                                            <li className={`${styles.whiteBox} ${styles.telDisque100}`}>

                                                <Link href='tel:100'>CLique aqui ou disque 100 para falar com os Direitos Humanos. Lembre-se, você tem o direito de buscar ajuda.</Link>

                                            </li>

                                            {/* POLICE */}
                                            <li className={`${styles.telPolice} ${styles.whiteBox}`}>

                                                <Link href='tel:190'>CLique aqui ou ligue para a policia pelo número 190. Lembre-se, as autoridades estão lá para te apoiar.</Link>

                                            </li>
                                        </ul>
                                    </div>}>

                            </ListItens>

                            {/* VIDEOCALL */}

                            <ListItens className={styles.contactList}

                                listItem1={
                                    <div className={styles.purpleBox}>
                                        <p>Converse em Libras</p>
                                        <img className={styles.plus} src='/Denuncia/plus.svg' alt='botão para ter mais informações para falar em libras com especialistas'></img>
                                    </div>}

                                listItem2={
                                    <div className={styles.whiteBox}>
                                        <Link href='https://atendelibras.mdh.gov.br/acesso'>Se precisar de ajuda, inicie uma conversa em libras com pessoas especializadas clicando aqui.</Link>
                                    </div>}>

                            </ListItens>

                        </div>
                    </div>

                </div>

            </BackgroundGray></>
    )
}