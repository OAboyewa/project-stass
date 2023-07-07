import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import RequestForm from '/src/assets/form/RequetForm.jsx';
import Calendar from '/src/assets/component/Calendar.jsx';
import LatestRequest from '/src/assets/component/LatestRequest.jsx';
import Balance from '/src/assets/component/Balance.jsx';
import EmployeeOff from '/src/assets/component/EmployeeOff.jsx';

function App() {
  const [dialog, setDialog] =  useState(false);

  function DialogHandler() {
    let mDialog = dialog;
    setDialog(mDialog = !mDialog); 
  }

  return (
    <>
      <div className="main-cnt">
        {/* Sidebar */}
        <div className="main-sidebar-cnt">
          <div className="logo-wrapper">
            <img src="/src/assets/image/svgexport-2.png" alt="" />
          </div>
          <div>
            <a className="a-btn" href="#">
            <img src="https://img.icons8.com/?size=512&id=86527&format=png" alt="" />  
              <span>Dashboard</span>
            </a>
            <a className="a-btn" href="#">
              <img src="https://img.icons8.com/?size=512&id=62888&format=png" alt="" />
              <span>Request Leave</span>
            </a>
            <a className="a-btn" href="#">
              <img src="https://img.icons8.com/?size=512&id=GlEOr5x0aJpH&format=png" alt="" />
              <span>Calendar</span>
            </a>
            <a className="a-btn" href="#">
              <img src="https://img.icons8.com/?size=512&id=70301&format=png" alt="" />
              <span>History</span>
            </a>
          </div>
          <div className="sidebar-bottom">
            <a className="a-btn" href="#">
              <img src="https://img.icons8.com/?size=512&id=59996&format=png" alt="" />
              <span>Setting</span>
            </a>
            <a className="a-btn" href="#">
              <img src="https://img.icons8.com/?size=512&id=u4UrsbxuuUZ0&format=png" alt="" />
              <span>Log out</span>
            </a>
          </div>
        </div>
        {/* Main viewport */}
        <div className="main-viewport-cnt">
          {/* Nav */}
          <div className="nav-cnt">
            <button type="button" onClick={DialogHandler}>
              <img src="https://img.icons8.com/?size=512&id=62888&format=png" alt="" />
            </button>
            <button type="button">
              <img src="https://img.icons8.com/?size=512&id=83193&format=png" alt="" />
            </button>
            <button type="button">
              <img src="https://img.icons8.com/?size=512&id=59807&format=png" alt="" />
            </button>
          </div>
          {/* Viewport */}
          <div className="welcome-cnt">
            <div>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/recruiting-new-employees-5205068-4346391.png?f=webp" alt="" />
            </div>
            <div>
              <p className="">
                <span>Welcome</span>, Tobi
              </p>
              <p>Here's what's going on at East Pharma</p>
            </div>
          </div>
          <div className="stat-tracker">
            <p>Overview</p>
            <div className="stat-tracker-cnt">
              <Balance title="Allowance" value="20" imgRef="https://img.icons8.com/?size=512&id=PtgoAaCnbrEj&format=png"></Balance>
              <Balance title="Used" value="04" imgRef="https://img.icons8.com/?size=512&id=pnMcVoisLdGi&format=png"></Balance>
              <Balance title="Remaining" value="16" imgRef="https://img.icons8.com/?size=512&id=59723&format=png"></Balance>
              <Balance title="Sick Days" value="0" imgRef="https://img.icons8.com/?size=512&id=9531&format=png"></Balance>
              <Balance title="Lateness" value="0" imgRef="https://img.icons8.com/?size=512&id=RgEdBnFEUj83&format=png"></Balance>
            </div>
          </div>
          <LatestRequest></LatestRequest>
          <div className="policy-cnt">
            <p>Work from home policy</p>
            <p>Employees work from home or telecommute when they complete their work at a place located outside of our company’s premises.</p>
            <a href="">Read more</a>
          </div>
          <div className="employee-off-wrapper">
            <p className="title">Out of Office</p>
            <div className="employee-off-cnt">
              <EmployeeOff dayOfWeek="Mon"></EmployeeOff>
              <EmployeeOff dayOfWeek="Tue"></EmployeeOff>
              <EmployeeOff dayOfWeek="Wed"></EmployeeOff>
              <EmployeeOff dayOfWeek="Thu"></EmployeeOff>
              <EmployeeOff dayOfWeek="Fri"></EmployeeOff>
            </div>
          </div>
          {/*<Calendar></Calendar>*/}
        </div>
      </div>
      { 
        <RequestForm dialog={dialog} closeButtonHandler={DialogHandler}></RequestForm>
      }
    </>
  )
}

export default App
