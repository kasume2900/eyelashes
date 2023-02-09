import React from 'react'
import s from './Card.module.scss'

interface ICardProps {
  img : string
  title : string
  price : string
  desc : string
}


export default function Card({title,price,desc,img} :ICardProps) {
  return (
    <div className={s.wrap}>
      <div className={s.image}>
        <img src={img} alt="img" />
      </div>
      <p className={s.title}>{title}</p>
      <p className={s.price}>{price}</p>
      <p className={s.description}>{desc}</p>
    </div>
  )
}
