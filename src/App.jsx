import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Goals from './components/Goals'
// import Timeline from './components/Timeline'
// import Team from './components/Team'
// import Capabilities from './components/Capabilities'
// import Contact from './components/Contact'
// import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Goals />
        {/* <Capabilities />
        <Timeline />
        <Team />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App