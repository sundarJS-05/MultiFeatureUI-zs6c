import { useState } from "react"

const InputComp = ( {inputVal, setInputVal})=>{
    
    // this is input level state
    // let [inputVal, setInputVal] = useState('')

    return(
        <input 
        type="text"
        placeholder="type your text here. "
        value={inputVal} 
        onChange={  (event) => setInputVal(event.target.value) }

          >
        </input>

    )
}

const DisplayComp = ( {inputVal})=>{
    return(
        <div>
            The current state is : {inputVal}
        </div>
    )
}


export const Lifting1 = ( )=>{
  
    // lifting state to parent comp
    let [inputVal, setInputVal] = useState('')

    return(
        <>

        <InputComp value={inputVal}  setInputVal={setInputVal}> 
        </InputComp>

        <DisplayComp value={inputVal} >
             </DisplayComp>
        
        </>
    )
}