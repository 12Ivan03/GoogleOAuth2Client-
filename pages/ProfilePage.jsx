import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

function ProfilePage () {
    const [ userData, setUserData ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ errorMsg, setErrorMsg ] = useState(undefined);
    const navigate = useNavigate()

    const handleLogout = () => {
        Cookies.remove('decodedToken', { path: '/'});
        navigate('/');
    }

    useEffect(()=> {
        try {
            const cookieUserData = Cookies.get('decodedToken');
            const modifyCookie = cookieUserData.split(':').splice(1).join(':');
            const userInfo = JSON.parse(modifyCookie);
            setUserData(userInfo);
            setIsLoading(false);

        } catch(err) {
            console.log(err);
            setErrorMsg(err.response.data.errorMsg);
        } 
    }, [])
    
    if(isLoading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        )
    }
    
    return (
        <div>
            {errorMsg && <p style={{color: "red"}}>{errorMsg}</p>}

            <div>
                <h1>User Info: {userData.fullName}</h1>
                <img src={userData.image} alt="User's image unavailable." />
            </div>

            <hr />
            
            <div>
                <p>First Name: {userData.givenName}</p>
                <p>Last Name: {userData.familyName}</p>
                <p>Email: {userData.email}</p>
            </div>

            <hr />
            <br />

            <button onClick={handleLogout}>Logout</button>

        </div>
    )
}

export default ProfilePage;