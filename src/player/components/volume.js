import React from 'react'
import './volume.css'
import VolumeIcon from '../../icons/components/volume.js'

const Volume = props => (
  <button className='Volume'>
    <div onClick={props.handleVolumeClick}>
      <VolumeIcon
        color='white'
        size={25}
      />
    </div>
    <div className='Volume-range'>
      <input 
        type='range'
        min={0}
        max={1}
        step={.05} //no colocar 0.05
        onChange={props.handleVolumeChange}
        value={props.volume}
      />
    </div>
  </button>
) 

export default Volume