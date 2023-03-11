import React from 'react'
import s from './Concept.module.scss'

export default function Concept() {
  return (
    <div className={s.wrap}>
      <div className={s.row}>
        <div className={s.line}></div>
        <div className={s.title}>МОЯ КОНЦЕПЦИЯ</div>
        <div className={s.line}></div>
      </div>
      <p className={s.text}>Я не просто наращивю ресницы, я моделирую взгляд. Любовь с первого взгляда</p>
      <div className={s.line}></div>
    </div>
  )
}
