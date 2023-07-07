
function EmployeeProfile({profileHref, imgHref}) {
    return(
        <>
            <a className="employee-profile-cnt" href={profileHref}>
                <img src={imgHref} alt="" />
            </a>
        </>
    );
}

export default EmployeeProfile;