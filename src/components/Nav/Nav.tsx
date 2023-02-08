import React from 'react'
import s from './Nav.module.scss'

export default function Nav() {

  const nav = ['ресницы','брови','ногти','о нас','контакты']


  return (
    <nav className={s.nav}>
      {
        nav.map(el => <div className={s.item} key={el}>{el}</div>)
      }
    </nav>
  )
}
