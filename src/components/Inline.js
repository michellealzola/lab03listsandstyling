import React from 'react'

const heading = 
{
    color: 'red', //camel case
    fontSize: '50px'
}
function Inline() {
  return (
    <div>
        <h1 style={heading}>
            Inline
        </h1>
    </div>
  )
}

export default Inline