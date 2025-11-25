import React from 'react'
import Navbar from './Navbar'

function LandingPage() {
  return (
    <div className='h-full w-full bg-black'>
      <Navbar />
      <div class="bg-black">
        <div>
          <div className="h-10 w-10 bg-black  relative top-[45vh] left-[48vw] rounded-full border-4 animate-spin border-s-emerald-400"></div>
          <div className='h-10 w-auto absolute top-[46vh] left-[47.5vw]'>Loading</div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
