import { useState } from "react"

export const DerivedState = ()=>{

    let [users, setUsers] = useState( 
        [
            {name: 'Alice', age: 25}, {name: 'Bob', age: 30},
            {name: 'Charlie', age: 35}, {name: 'Angels', age: 45}
        ]

    )

    console.log('users array', users)

    const userCount = users.length

    const ageSum = users.reduce(  (acml,curVal) => (acml+ (curVal.age)), 0 )

    const avgAge = ageSum/userCount

    return(
        <>

        <div className="p-2 m-3">

                {users.map( (elem, index)=> {
                    return(
                        
                       <li  key={index} > 
                        Name - {elem.name }  & Age - {elem.age}   years
                        </li>
                    )
                })}

        </div>

        <section className="m-6 p-5">
            <p> Total users:  {userCount} </p>
            <br/>
            <p> Avg age: {avgAge} </p>

        </section>

        </>
    )
}