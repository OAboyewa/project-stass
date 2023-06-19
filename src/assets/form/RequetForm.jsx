import "/src/assets/style/form.css";

function RequestForm() {
    return(
        <div className="dialog">
            <form className="" action="">
                <p>
                    Request timeoff
                </p>
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
                    ... Days have been requested between ... and ... 
                </p>
                <br />
                <div>
                    <label htmlFor="">Comment</label> <br />
                    <textarea name="" id="" cols="30" rows="10"> </textarea>
                </div>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default RequestForm;