
import Card from '../Card/Card'
import s from './Tabs.module.scss'
import {tabs} from '../../utils/tabs'

interface ITabsProps {
  tabSelected : (index : number) => void
  active : number
}

export default function Tabs({tabSelected,active} : ITabsProps) {

  return (
    <>
      <div className={s.tabTop}>
        {tabs.map((el,ind) => <div className={s.tab} onClick={() => tabSelected(ind)} key={el.filter}>{el.filter}</div>)}
      </div>
      <div className={s.content}>
          {
            tabs[active].cards.map(el => <Card key={el.title} {...el} />)
          }
      </div>
    </>
  )
}
