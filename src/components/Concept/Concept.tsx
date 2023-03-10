import React from 'react'
import s from './Concept.module.scss'

export default function Concept() {
  return (
    <div className={s.wrap}>
      <div className='flex items-center justify-center'>
        <div className='w-full h-[2px] bg-black'></div>
        <div className='w-[400px] px-3 py-3 text-white bg-black text-center'>МОЯ КОНЦЕПЦИЯ</div>
        <div className='w-full h-[2px] bg-black'></div>
      </div>
      <p className='text-center text-xl mt-8 mb-8'>Я не просто наращивю ресницы, я моделирую взгляд. Любовь с первого взгляда</p>
      <div className='w-full h-[2px] bg-black'></div>
    </div>
  )
}
