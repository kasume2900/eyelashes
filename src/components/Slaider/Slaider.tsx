import React, { useEffect } from 'react'
import s from './Slaider.module.scss'
import {slaides} from '../../utils/slides'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {RiArrowLeftSLine} from 'react-icons/ri' 

import {useState} from 'react'
import Carousel from '../Carousel/Carousel'

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
      <Carousel autoSlade={true} autoSladeInterval={3000}>
        {slaides.map(el => <img className={s.img} src={el.img} alt="image" />)}
      </Carousel>
      
    </div>
  )
}
