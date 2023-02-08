import React from 'react'
import Layout from '../../Layout/Layout'
import logo from '../../assets/logo.png'
import s from './Header.module.scss'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Header() {
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
            <GiHamburgerMenu className={s.burger} />
          </div>
        </div>
      </Layout>
    </header>
  )
}
