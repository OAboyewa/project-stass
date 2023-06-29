import "/src/assets/style/latest-request.css";
import RequestEntry from "./RequestEntry";

function LatestRequest() {
    return(
        <div>
            <p>Latest request</p>
            <div>
                <div>
                    <RequestEntry startDate="29/06/23" title="Annual Leave" duration="5" approalStatus="Pending"></RequestEntry>
                </div>
            </div>
        </div>
    );
}

export default LatestRequest;