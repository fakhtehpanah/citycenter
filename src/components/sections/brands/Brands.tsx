import React from 'react'
import { div } from 'three/tsl'

function Brands() {
  return (
    <div className=''>
        <div className='grid grid-cols-3 gap-10 p-10 lg:flex lg:justify-center shadow bg-white/35  backdrop-blur-2xl'>
        <img src="/google.png" width={100} alt="" />
        <img src="/netflix.png" width={100} alt="" />
          <img src="/shopify.png" width={100} alt="" />
          <img src="/slack.png" width={100} alt="" />
          <img src="/social.png" width={100} alt="" />
          <img src="/spotify.png" width={100} alt="" />
    </div>

    </div>

  )
}

export default Brands