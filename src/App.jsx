import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import RequestForm from '/src/assets/form/RequetForm.jsx';
import Calendar from '/src/assets/component/Calendar.jsx';
import LatestRequest from '/src/assets/component/LatestRequest.jsx';
import Balance from '/src//assets/component/Balance.jsx';

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
          <a className="a-btn" href="#">
            <span>Dashboard</span>
          </a>
          <a className="a-btn" href="#">
            <span>Request Leave</span>
          </a>
          <a className="a-btn" href="#">
            <span>Calendar</span>
          </a>
        </div>
        {/* Main viewport */}
        <div className="main-viewport-cnt">
          <div className="nav-cnt">
            <button type="button" onClick={DialogHandler}>Request</button>
          </div>
          <div className="welcome-cnt">
            <div>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/recruiting-new-employees-5205068-4346391.png?f=webp" alt="" />
            </div>
            <div>
              <p className="">
                <span>Welcome</span>, User
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
            <picture>
              <img src="" alt="" />
            </picture>
            <p>Work Form Home Policy - 2023</p>
            <p>A Work From Home Policy is an agreement between employer and employee that clearly defines the expectations and responsibilities for employees who work from home.</p>
            <div>
              <a href="">View Policy</a>
              <a href="">Edit Policy</a>
            </div>
          </div>
          <div className="employee-off-wrapper">
            <p>Out of Office</p>
            <div>
              <p>Mon</p>
              <div>
                <a href="">
                  <img src="" alt="" />
                </a>
              </div>
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
