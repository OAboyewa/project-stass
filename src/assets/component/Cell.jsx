import "/src/assets/style/calendar.css";

function Cell({value, state = false}) {
    if (state === "empty") {
        //Empty
        return (
            <div className="cell"></div>
        );
    }
    else if(state === "header") {
        //Header
        return (
            <div className="header">
                <span>{value}</span>
            </div>
        );
    }

    return (
        <div className="cell">
            <span>{value}</span>
        </div>
    );
}

export default Cell;