import React, { Component } from 'react'
import RegularError from '../components/regularError.js'

class HandleError extends Component {

  state = {
    handleError: false,
  }

  componentDidCatch(error,info) {
    //envia este error a un servicio como sentry
    this.setState({
      handleError: true,
    })
  }

  render() {
    if (this.state.handleError) {
    return(
        <RegularError/>
      )
    }
    //else
    return this.props.children   
  }
}

export default HandleError