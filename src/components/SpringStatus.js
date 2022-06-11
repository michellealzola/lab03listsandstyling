import React, { Component } from 'react'

class springstatus extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isTeaching: true
      }
    }
  render() {
    //Short circuit if false not showing
    return this.state.isTeaching && <div>Status of Teaching in Spring: true</div>

    // return(
    //   this.state.isTeaching ? 
    //   <div>Status of Teaching in Spring: true</div> : 
    //   <div>Status of Teaching in Spring: false</div>
    // )

    // let message 
    // if(this.state.isTeaching)
    // {
    //   message = <div>Status of Teaching in Spring: true</div>       
    // }
    // else
    // {
    //   message = <div>Status of Teaching in Spring: false</div>
    // }

    // return <div>{message}</div>


      // if(this.state.isTeaching)
      // {
      //   return <div>Status of Teaching in Spring: true</div>
      // }
      // else
      // {
      //   return <div>Status of Teaching in Spring: false</div>
      // }
    // return (
    //   <div>springstatus</div>
    // )
  }
} 

export default springstatus