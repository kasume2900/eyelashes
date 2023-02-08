import React from 'react'

interface ILayoutProps {
  children : React.ReactNode
}

export default function Layout({children} : ILayoutProps) {
  return (
    <div className='max-w-screen-xl mx-auto'>{children}</div>
  )
}
