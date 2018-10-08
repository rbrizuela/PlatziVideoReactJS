import React from 'react'
import './video-player-layout.css'

//con las arrow function no hace falta return
//por eso utilizan parentesis y no llaves 
const VideoPlayerLayout = props => (
    <div 
      className='VideoPlayer'
      ref={props.setRef}
    >
      {props.children}
    </div>
)

/*
const VideoPlayerLayout = props => {
  return(
    <div className='VideoPlayer'>
      {props.children}
    </div>
  )
}
*/


export default VideoPlayerLayout