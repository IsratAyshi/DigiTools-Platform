
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Metrics from './Components/Banner/Metrics'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Footer from './Components/Footer/Footer'
import GetStarted from './Components/GetStarted/GetStarted'
import Navbar from './Components/Navbar/Navbar'
import PricingSection from './Components/PricingSection/PricingSection'


const getTools = async () => {
  const response = await fetch("/productData.json");
  const data = await response.json();
  return data;
}

function App() {

  const toolsPromise = getTools();

  return (
    <>

      <Navbar></Navbar>
      <Banner></Banner>
      <Metrics></Metrics>

      <Suspense fallback={<div><span className="loading loading-spinner loading-lg"></span></div>}>
        <DigitalTools
          toolsPromise={toolsPromise}>
        </DigitalTools>
      </Suspense>

      <GetStarted></GetStarted>
      <PricingSection></PricingSection>
      <Footer></Footer>



    </>
  )
}

export default App
