
import './App.css'
import Banner from './Components/Banner/Banner'
import Metrics from './Components/Banner/Metrics'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import PricingSection from './Components/PricingSection/PricingSection'

function App() {


  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <Metrics></Metrics>
      <DigitalTools></DigitalTools>

      <PricingSection></PricingSection>
      <Footer></Footer>



    </>
  )
}

export default App
