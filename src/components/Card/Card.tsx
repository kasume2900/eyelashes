import React from 'react'
import s from './Card.module.scss'
import lent from '../../assets/lent.png'


interface ICardProps {
  img : string
  title : string
  price : string
  desc : string
  xit? : boolean 
}


export default function Card({title,price,desc,img,xit} :ICardProps) {
  return (
    <div className={s.wrap}>
      <div className={s.image}>
        <img src={img} alt="img" />
      </div>
      {xit && <img className={s.lent} src={lent} alt="lent" />}
      {xit && <div className={s.xit}>хит</div>}
      <p className={s.title}>{title}</p>
      <p className={s.price}>{price}</p>
      <p className={s.description}>{desc}</p>
    </div>
  )
}
