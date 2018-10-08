import React, { Component } from 'react'
import Search from '../../widgets/components/search.js'

class SearchContainer extends Component {
  
  state = {
    value: 'Luis Fonzi'
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log(this.input.value,'submit')
  }
  setInputRef = element => {
    this.input = element
  }
  handleInputChange = event => {
    this.setState({
      value: event.target.value.replace(' ','-')
    })
  }
  render() {
    return(   
      <Search 
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
      )
  }
}

export default  SearchContainer