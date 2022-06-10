import React, { Component } from 'react'

class springstatus extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isTeaching: false
      }
    }
  render() {
      if(this.state.isTeaching)
      {
        return <div>Status of Teaching in Spring: true</div>
      }
      else
      {
        return <div>Status of Teaching in Spring: false</div>
      }
    // return (
    //   <div>springstatus</div>
    // )
  }
} 

export default springstatus