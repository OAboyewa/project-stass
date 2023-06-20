import { useEffect } from "react";
import "/src/assets/style/form.css";

function RequestForm({dialog, closeButtonHandler}) {
    return(
        <> 
            { dialog === true && <div className="dialog">
                <form className="" action="">
                    <div>
                        <button type="button" onClick={closeButtonHandler}>X</button>
                    </div>
                    <p>
                        Request time off
                    </p>
                    <div>
                        <label htmlFor="">Absence Type</label> <br />
                        <select name="" id="">
                            <option value="">Annual Leave</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">Start</label> <br />
                        <input type="date" name="" id="" />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="">End</label> <br />
                        <input type="date" name="" id="" />
                    </div>
                    <br />
                    <p>
                        between the ... and ... you have requested for ... Days off
                    </p>
                    <br />
                    <div>
                        <label htmlFor="">Comment</label> <br />
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <br />
                    <input type="submit" value="Request Absense" />
                </form>
            </div> }
        </>
    );
}

export default RequestForm;