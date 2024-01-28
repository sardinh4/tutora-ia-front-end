'use client'

import Image from 'next/image.js'
import Arrow from "./assets/arrow.svg"
import './arrowBackButton.css'
import { useRouter } from 'next/navigation';

// Seu componente React
const ArrowBackButton = () => {
  const router = useRouter();

  const routerBack = () => {
    router.back();
  };
  return (
    <div className='arrowBackButtonDiv' onClick={routerBack}>
      <Image className='arrow' src={Arrow} width={38} height={30} alt="Botão de Voltar" />
      </div>
  );
};

export default ArrowBackButton;
