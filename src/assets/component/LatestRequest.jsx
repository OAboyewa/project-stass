import "/src/assets/style/latest-request.css";
import RequestEntry from "./RequestEntry";

function LatestRequest() {
    return(
        <div className="latestrequest-cnt">
            <p>Latest request</p>
            <div className="latestrequest-entry-cnt">
                <RequestEntry startDate="29/06/23" title="Annual Leave" duration="5" approalStatus="Pending"></RequestEntry>
                <RequestEntry startDate="29/06/23" title="Annual Leave" duration="5" approalStatus="Pending"></RequestEntry>
                <RequestEntry startDate="29/06/23" title="Annual Leave" duration="5" approalStatus="Pending"></RequestEntry>
            </div>
        </div>
    );
}

export default LatestRequest;