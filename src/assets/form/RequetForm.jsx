import { useEffect } from "react";
import "/src/assets/style/form.css";

function RequestForm({dialog, closeButtonHandler}) {

    function SubmitHandler() {
        const form = document.getElementById("myform");
        const submit = document.querySelector("input[type=submit]");
        const formData = new FormData(form, submit);
        const jsonTmp = {
            absenceType: formData.get("absence-type"),
            startDate: formData.get("start-date"),
            endDate: formData.get("end-date"),
            duration: null,
            comment: formData.get("comment")
        };
        const local = window.localStorage;
        local.setItem(`ety${local.length}`, JSON.stringify(jsonTmp));
    }

    return(
        <> 
            { dialog === true && <div className="dialog">
                <form className="" action="" id="myform">
                    <div>
                        <button type="button" onClick={closeButtonHandler}>X</button>
                    </div>
                    <p>
                        Request time off
                    </p>
                    <div>
                        <label htmlFor="">Absence Type</label> <br />
                        <select name="absence-type" id="">
                            <option value="Annual Leave">Annual Leave</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Start</label> <br />
                        <input type="date" name="start-date" id="" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">End</label> <br />
                        <input type="date" name="end-date" id="" />
                    </div>
                    <br />
                    <p>
                        between the ... and ... you have requested for ... Days off
                    </p>
                    <br />
                    <div>
                        <label htmlFor="">Comment</label> <br />
                        <textarea name="comment" id="" cols="30" rows="10"></textarea>
                    </div>
                    <br />
                    <input onClick={SubmitHandler} type="submit" value="Request Absense" />
                </form>
            </div> }
        </>
    );
}

export default RequestForm;