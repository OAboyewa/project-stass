import EmployeeProfile from "/src/assets/component/EmployeeProfile.jsx"

function EmployeeOff({dayOfWeek}) {
    return(
        <div>
            <p>{dayOfWeek}</p>
            <div>
                <EmployeeProfile profileHref="#" imgHref= "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?4d355bd"></EmployeeProfile>
                <EmployeeProfile profileHref="#" imgHref= "https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?4d355bd"></EmployeeProfile>
            </div>
        </div>
    );
}

export default EmployeeOff;