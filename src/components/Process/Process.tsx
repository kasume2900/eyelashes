import React from 'react'
import s from './Process.module.scss'
import a1 from '../../assets/process/1.jpg'
import a2 from '../../assets/process/2.jpg'
import a3 from '../../assets/process/3.jpg'
import {HiOutlineArrowLongRight} from 'react-icons/hi2'

export default function Process() {

  const process = [
    {
      img: a1,
      id: 1,
      descr: 'Мы подклеиваем увлажняющие гидрогелевые патчи для защиты нижних ресниц, чтобы процесс наращивания был максимально комфортным. Никакого скотча!'
    },
    {
      img: a2,
      id: 2,
      descr: 'К каждой натуральной ресничке приклеивается от 1 до 6 искусственных ресниц (в зависимости от выбранного вами объёма)'
    },
    {
      img: a3,
      id: 3,
      descr: 'Безупречный результат - без склеек, без вреда для родных ресниц'
    },
  ]


  return (
    <div id='process' className={s.wrap}>
      <p className={s.title}>Как выглядит процесс наращивания</p>
      <div className={s.row}>
        <div className={s.card}>
          <img src={a1} alt="image" />
          <p className={s.text}>{process[0].descr}</p>
        </div>
        <div className={s.card}>
          <div className='relative'>
          <img src={a2} alt="image" />
          <HiOutlineArrowLongRight size={70} className={s.left} />
          <HiOutlineArrowLongRight size={70} className={s.right} />
          </div>
          <p className={s.text}>{process[1].descr}</p>
        </div>
        <div className={s.card}>
          <img src={a3} alt="image" />
          <p className={s.text}>{process[2].descr}</p>
        </div>
      </div>
    </div>
  )
}
