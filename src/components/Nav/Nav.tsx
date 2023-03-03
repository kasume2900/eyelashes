import React from 'react'
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
      <Link data-id='0' to='eyelash' onClick={handleClickToTabs} spy={true} smooth={true} offset={150} duration={500} className={s.item}>ресницы</Link>
      <Link data-id='2' to='eyelash' onClick={handleClickToTabs} spy={true} smooth={true} offset={150} duration={500} className={s.item}>брови</Link>
      <Link data-id='3' to='eyelash' onClick={handleClickToTabs} spy={true} smooth={true} offset={150} duration={500} className={s.item}>ногти</Link>
      <Link to='about' spy={true} smooth={true} offset={0} duration={500} className={s.item}>о нас</Link>
      <Link to='contacts' spy={true} smooth={true} offset={50} duration={500} className={s.item}>контакты</Link>
    </nav>
  )
}
