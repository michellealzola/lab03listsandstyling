import React from 'react'
import './teacherStyles.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
        <h1 className={`${className} secondary`}>
            StyleSheet
        </h1>
    </div>
  )
}

export default StyleSheet