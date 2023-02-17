import React from 'react'
import s from './Carousel.module.scss'
import {useState,useEffect} from 'react'
import { ISlides } from '../../types/types'
interface ICorouselProps {
  children : any
  autoSlade : boolean
  autoSladeInterval : number 
}

export default function Carousel({ children : slides,autoSlade,autoSladeInterval} : ICorouselProps) {

  const [curr,setCurr] = useState(0)

  const prev = () => setCurr(curr => curr === 0 ? slides.length - 1 : curr - 1)
  const next = () => setCurr(curr => curr === slides.length - 1 ? 0 : curr + 1)

  useEffect(() => {
    if(!autoSlade) return
    const slideInterval = setInterval(next,autoSladeInterval)
    return () => clearInterval(slideInterval)
  },[])

  return (
    <div className={s.wrap}>
      <div style={{transform : `translateX(-${curr * 100}%)`}} className={s.row}>{slides}</div>
      <div className={s.navWrap}>
        <div onClick={prev}>prev</div>
        <div onClick={next}>next</div>
      </div>
      <div className={s.dotsWrap}>
        <div className={s.dots}>
          {slides.map((_ : any,i : any) =><div className={`${s.dot} ${curr === i ? 'p-2' : 'bg-opacity-50' }`}></div> )}
        </div>
      </div>
    </div>
  )
}
