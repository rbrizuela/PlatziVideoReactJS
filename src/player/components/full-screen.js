import React from 'react'
import './full-screen.css'
import FullScreenIcon from '../../icons/components/fullScreen.js'

const FullScreen = props => (
  <div 
    className='FullScreen'
    onClick={props.handleFullScreenClick}
  >
   <FullScreenIcon
        color='white'
        size={25}
      />
  </div>
) 

export default FullScreen