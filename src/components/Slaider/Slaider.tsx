
import s from './Slaider.module.scss'
import {slaides} from '../../utils/slides'
import { Navigation, Pagination, Scrollbar, A11y,EffectCoverflow, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.min.css'


export default function Slaider() {

  
  return (
    <div id="about" className={s.wrap}>
       <p className='pt-6 pb-8 text-3xl text-center font-lob font-bold'>Мои работы</p>
      <Swiper
    spaceBetween={50}
    autoplay={{delay : 1350}}
    slidesPerView={1}
    
    modules={[Navigation, Pagination, Scrollbar, A11y,EffectCoverflow,Autoplay]}
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
