import React, { useState } from 'react'
import Card from '../Card/Card'
import s from './Tabs.module.scss'
import a1 from '../../assets/eyelashes/1.jpg'
import a2 from '../../assets/eyelashes/2.jpg'
import a3 from '../../assets/eyelashes/3.jpg'
import a4 from '../../assets/eyelashes/4.jpg'
import a5 from '../../assets/eyelashes/5.jpg'
import a6 from '../../assets/eyelashes/6.jpg'
import a7 from '../../assets/eyelashes/7.jpg'
import a8 from '../../assets/eyelashes/8.jpg'
import a9 from '../../assets/eyelashes/9.jpg'
import a10 from '../../assets/eyelashes/10.jpg'
import a11 from '../../assets/eyelashes/11.jpg'
import a12 from '../../assets/eyelashes/12.jpg'
import a13 from '../../assets/eyelashes/13.jpg'
import a14 from '../../assets/eyelashes/14.jpg'
import b1 from '../../assets/lami/1.jpg'
import b2 from '../../assets/lami/2.jpg'
import b3 from '../../assets/lami/3.jpg'
import c1 from '../../assets/brows/1.jpg'
import c2 from '../../assets/brows/2.gif'
import c3 from '../../assets/brows/3.jpg'
import c4 from '../../assets/brows/4.jpg'
import c5 from '../../assets/brows/5.jpg'
import c6 from '../../assets/brows/6.jpg'
import c7 from '../../assets/brows/7.jpg'
import c8 from '../../assets/brows/8.jpg'
import c9 from '../../assets/brows/9.jpg'
import d1 from '../../assets/manicure/1.jpg'
import d2 from '../../assets/manicure/2.jpg'
import d3 from '../../assets/manicure/3.jpg'
import d4 from '../../assets/manicure/4.jpg'
import i1 from '../../assets/makeup/1.jpg'
import i2 from '../../assets/makeup/2.jpg'
import i3 from '../../assets/makeup/3.jpg'


export default function Tabs() {

  const [active,setActive] = useState(0)


  const tabs = [
    {
      filter: 'НАРАЩИВАНИЕ РЕСНИЦ',
      cards : [
        {
          img : a1,
          title: 'Полный объём',
          price: '2200 руб.',
          desc: 'На каждую свою ресничку наращивается 1 ресничка. Естественный эффект густых и длинных ресниц. Время процедуры - 2,5 часа'
        },
        {
          img : a2,
          title: 'Двойной объём',
          price: '2600 руб.',
          desc: 'На каждую свою ресничку наращивается 2 реснички. Ресницы пышные, взгляд более выразительный. Время процедуры - 2,5 -3 часа'
        },
        {
          img : a3,
          title : 'Тройной объём',
          price : '3000 руб.',
          desc : 'На каждую свою ресничку наращивается 3 реснички. Яркие, густые, эффектные и выразительные ресницы. Время процедуры - 3 часа'
        },
        {
          img : a4,
          title : 'Голливудский объём',
          price : '3500 руб.',
          desc : 'На каждую свою ресничку наращивается от 4 до 6 ресничек. Эффектно и ярко, как на обложке журнала! Используются максимально тонкие и невесомые ресницы. Время процедуры - от 3 часов'
        },
        {
          img : a5,
          title : 'Неполный объём',
          price : '1500 руб.',
          desc : 'Наращиваются не все ресницы, а примерно 60%. Максимально естественный эффект, чтобы никто не догадался о наращивании. Время процедуры - 1-1,5 часа'
        },
        {
          img : a6,
          title : 'Коррекция',
          price : 'от 1300 руб.',
          desc : 'Коррекция выполняется не позже, чем через 3 недели после наращивания, если осталось не менее 50% наращенных ресниц. Сначала мастер снимает те ресницы, которые уже отросли, затем наращивает свободные ресницы заново. Время процедуры - 1,5 -3 часа в зависимости от объема'
        },
        {
          img : a7,
          title : 'Снятие ресниц',
          price : 'Бесплатно (перед наращиванием)',
          desc : 'Снятие проводится с помощью специального кремового состава, который мягко снимает ресницы, не раздражая глаз. Время процедуры - 15 минут. Если ресницы были нарощены в другой студии или снятие без последующего наращивания - стоимость будет 500 руб.'
        },
        {
          img : a8,
          title : 'Королевский объем',
          price : '4000 руб.',
          desc : 'На каждую ресничку наращивается от 6 до 8 ультратонких ресничек. Поистине королевские роскошные ресницы!'
        },
        {
          img : a9,
          title : 'Экспресс-наращивание!',
          price : '1900 руб.',
          desc : 'Прорабатывается 50-60% ресниц двойными или тройными пучками. Результат выглядит как Двойной объем. Время процедуры - всего 1 час!'
        },
        {
          img : a10,
          title : 'Коричневые ресницы',
          price : '0 руб.',
          desc : 'Мы не берем доплату за коричневые ресницы и ресницы оттенка "Горький шоколад"'
        },
        {
          img : a11,
          title : 'Цветные ресницы',
          price : '0 руб.',
          desc : 'Мы не берем доплату за цветные ресницы'
        },
        {
          img : a12,
          title : 'Изгиб L',
          price : '0 руб.',
          desc : 'Мы не берем доплату за изгиб L. Невероятно модный и эффектный изгиб!'
        },
        {
          img : a13,
          title : 'Эффект Ким Кардашьян (Лучики)',
          price : '3000 руб.',
          desc : 'Эффект Ким Кардашьян делается на базе двойного или тройного объема. Сочетает в себе пушистые ресницы, а также Лучики - более длинные, выделяющиеся на фоне остальных ресниц. Невероятно эффектно и модно!'
        },
        {
          img : a14,
          title : 'Эксклюзивный изгиб М',
          price : '+500 руб',
          desc : 'Хит этого лета! Максимально раскрывает взгляд, обладает лифтинг-эффектом.'
        },
        
      ]
    },
    {
      filter : 'ЛАМИНИРОВАНИЕ И УХОД',
      cards : [
        {
          img : b1,
          title : 'Ламинирование ресниц',
          price : '2200 руб.',
          desc : 'Лечебная SPA процедура для ваших ресниц. Время процедуры - 1 час. После ламинирования ресницы визуально утолщаются, приобретают изгиб и прокрашиваются черной гипоаллергенной краской. Эффект держится до 3 месяцев'
        },
        {
          img : b2,
          title : 'Ботокс ресниц',
          price : '2700 руб.',
          desc : 'Включает в себя процедуру ламинирования ресниц, а также нанесение специального состава Lash Botox. Ботокс для ресниц заполняет разрушенные части ресницы, восстанавливает природную структуру и глубоко питает волоски изнутри. Эффект держится до 3 месяцев'
        },
        {
          img : b3,
          title : 'Окрашивание ресниц',
          price : '500 руб.',
          desc : 'Верхние и нижние ресницы окрашиваются от корней до самых кончиков специальной гипоаллергенной черной краской'
        },
        
      ]
    },
    {
      filter : 'БРОВИ',
      cards : [
        {
          img : c1,
          title : 'Коррекция бровей',
          price : '600 руб.',
          desc : 'Построение правильной формы бровей в соответствии с техникой и пожеланиями клиента, коррекция пинцетом или нитью'
        },
        {
          img : c2,
          title : 'Окрашивание бровей хной',
          price : '700 руб.',
          desc : 'Окрашивает волоски и кожу. Эффект татуажа. Питает волоски, ускоряет их рост, производит лечебный эффект. Держится от 4 недель! Оттенок подбирается бровистом индивидуально'
        },
        {
          img : c3,
          title : 'Окрашивание бровей краской',
          price : '500 руб.',
          desc : 'Окрашивание волосков. Естественный эффект. Держится до 6 недель! Натуральные оттенки, высокая стойкость окрашивания'
        },
        {
          img : c4,
          title : 'Коррекция бровей+краска',
          price : '1100 900 руб.',
          desc : 'Построение правильной формы бровей в соответствии с техникой и пожеланиями клиента, коррекция пинцетом или нитью, окрашивание гипоаллергенной краской. Процедура длится 30 минут. Оттенок подбирается индивидуально по вашим пожеланиям'
        },
        {
          img : c5,
          title : 'Коррекция бровей + хна',
          price : '1300 1200 руб.',
          desc : 'Процедура включает в себя построение правильной формы бровей, коррекцию пинцетом или нитью, обработку скрабом, окрашивание хной Brow Henna. Длительность процедуры - 1 час'
        },
        {
          img : c6,
          title : 'Ламинирование бровей',
          price : '2200 руб.',
          desc : 'Процедура, включающая в себя окрашивание бровей краской, долговременную укладку и укрепление бровей кератиновым составом. Процедура позволяет справиться с асимметрией бровей, сделать их более послушными и скорректировать направление роста волосков. Эффект - до 2 месяцев! Длительность - 1 час'
        },
        {
          img : c7,
          title : 'Коррекция бровей воском',
          price : '400 руб.',
          desc : 'Удаление пушковых волос вокруг бровей горячим воском. Результат - идеально гладкая кожа вокруг бровей.'
        },
        {
          img : c8,
          title : 'Удаление пушковых волос на лице нитью или воском',
          price : '400 руб.',
          desc : 'Удаление нежелательных пушковых волос над верхней губой'
        },
        {
          img : c9,
          title : 'Обезболивание перед процедурой',
          price : '200 руб.',
          desc : 'Нанесение обезболивающего средства перед коррекцией бровей. Длительность - 7 минут'
        },
        
      ]
    },
    {
      filter : 'МАНИКЮР И ПЕДИКЮР',
      cards : [
        {
          img : d1,
          title : 'Классический маникюр + гель-лак',
          price : '1200 1500 руб. (акция на первый визит -20%!)',
          desc : 'Включает в себя классический маникюр с использованием ванночки. Придание формы ногтям, обрезание кутикулы, покрытие гель-лаком премиум-класса Beautix, увлажнение рук кремом. Клиенту выдается одноразовый комплект пилочек, в процессе используется простерилизованный комплект инструментов в крафт-пакете с индикатором. 100% безопасность.'
        },
        {
          img : d2,
          title : 'Аппаратный/ Комбинированный маникюр + Гель-лак',
          price : '1300 1800 руб. (акция на первый визит-20%!)',
          desc : 'Включает в себя обработку кутикулы и кожи специальным аппаратом. Придание формы ногтям, покрытие гель-лаком премиум-класса Beautix, увлажнение рук кремом. Клиенту выдается одноразовый комплект пилочек, в процессе используется простерилизованный комплект инструментов в крафт-пакете с индикатором. 100% безопасность.'
        },
        {
          img : d3,
          title : 'Классический/Аппаратный педикюр + Гель-лак',
          price : '1900 2400 руб. (акция на первый визит-20%!)',
          desc : 'Включает в себя классический обрезной педикюр или обработку стоп аппаратом. Придание формы ногтям, удаление кутикулы, покрытие гель-лаком премиум-класса Beautix, обработка скрабом и кремом. Клиенту выдается одноразовый комплект пилочек, одноразовая терка или насадка для аппарата, в процессе используется простерилизованный комплект инструментов в крафт-пакете с индикатором. 100% безопасность.'
        },
        {
          img : d4,
          title : 'Дизайн',
          price : 'от 50 руб.',
          desc : 'Возможны различные варианты - фольга, втирка, битое стекло, дизайн 3Д, художественная роспись, стразы и др.'
        },
        
      ]
    },
    {
      filter : 'ПЕРМАНЕНТНЫЙ МАКИЯЖ',
      cards : [
        {
          img : i1,
          title : 'Пудровые брови (скидка 20%!)',
          price : '7200 9000 руб. (акция)!',
          desc : 'Перманентный макияж в технике напыление.Наиболее атравматичный и безопасный способ перманентного макияжа бровей, безусловный хит! Без корочек и крови! Естественные, визуально густые пудровые брови сроком на 1,5 - 2 года. Оттенок выбирается индивидуально под вашу внешность и пожелания'
        },
        {
          img : i2,
          title : 'Перманентный макияж губ (скидка 20%!)',
          price : '6400 8000 руб. (акция)!',
          desc : 'Перманентный макияж губ выполняется в различных техниках - акварель, градиент, sugar lips с учетом индивидуальных особенностей вашей внешности, образа и личных пожеланий. В распоряжении мастера широкая палитра оттенков - от совсем натуральных светлых до сочных ярких. Эффект держится от 1,5 до 2 лет в зависимости от типа кожи.'
        },
        {
          img : i3,
          title : 'Перманентный макияж глаз (скидка 20%!)',
          price : 'от 4800 6000 руб (акция)!',
          desc : 'Возможны различные варианты - заполнение межресничного пространства, стрелка, стрелка с растушевкой. Эффект держится от 1,5 до 2 лет в зависимости от типа кожи.'
        },
        
      ]
    }

  ]

  return (
    <div>
      <div className={s.tabTop}>
        {tabs.map((el,ind) => <div className={s.tab} onClick={() => setActive(ind)} key={el.filter}>{el.filter}</div>)}
      </div>
      <div className={s.content}>
          {
            tabs[active].cards.map(el => <Card {...el} />)
          }
      </div>
    </div>
  )
}