import "/src/assets/style/latest-request.css";

function RequestEntry({startDate, title, duration, approalStatus}) {
    return(
        <div className="requestentry-cnt">
            <p>{startDate}</p>
            <p>
                <span>{title}</span>
                <span>{duration} Days</span>
            </p>
            <p>{approalStatus}</p>
        </div>
    );
}

export default RequestEntry;