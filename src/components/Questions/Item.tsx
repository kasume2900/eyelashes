import React from 'react'


interface IItemProps {
  title: string
  descr : string
}

export default function Item({descr,title} : IItemProps) {
  return (
    <div className='bg-slate-100 px-4 py-12'>
      <h3 className='font-bold text-center mb-6 text-2xl'>{title}</h3>
      <p className='text-center'>{descr}</p>
    </div>
  )
}
