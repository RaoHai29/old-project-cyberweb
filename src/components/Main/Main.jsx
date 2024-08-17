import React from 'react'
import CyberVideo from './../images/cybervideo.mp4'
import './Main.css'

function Main() {
  return (
    <div className='Main'>
      <video src={CyberVideo} autoPlay loop muted></video>

      <div className="content">
          <h1>Welcome to Cyberians Club<br /><span>Duet</span></h1>
          <br />
          <div className='Options'>
          <button className='btn btn-danger butt1'>Let's Explore</button>
          <button className='btn btn-white butt2'>Our Team</button>
          </div>
        </div>
    </div>
  )
}

export default Main
