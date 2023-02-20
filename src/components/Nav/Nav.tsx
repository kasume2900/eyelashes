import React from 'react'
import s from './Nav.module.scss'
import {Link} from 'react-scroll'

export default function Nav() {

  const nav = ['ресницы','брови','ногти','о нас','контакты']


  return (
    <nav className={s.nav}>
      <Link to='1' spy={true} smooth={true} offset={50} duration={500} className={s.item}>ресницы</Link>
      <Link to='2' spy={true} smooth={true} offset={50} duration={500} className={s.item}>брови</Link>
      <Link to='3' spy={true} smooth={true} offset={50} duration={500} className={s.item}>ногти</Link>
      <Link to='about' spy={true} smooth={true} offset={0} duration={500} className={s.item}>о нас</Link>
      <Link to='contacts' spy={true} smooth={true} offset={50} duration={500} className={s.item}>контакты</Link>
    </nav>
  )
}
