import "/src/assets/style/calendar.css";

function Cell({value, state}) {
    if(state === "header") {
        return (
            <div className="header">
                <span>{value}</span>
            </div>
        );
    }
    
    return (
        <div className="cell">
            { state !== "empty" &&
                <span>{value}</span>
            }
        </div>
    );
}

export default Cell;