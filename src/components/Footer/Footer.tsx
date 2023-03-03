import React from 'react'
import Layout from '../../Layout/Layout'
import s from './Footer.module.scss'

export default function Footer() {
  return (
    <footer id='contacts' className={s.wrap}>
      <Layout>
        <h3 className={s.title}>ЕСЛИ ОСТАЛИСЬ ВОПРОСЫ, БУДЕМ РАДЫ НА НИХ ОТВЕТИТЬ</h3>
        <div>
          <a href='https://api.whatsapp.com/send/?phone=79200000000&text=Здравствуйте%2C+у+меня+есть+вопрос' className={s.item}>моб. +79169260818 (whatsapp, viber)</a>
          <p className={s.item}>instagram @thelashbar.ru</p>
          <p className={s.item}>Наш адрес: г. Москва, м. 1905 года, ул. 2-я Звенигородская, 13с15.</p>
          <p className={s.item}>2-этаж 8 кабинет.</p>
          <p className={s.item}>вход с улицы 2-я Звенигородская</p>
        </div>
      </Layout>
    </footer>
  )
}
