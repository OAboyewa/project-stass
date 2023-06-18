import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <form action="">
      <div>
        <label htmlFor="">Start</label> <br />
        <input type="date" name="" id="" />
      </div>
      <br />
      <div>
        <label htmlFor="">End</label> <br />
        <input type="date" name="" id="" />
      </div>
      <br />
      <p>
        ... Days have been requested between ... and ... 
      </p>
      <br />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default App
