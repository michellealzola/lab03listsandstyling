import React from 'react'

function Teacher({teacher}) {
  return (
    <div>
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