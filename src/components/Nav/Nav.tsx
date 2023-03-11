import React, { useState } from 'react'
import s from './Nav.module.scss'
import {Link} from 'react-scroll'

interface INavProps {
  tabSelected : (index : number) => void
}

export default function Nav({tabSelected} : INavProps) {

  const handleClickToTabs = (e : any) => {
    const { id } = e.target.dataset 
    tabSelected(+id)
  }

  return (
    <nav className={s.nav}>
      <Link data-id='0' to='eyelash' onTouchStart={handleClickToTabs} spy={true} smooth={true} offset={-100} duration={500} className={s.item}>ресницы</Link>
      <Link to='about' spy={true} smooth={true} offset={-70} duration={500} className={s.item}>обо мне</Link>
      <Link to='contacts' spy={true} smooth={true} offset={50} duration={500} className={s.item}>контакты</Link>
    </nav>
  )
}
