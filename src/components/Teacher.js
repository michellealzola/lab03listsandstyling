import React from 'react'

const workingTrue = 
{
  color: 'green'
}
const workingFalse = 
{
  color: 'red'
}
function Teacher({teacher}) {
  
  return (    
    <div style={`${teacher.status}` === 'true' ? workingTrue : workingFalse}>
            <ol start={teacher.number}>
                <li>
                    <strong>Name:</strong> {teacher.name} <br/>
                    <strong>Age:</strong> {teacher.age} <br/>
                    <strong>City:</strong> {teacher.city} <br/>
                    <strong>Status of Teaching in Spring :</strong> {teacher.status}
                </li>
            </ol>        
        </div>   
  )
}

export default Teacher