import "/src/assets/style/latest-request.css";


function RequestEntry({startDate, title, duration, approalStatus, color}) {
    return(
        <td className="requestentry-cnt">
            <p>{startDate}</p>
            <p>
                <span>{title}</span>
                <span>{duration} Days</span>
            </p>
            <p style={{
                background:color
            }}>
                <span>{approalStatus}</span>
            </p>
        </td>
    );
}

export default RequestEntry;