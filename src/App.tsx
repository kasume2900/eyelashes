import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Popap from "./components/Popap/Popap"
import Tabs from "./components/Tabs/Tabs"
import Layout from "./Layout/Layout"


function App() {
  

  return (
   <> 
     <Header />
     <Layout>
      <Nav />
      <Popap />
      <Tabs />
     </Layout>
   </>
  )
}

export default App
