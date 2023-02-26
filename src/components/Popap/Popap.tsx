import React, { useState } from 'react'
import { ITabs } from '../../types/types'
import s from './Popap.module.scss'
import {MdArrowDropDown} from 'react-icons/md'
import {MdArrowDropUp} from 'react-icons/md'

interface IPopapProps {
  tabs: ITabs[]
  active: number
  tabSelected : (index : number) => void
}


export default function Popap({ tabs, active,tabSelected }: IPopapProps) {

  const [vizible, setVizible] = useState(false)

  const handleClick = (index : number) => {
    tabSelected(index)
    setVizible(false)
  }



  return (
    <div id='eyelash' className={s.popapWrap}>
      <div onClick={() => setVizible(!vizible)} className={s.top}>
        <div className={s.filter}>{tabs[active].filter}</div>
        <div className={s.icon}>
          {vizible ? <MdArrowDropUp fill='#fe1020' /> : <MdArrowDropDown fill='#fe1020' />}
        </div>
      </div>
      {
        vizible && <div className={s.bottom}>
        {tabs.map((el,index) => <div className={s.item} onClick={() => handleClick(index)} key={el.filter}>{el.filter}</div>)}
      </div>
      }
      
    </div>
  )
}
