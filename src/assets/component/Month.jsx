import { useState, useEffect } from "react";
import "/src/assets/style/calendar.css";
import Cell from '/src/assets/component/Cell.jsx';

function Month({year, month, overlapMonths = false}) {
    const [daysInMonth, setDaysInMonth] = useState([]);
    const nameOfDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    useEffect(() => {
        const lastMonth = GetOverlappingDays(year, month)[0].map((element, id) => <Cell key={id + 31} value={element} state={!overlapMonths && "empty"}></Cell>);
        const nextMonth = GetOverlappingDays(year, month)[1].map((element, id) => <Cell key={id + 41} value={element} state={!overlapMonths && "empty"}></Cell>);
        const currentMonth = GetMonth(year, month).map((element, id) => <Cell key={id} value={element}></Cell>);
        setDaysInMonth(
            lastMonth.concat(
                currentMonth.concat(nextMonth)
            )
        );
        console.log(lastMonth, currentMonth, nextMonth);
    }, [year, month]);

    function GetDays(year, month) {
        const date = new Date(year, month, 0); 
        return date.getDate();
    }

    function GetMonth(year, month)  {
        let result = []; 
        for (let i = 0; i < GetDays(year, month); i++) {
            result[i] = i + 1;
        }
        return result;
    }

    function GetOverlappingDays(year, month) {
        //Last Month
        let result1 = [];
        let date = new Date(year, month - 1, 1);
        let overlap = date.getDay() === 0 ? 6 : date.getDay() - 1;
        for (let i = 0; i < overlap; i++) {
            result1[i] = GetDays(year, month - 1) - i;
        }
        result1.reverse();
        //Next Month
        let result2 = [];
        let date2 = new Date(year, month, 0);
        let overlap2 = date2.getDay() === 0 ? 0 : 7 - date2.getDay();
        for (let i = 0; i < overlap2; i++) {
            result2[i] = i + 1;
        }
        return [result1, result2];
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