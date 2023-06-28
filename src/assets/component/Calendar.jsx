import { useEffect, useState } from "react";
import "/src/assets/style/calendar.css";
import Month from '/src/assets/component/Month.jsx';

/*
    Issues:
    Months not generating correctly
    Month not getting correct days
*/

function Calendar() {
    const[year, setYear] = useState(2023);
    const[month, setMonth] = useState(1);
    const monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function HandlerPreviousMonth() {
        if (month === 1) {
            setYear(year - 1)
            setMonth(12)
        }

        if (month > 1) {
            setMonth(month - 1);
        }
    }

    function HandlerNextMonth() {
        if (month === 12) {
            setYear(year + 1)
            setMonth(1)
        }

        if (month < 12) {
            setMonth(month + 1);
        }
    }

    return(
        <div>
            <div>
                <button type="button" onClick={HandlerPreviousMonth}>-</button>
                <span>{monthNames[month - 1]} {year}</span>
                <button type="button" onClick={HandlerNextMonth}>+</button>
            </div>
            <div>
                <Month year={year} month={month} overlapMonths={false}></Month>
            </div>
        </div>
    )
}

export default Calendar;