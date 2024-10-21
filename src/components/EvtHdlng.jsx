import React from 'react'

const EvtHdlng = () => {

    let handleBtnClick = (event)=> {
        console.log('event object', event)

        alert('Btn clicked')

    }

    let welcomeUser = (username)=>{
        alert(` ${username}  welcome `)
    }

  return (
    <>

        <div>

        <button   onClick={ handleBtnClick }>
        BTN 1 --Click to trigger event
        </button>

        </div>

        <hr/><hr/>

        <div>
        <button   onClick={ ()=>{ handleBtnClick()  } }>
        BTN 2 --Click to trigger event
        </button>
        </div>

        <hr/><hr/>

        <div>

        <button onClick={ ()=> {
            welcomeUser('guest 2')
        }} >
            User Btn
        </button>

        </div>

        <hr/><hr/>

    </>
  )
}

export default EvtHdlng