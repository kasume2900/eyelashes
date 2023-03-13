import React from 'react'
import s from './Studia.module.scss'
import studia from '../../assets/Studia/studia.jpg'
import comfort from '../../assets/Studia/comfort.svg'
import coffe from '../../assets/Studia/coffe.svg'

export default function Studia() {
  return (
    <div className={s.wrap}>
      <p className={s.title}>Атмосфера Студии</p>
      <div className={s.row}>
        <img className={s.image} src={studia} alt="image" />
        <div className={s.body}>
          <div className={s.card}>
            <img src={comfort} alt="icon" />
            <div className={s.cardBody}>
              <p className={s.cardTitle}>Комфорт и уют</p>
              <p className={s.cardText}>Для Вашего удобства анатомические подушки.</p>
              <p className={s.cardText}>Можно на 9-ом месяце беременности или с больной спиной!</p>
            </div>
          </div>
          <div className={s.card}>
            <img src={coffe} alt="icon" />
            <div className={s.cardBody}>
              <p className={s.cardTitle}>Искренняя забота</p>
              <p className={s.cardText}>У нас можно отдохнуть и выспаться или поговорить по душам.</p>
              <p className={s.cardText}>А чашечка ароматного кофе согреет вас даже в самую плохую погоду.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
