import React from 'react'
import s from './Slaider.module.scss'
import {slaides} from '../../utils/slides'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {MdOutlineKeyboardArrowLeft} from 'react-icons/md' 

import {useState} from 'react'

export default function Slaider() {

  const [active ,setActive] = useState(0)

  const nextSlade = () => {
    const isLastSlade = active === slaides.length - 1
    const newActive = isLastSlade ? 0 : active + 1
    setActive(newActive)
  }

  const prevSlade = () => {
    const isFirstSlade = active === 0
    const newActive = isFirstSlade ? slaides.length - 1 : active - 1
    setActive(newActive)
  }


  return (
    <div className={s.wrap}>
      <div style={{backgroundImage : `url(${slaides[active].img})`}} className={s.item}></div>
      <MdOutlineKeyboardArrowRight onClick={nextSlade} className={s.right} />
      <MdOutlineKeyboardArrowLeft onClick={prevSlade} className={s.left} />
      <p className={s.text}>{slaides[active].title}</p>
    </div>
  )
}
