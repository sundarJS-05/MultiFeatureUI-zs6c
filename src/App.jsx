import React from 'react'
import OTTSeries, { Footer } from './components/OTTseries'
import Profile from './components/ProfileEXTRA'
import EvtHdlng from './components/EvtHdlng'

const App = () => {
  return (
    <>
    
    <OTTSeries/>
    <hr/>

    {/* rendering Profile-EXTRA component */}
    <section>
      {/* <Profile/> */}

    </section>

    <hr/>
    
    <section>
      <EvtHdlng/>
      <br/>
      <br/>
      <Footer/>
    </section>

    </>
  )
}


export default App