import React from 'react'
import OTTSeries, { Footer } from './components/OTTseries'
import Profile from './components/ProfileEXTRA'
import EvtHdlng from './components/EvtHdlng'
import { EventPropagation } from './components/EventPropagation'
import { StateA } from './components/Hooks/StateA'
import { StateB } from './components/Hooks/StateB'
import { DerivedState } from './components/DerviedState'
import { Lifting1 } from './components/Lifting1'

const App = () => {
  return (
    <>

    <div className='main p-3 m-3'>

    <div>  <StateA/> </div>

    <div> <StateB/>  </div>

    <hr/>
    
    <OTTSeries/>
    <hr/>

    {/* rendering Profile-EXTRA component */}
    <section className='m-4 p-4'>
      {/* <Profile/> */}
    </section>

    <section className='m-4 p-4'>
      <EventPropagation/>
    </section>

    <hr/>
    
    <section className='m-4 p-4'>
      <EvtHdlng/>
    </section>

    <hr/>
    <DerivedState className='m-4 p-4'/>
    <hr/>

    <Lifting1 className='m-4 p-4'/>

    </div>


    <div className='footer p-5 m-5'>
      <section>

      <Footer/>
    </section>

    </div>

    </>
  )
}


export default App