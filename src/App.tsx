import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Popap from "./components/Popap/Popap"
import Tabs from "./components/Tabs/Tabs"
import Layout from "./Layout/Layout"
import { tabs } from './utils/tabs'
import { useState } from 'react'
import Slaider from "./components/Slaider/Slaider"
import Concept from "./components/Concept/Concept"
import Questions from "./components/Questions/Questions"
import Footer from "./components/Footer/Footer"
import Process from "./components/Process/Process"
import Procedure from "./components/Procedure/Procedure"
import Studia from "./components/Studia/Studia"



function App() {

  const [active, setActive] = useState(0)

  const tabSelected = (index: number) => {
    setActive(index)
  }



  return (
    <>
      <Header tabSelected={tabSelected} />
      <div className='wrapper'>
        <Layout>
        
          <h1 className="pt-28 mb-8 font-bold text-center text-3xl md:text-4xl lg:pt-28 font-lob tracking-wider">Наращивание ресниц</h1>
          <Tabs active={active} tabSelected={tabSelected} />
          <Process />
          <Procedure />
          <Studia />
          <p id="about" className='pt-6 pb-8 text-3xl text-center font-lob font-bold'>Мои работы</p>
        </Layout>
      <Slaider />
      </div>
      <Layout>
      </Layout>
      <Concept />
      <Questions />
      <Footer />
    </>
  )
}

export default App
