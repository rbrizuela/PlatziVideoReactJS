import React , { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout.js'
import Video from '../components/video.js'
import Title from '../components/title.js'
import PlayPause from '../components/play-pause.js' 
import Timer from '../components/timer.js' 
import Controls from '../components/video-player-controls.js'
import FormattedTime from '../../utility/utility.js' 
import ProgressBar from '../components/progress-bar.js'
import Spinner from '../components/spinner.js'
import Volume from '../components/volume.js'
import FullScreen from '../components/full-screen.js'

class VideoPlayer extends Component {
  
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false,
    volume: 0.2,
    lastVolume: 0,
  }

  togglePlay = (event) => {
    //this state la comienzo a usar como una af =>

    this.setState( prevState => ({
      pause: !prevState.pause
    }))

    /*
    this.setState({
      pause: !this.state.pause
    })
    */
  }

  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: this.video.duration
    })
  }
  
  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }

  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }

  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }

  handleVolumeChange = event => {
    this.video.volume = event.target.value
    this.setState({
      volume: this.video.volume
    })
  }

  handleVolumeClick = event => {
   
    this.setState({
      lastVolume: this.state.volume,
      volume: this.state.volume===0 ? this.state.lastVolume : 0
    })
    this.video.volume = this.state.lastVolume

  }

  handleFullScreenClick = event => {
    if (!document.webkitIsFullScreen) {
      this.player.webkitRequestFullscreen()
    } else {
      document.webkitExitFullscreen()
    }

  }

  setRef = element => {
    this.player = element
  }

  render() {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title
          title={this.props.title}
        />
        <Video
          src={this.props.src}
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
        <Spinner
          active={this.state.loading}
        />
        <Controls>
          <PlayPause
            pause={this.state.pause}
            handleClick={this.togglePlay}
          />
          <Timer 
            duration={FormattedTime(this.state.duration)}
            currentTime={FormattedTime(this.state.currentTime)}
          />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleVolumeClick={this.handleVolumeClick}
            volume={this.state.volume}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </Controls>
      </VideoPlayerLayout>
    )
  }

}

export default VideoPlayer