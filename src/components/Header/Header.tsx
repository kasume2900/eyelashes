import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import logoLight from '../../assets/logo-light.svg'
import logoDark from '../../assets/logo-dark.svg'
import s from './Header.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link,animateScroll } from 'react-scroll'
import { useTheme } from '../../hooks/useTheme'
import {BsMoonStarsFill} from 'react-icons/bs'
import {ImSun} from 'react-icons/im'
import Nav from '../Nav/Nav'

interface IHeaderProps {
  tabSelected : (index : number) => void
}



export default function Header({tabSelected} :IHeaderProps) {
 
  const {theme,setTheme} = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(false)
  }

  useEffect(() => {
    const body = document.querySelector('body')
     active ? body!.style.overflow = "hidden" : body!.style.overflow = "auto"
  },[active])

  const handleClickToTabs = (e : any) => {
    const { id } = e.target.dataset 
    setActive(false)
    tabSelected(+id)
  }



  


  return (
    <header id='top' className={s.header}>
      <Layout>
        <div className={s.row}>
          <Link to='top' spy={true} smooth={true} offset={0} duration={500} onClick={() => animateScroll.scrollToTop()} className={s.logo}>
            <img src={theme === 'light' ? logoLight : logoDark} alt="logo" />
          </Link>
          <div className={s.body}>
          <div onClick={changeTheme} className={s.icon}>{theme === 'dark' ? <BsMoonStarsFill /> : <ImSun />}</div>

            <GiHamburgerMenu onClick={() => setActive(true)} className={s.burger} />
          </div>
            <Nav tabSelected={tabSelected} />
        </div>
        <div className={`${s.burgerNav} ${active ? '' : 'translate-x-full'}`}>
          <Link data-id='0' to='eyelash' onTouchStart={handleClickToTabs} spy={true} smooth={true} offset={-100} duration={500} className={s.item}>ресницы</Link>
          <Link to='about' onTouchStart={handleClick} spy={true} smooth={true} offset={-60} duration={500} className={s.item}>мои работы</Link>
          <Link to='process' onTouchStart={handleClick} spy={true} smooth={true} offset={-60} duration={500} className={s.item}>О наращивании</Link>
          <Link to='question' onTouchStart={handleClick} spy={true} smooth={true} offset={-80} duration={500} className={s.item}>вопросы</Link>
          <Link to='contacts' onTouchStart={handleClick} spy={true} smooth={true} offset={50} duration={500} className={s.item}>контакты</Link>
          <AiOutlineClose onClick={() => setActive(false)} className={s.close} />
        </div>
      </Layout>
    </header>
  )
}
