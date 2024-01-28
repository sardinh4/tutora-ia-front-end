import React from 'react'
import './titleAuthdUser.css'
import ArrowBackButton from '@/app/components/arrowBackButton.component/arrowBackButton.jsx';
import Menu from '@/app/components/burguerMenuAuthdUser/burguerMenuAuthdUser.jsx'

export default function TitleAuthdUser({ children }) {

  return (

    <header className='header'>
      <ArrowBackButton />
      <section className='titleBox'>
        {children}
      </section>
      <Menu className='menuBtn' />
    </header>
  )
}