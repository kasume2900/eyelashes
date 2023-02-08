import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Popap from "./components/Popap/Popap"
import Layout from "./Layout/Layout"


function App() {
  

  return (
   <> 
     <Header />
     <Layout>
      <Nav />
      <Popap />
     </Layout>
   </>
  )
}

export default App
