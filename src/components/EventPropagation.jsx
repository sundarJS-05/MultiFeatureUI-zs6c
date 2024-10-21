
export const EventPropagation = ()=>{

    let handleGrand = ()=>{
        console.log('grand parent elem clicked')
    }

    let handleParent = ()=>{
        console.log('parent elem clicked')
    }

    let handleChildClick = (event)=>{
        console.log('event details', event)

        // stopping evnet propagation to parent; grand & outer
        event.stopPropagation()

        console.log('child elem clicked')
    }



    return(
        <section className="main-div">
            {/* 2 event types:
             onClick - bubbling - child to parent
             &
             onClickCapture - here its capturing - parent to child */}
            <div className='grand'  onClickCapture={handleGrand}> 
                GRAND element
            <hr/><hr/>
                <div className="parent"  onClickCapture={handleParent}>
                    ParenT element
                <hr/><hr/>

                    <button className="child"  onClickCapture={handleChildClick}>
                        Child elem button

                    </button>

                </div>
            </div>
        </section>
    )
}

