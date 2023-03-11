import React from 'react'
import Layout from '../../Layout/Layout'
import s from './Footer.module.scss'
import {BsTelephonePlusFill} from 'react-icons/bs'
import {SiWhatsapp} from 'react-icons/si'

export default function Footer() {

  return (
    <footer id='contacts' className={s.wrap}>
      <Layout>
        <h3 className={s.title}>ЕСЛИ ОСТАЛИСЬ ВОПРОСЫ, БУДУ РАДА НА НИХ ОТВЕТИТЬ</h3>
        <div className={s.row}>
          <div className={s.adress}>
            <p className={s.item}>Aдрес: Г. Биробиджан, ул. Сапёрная 23.</p>
            <p className={s.item}>2-этаж 18 кабинет.</p>
          </div> 
          <div className={s.contacts}>
            <p className={s.item}>Контакты</p>
            <a href='tel:+79648267111' className={s.link}>
              <BsTelephonePlusFill className={s.icon} size={30} />
              <span>Телефон</span></a>

            <a href='https://api.whatsapp.com/send/?phone=79648267111&text=Здравствуйте%2C+у+меня+есть+вопрос' className={s.link}>
              <SiWhatsapp className={s.icon} size={30} />
              <span>Whatsapp</span></a>
          </div> 
        </div>
      </Layout>
    </footer>
  )
}
