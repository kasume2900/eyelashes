import React from 'react'
import s from './ProcedureCard.module.scss'


interface IProcedureCardProps {
  id : number
  title : string
  text : string
}



export default function ProcedureCard({id,text,title} : IProcedureCardProps) {

  return (
    <div className={s.wrap}>
      <div className={s.row}>
        <div className={s.image}>
          <span>{id}</span>
        </div>
        <div className={s.body}>
          <p className={s.title}>{title}</p>
          <p className={s.text}>{text}</p>
        </div>
      </div>
    </div>
  )
}
