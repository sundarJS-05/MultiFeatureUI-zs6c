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
      <button   onClick={ handleBtnClick }>
        BTN 1 --Click to trigger event
        </button>

        <br/>
        <hr/>

        <button   onClick={ ()=>{ handleBtnClick()  } }>
        BTN 2 --Click to trigger event
        </button>

        <br/>
        <hr/>

        <button onClick={ ()=> {
            welcomeUser('guest 2')
        }} >
            User Btn
        </button>

    </>
  )
}

export default EvtHdlng