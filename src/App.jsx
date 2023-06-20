import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import RequestForm from '/src/assets/form/RequetForm.jsx'

function App() {
  const [dialog, setDialog] =  useState(false);

  function DialogHandler() {
    let mDialog = dialog;
    setDialog(mDialog = !mDialog); 
  }

  return (
    <>
      <button type="button" onClick={DialogHandler}>Request</button>
      { 
        <RequestForm dialog={dialog} closeButtonHandler={DialogHandler}></RequestForm>
      }
    </>
  )
}

export default App
