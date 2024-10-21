import { useState } from "react"


const users = [
    {name: 'Alice', age: 25}, {name: 'Bob', age: 30},
    {name: 'Charlie', age: 35}, {name: 'Angels', age: 45}
]


export const StateB = ()=>{

    let [arr, setArr] = useState( users )

    return(

        <div className="p-2 m-3">

                {users.map( (elem, index)=> {
                    return(
                        
                       <li  key={index} > 
                        Name - {elem.name }  & Age - {elem.age}   years

                        </li>

                    )
                })}

        </div>
    )
}