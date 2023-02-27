import React from 'react'
import s from './Item.module.scss'

interface IItemProps {
  title: string
  descr : string
}

export default function Item({descr,title} : IItemProps) {
  return (
    <div className={s.wrap}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.descr}>{descr}</p>
    </div>
  )
}
