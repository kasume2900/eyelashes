import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Popap from "./components/Popap/Popap"
import Tabs from "./components/Tabs/Tabs"
import Layout from "./Layout/Layout"
import {tabs} from './utils/tabs'
import {useState } from 'react'
import Slaider from "./components/Slaider/Slaider"
import Concept from "./components/Concept/Concept"
import Questions from "./components/Questions/Questions"
import Footer from "./components/Footer/Footer"



function App() {

  const [active,setActive] = useState(0)

  const tabSelected = (index : number) => {
    setActive(index)
  }

  

  return (
   <> 
     <Header tabSelected={tabSelected}/>
     <Layout>
      <Nav tabSelected={tabSelected} />
      <Popap tabs={tabs} active={active} tabSelected={tabSelected} />
      <Tabs active={active} tabSelected={tabSelected} />
      <p id="about" className='pt-6 text-2xl text-center font-exo font-bold'>Мои работы</p>
     </Layout>
      <Slaider />
      <Layout>
      </Layout>
        <Concept />
        <Questions />
      <Footer />
   </>
  )
}

export default App
