
import s from './Slaider.module.scss'
import {slaides} from '../../utils/slides'
import Carousel from '../Carousel/Carousel'
import { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
//import 'swiper/css'
import 'swiper/swiper-bundle.min.css'


export default function Slaider() {

  
  return (
    <div className={s.wrap}>
      <Swiper
    spaceBetween={50}
    slidesPerView={1}
    modules={[Navigation, Pagination, Scrollbar, A11y,EffectCoverflow]}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    navigation
    pagination={{ clickable: true , dynamicBullets : true }}
    speed={800}
    effect='coverflow'
  >
    {slaides.map(el => <SwiperSlide  key={el.id}>
      <img className={s.img} src={el.img} alt="image" />
    </SwiperSlide>)}
  </Swiper>
    </div>
  )
}
