import React from 'react'
import s from './Carousel.module.scss'
import {useState,useEffect} from 'react'
import { ISlides } from '../../types/types'
import {TfiAngleLeft} from 'react-icons/tfi'
import {TfiAngleRight} from 'react-icons/tfi'
import {slaides} from '../../utils/slides'



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
        <TfiAngleLeft className={s.icon} onClick={prev} />
        <TfiAngleRight className={s.icon} onClick={next} />
      </div>
      <div className={s.text}>{slaides[curr].title}</div>
    </div>
  )
}
