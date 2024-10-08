import React from 'react'
import OTTSeries, { Footer } from './components/OTTseries'
import Profile from './components/ProfileEXTRA'

const App = () => {
  return (
    <>
    
    <OTTSeries/>
    <hr/>

    <section>
      <Profile/>

    </section>

    <hr/>
    
    <section>
      <Footer/>
    </section>

    </>
  )
}


export default App