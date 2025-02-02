import React from 'react'
import "./hero.css"
function Herosection() {
  return (
    <>
      <div className='hero-section flex py-10 items-center '>
        <div className='hero-content pb-10'>
          <h2 className=' text-5xl font-bold text'>PoweTheWeb</h2>
          <p className='mt-5 text-xl'>An opensouce Projects for Web Developer. Start your development from here.</p>
        </div>
        <div className='dc-frame'> 
          <iframe
            src="https://discord.com/widget?id=1014618195174363157&theme=dark"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default Herosection;