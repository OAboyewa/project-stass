import "/src/assets/style/balance.css";

function Balance({title, value, imgRef}) {
    return(
        <div className="balance-cnt">
            <img src={imgRef} alt="" />
            <p className="heading">{title}</p>
            <p className="sub-heading">{value} <span>Days</span></p>
        </div>
    );
}

export default Balance;