import React from 'react'
import Teacher from './Teacher'

function TeacherList() {  
    const teachers = 
    [
        {
            number: 1,
            id : 147852,
            name : 'Mike',
            age : 40,
            city : 'Calgary',
            status : 'false'
        },
        {
            number: 2,
            id : 456321,
            name : 'Mary',
            age : 38,
            city : 'Edmonton',
            status : 'true'
        },
        {
            number: 3,
            id : 156234,
            name : 'John',
            age : 35,
            city : 'Calgary',
            status : 'false'
        },
        {
            number: 4,
            id : 784512,
            name : 'David',
            age : 44,
            city : 'Calgary',
            status : 'false'
        },
        {
            number: 5,
            id : 351246,
            name : 'Jack',
            age : 37,
            city : 'Edmonton',
            status : 'true'
        }

    ]
    
    const teacherList = teachers.map(teacher => <Teacher key={teacher.id} teacher = {teacher}/>)

    return <div>{teacherList}</div>
  
}

export default TeacherList