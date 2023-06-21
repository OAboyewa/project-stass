import { useState, useEffect } from "react";
import "/src/assets/style/calendar.css";
import Cell from '/src/assets/component/Cell.jsx';

function Month({year, month}) {
    const [daysInMonth, setDaysInMonth] = useState([]);
    const nameOfDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    useEffect(() => {
        setDaysInMonth(GetMonth(year, month).map((element, id) => <Cell key={id} value={element}></Cell>));
        console.log(GetMonth(year, month));
    }, []);

    function GetDays(cYear, cMonth) {
        let date = new Date();
        date.setFullYear(cYear);
        date.setMonth(cMonth);
        date.setDate(0); //console.log(date);
        return date.getDate();
    }

    function GetMonth(cYear, cMonth)  {
        let result = [];
        let rTemp1 = [];
        let rTemp2 = [];
        let date = new Date();
        date.setFullYear(cYear);
        date.setMonth(cMonth);
        date.setDate(1);
        let dayOfWeek = date.getDay() === 0 ? 6 : (6 - date.getDay()) - 1; console.log(date, "---", dayOfWeek);
        for (let i = 0; i < GetDays(cYear, cMonth); i++) {
            rTemp1[i] = i + 1;
            if (i < dayOfWeek) { 
                rTemp2[i] = GetDays(cYear, cMonth - 1) - i; console.log(GetDays(cYear, cMonth - 1));
            }
        }
        rTemp2.reverse();
        result = rTemp2.concat(rTemp1);
        return result;
    }

    return(
        <div>
            <div className="headers-cnt">
                {nameOfDays.map((element, id) => <Cell key={id} value={element} state="header"></Cell>)}
            </div>
            <div className="month">
                {daysInMonth}
            </div>
        </div>
    );
}

export default Month;