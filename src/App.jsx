import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import RequestForm from '/src/assets/form/RequetForm.jsx'
import Calendar from '/src/assets/component/Calendar.jsx';

function App() {
  const [dialog, setDialog] =  useState(false);

  function DialogHandler() {
    let mDialog = dialog;
    setDialog(mDialog = !mDialog); 
  }

  return (
    <>
      <div className="nav-cnt">
        <button type="button" onClick={DialogHandler}>Request</button>
      </div>
      <div className="main-cnt">
        <div className="main-sidebar-cnt">
          <a className="" href="#">
            <span>Planner</span>
          </a>
        </div>
        <div className="main-viewport-cnt">
          <Calendar></Calendar>
        </div>
      </div>
      { 
        <RequestForm dialog={dialog} closeButtonHandler={DialogHandler}></RequestForm>
      }
    </>
  )
}

export default App
