import { useEffect, useState } from "react";
import "/src/assets/style/calendar.css";
import Month from '/src/assets/component/Month.jsx';

/*
    Issues:
    Months not generating correctly
    Month not getting correct days
*/

function Calendar() {
    const[countYear, setCountYear] = useState(new Date().getFullYear());
    const[count, setCount] = useState(new Date().getMonth());
    const[monthElement, setmonthElement] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    const nameOfMonths = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
        setmonthElement(monthElement.map((value, index) => <Month key={index} year={countYear} month={value}></Month>));
    }, [countYear]);

    function HandlerPreviousMonth() {
        if (count === 0) {
            setCount(11);
            setCountYear(countYear - 1)
        }
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function HandlerNextMonth() {
        if (count === 11) {
            setCount(0);
            setCountYear(countYear + 1)
        }
        if (count < 11) {
            setCount(count + 1);
        }
    }

    return(
        <div>
            <div>
                <button type="button" onClick={HandlerPreviousMonth}>-</button>
                <span>{nameOfMonths[count]} {countYear}</span>
                <button type="button" onClick={HandlerNextMonth}>+</button>
            </div>
            <div>
                {monthElement[count]}
            </div>
        </div>
    )
}

export default Calendar;