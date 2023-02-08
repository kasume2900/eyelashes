import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import logo from '../../assets/logo.png'
import s from './Header.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import Nav from '../Nav/Nav'

export default function Header() {

  const nav = ['ресницы', 'брови', 'ногти', 'о нас', 'контакты']

  const [active, setActive] = useState(false)



  return (
    <header className={s.header}>
      <Layout>
        <div className={s.row}>
          <div className={s.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={s.body}>
            <div className={s.titleAdresWrap}>
              <p className={s.title}>Наращивание ресниц, брови, перманент,маникюр</p>
              <p className={s.adres}>Метро: улица 1905 г. (7минут пешком)</p>
            </div>
            <button className={s.btn}>Позвонить</button>
            <GiHamburgerMenu onClick={() => setActive(true)} className={s.burger} />
          </div>
        </div>
        <div className={`${s.burgerNav} ${active ? '' : 'translate-x-full'}`}>
            {nav.map(el => <div className={s.item} key={el}>{el}</div>)}
            <AiOutlineClose onClick={() => setActive(false)} className={s.close} />
          </div>
        



      </Layout>
    </header>
  )
}
