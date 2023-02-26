import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import logo from '../../assets/logo.png'
import s from './Header.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'


interface IHeaderProps {
  tabSelected : (index : number) => void
}



export default function Header({tabSelected} :IHeaderProps) {
  const testAttr = {'data-attr': 'value'}

  const nav = ['ресницы', 'брови', 'ногти', 'о нас', 'контакты']

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(false)
  }

  const handleClickToTabs = (e : any) => {
    const { id } = e.target.dataset 
    setActive(false)
    tabSelected(+id)
  }



  


  return (
    <header className={s.header}>
      <Layout>
        <div className={s.row}>
          <div className={s.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={s.body}>
            <div className={s.titleAdresWrap}>
              <p className={s.title}>Наращивание ресниц, брови, перманент,маникюр</p>
              <p className={s.adres}>Метро: улица 1905 г. (7минут пешком)</p>
            </div>
            <button className={s.btn}>Позвонить</button>
            <GiHamburgerMenu onClick={() => setActive(true)} className={s.burger} />
          </div>
        </div>
        <div className={`${s.burgerNav} ${active ? '' : 'translate-x-full'}`}>
          <Link data-id='0' to='eyelash' onTouchStart={handleClickToTabs} spy={true} smooth={true} offset={-25} duration={500} className={s.item}>ресницы</Link>
          <Link data-id='2'  to='eyelash' onTouchStart={handleClickToTabs} spy={true} smooth={true} offset={-25} duration={500} className={s.item}>брови</Link>
          <Link data-id='3' to='eyelash' onTouchStart={handleClickToTabs} spy={true} smooth={true} offset={-25} duration={500} className={s.item}>ногти</Link>
          <Link to='about' onTouchStart={handleClick} spy={true} smooth={true} offset={0} duration={500} className={s.item}>о нас</Link>
          <Link to='contacts' onTouchStart={handleClick} spy={true} smooth={true} offset={50} duration={500} className={s.item}>контакты</Link>
          <AiOutlineClose onClick={() => setActive(false)} className={s.close} />
        </div>
      </Layout>
    </header>
  )
}
