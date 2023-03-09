import React from 'react'
import Layout from '../../Layout/Layout'
import s from './Footer.module.scss'

export default function Footer() {
  return (
    <footer id='contacts' className={s.wrap}>
      <Layout>
        <h3 className={s.title}>ЕСЛИ ОСТАЛИСЬ ВОПРОСЫ, БУДУ РАДА НА НИХ ОТВЕТИТЬ</h3>
        <div>
          <a href='https://api.whatsapp.com/send/?phone=79200000000&text=Здравствуйте%2C+у+меня+есть+вопрос' className={s.item}>+79169260818 <span>(Whatsapp, Мобильный )</span></a>
          <p className={s.item}>instagram <span>@thelashbar.ru</span></p>
          <p className={s.item}>Наш адрес: г. Москва, м. 1905 года, ул. 2-я Звенигородская, 13с15.</p>
          <p className={s.item}>2-этаж 8 кабинет.</p>
          <p className={s.item}>вход с улицы 2-я Звенигородская</p>
        </div>
      </Layout>
    </footer>
  )
}
