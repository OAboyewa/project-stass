import "/src/assets/style/latest-request.css";
import RequestEntry from "./RequestEntry";

function LatestRequest() {
    return(
        <table className="latestrequest-cnt">
            <tr>Latest request</tr>
            <tr className="latestrequest-entry-cnt">
                <RequestEntry startDate="29/06/23" title="Annual Leave" duration="5" approalStatus="Pending" color="yellow"></RequestEntry>
                <RequestEntry startDate="29/06/23" title="Annual Leave" duration="5" approalStatus="Pending" color="yellow"></RequestEntry>
                <RequestEntry startDate="29/06/23" title="Annual Leave" duration="5" approalStatus="Approved" color="green"></RequestEntry>
            </tr>
        </table>
    );
}

export default LatestRequest;