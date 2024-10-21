import { useState } from "react"

export const StateA = ()=>{

    let [value, setValue] = useState(0)

    let hndlBtnClk = ()=>{
        setValue( ()=> (value+1) )
    }

    let ChildComponent = ()=>{
        return(
            <div>
                new child component!
            </div>
        )
    }

    return(
        <>

        <button  onClick={hndlBtnClk}>    INCREMENT BUTTON    </button>

        <hr/><hr/>

       <section className="p-3 m-3">
        Value AFTER increment  
        <span className="p-2 m-2">
            {/* Though 'value' varible increases by 1 per click, 
            React does NOT undrestand the change here - so does NOT render the DOM as per changed value; 
            So we NEED TO use STATES to rectify this  */}

            {value}
            </span>

        </section>
        
          <div className="m-1 p-6">

        <ChildComponent/>

        </div>

        </>
    )
}