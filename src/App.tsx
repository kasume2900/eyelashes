import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Popap from "./components/Popap/Popap"
import Tabs from "./components/Tabs/Tabs"
import Layout from "./Layout/Layout"
import {tabs} from './utils/tabs'
import {useState} from 'react'
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
     <Header />
     <Layout>
      <Nav />
      <Popap tabs={tabs} active={active} tabSelected={tabSelected} />
      <Tabs active={active} tabSelected={tabSelected} />
      <Slaider />
      <Concept />
     </Layout>
      <Questions />
      <Footer />
   </>
  )
}

export default App
