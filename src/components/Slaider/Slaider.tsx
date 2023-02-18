
import s from './Slaider.module.scss'
import {slaides} from '../../utils/slides'
import Carousel from '../Carousel/Carousel'

export default function Slaider() {

  
  return (
    <div className={s.wrap}>
      <Carousel autoSlade={false} autoSladeInterval={3000}>
        {slaides.map(el => <img key={el.id} className={s.img} src={el.img} alt="image" />)}
      </Carousel>
      
    </div>
  )
}
