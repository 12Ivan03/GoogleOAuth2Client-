import { useState } from 'react';
import axios from 'axios';
import "./HomePage.css"
import googleBtn from '../public/web_neutral_sq_ctn@4x.png'
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const [ errorMsg, setErrorMsg ] = useState(undefined)
    const navigate = useNavigate()

    const handlebutton = () => {
        navigate('/login')
    }

    const handleGoogle = async () => {

        try{
            const request = await axios('http://localhost:5005/auth/google-login');
            const url = request.data.authorizationUrl;
            window.location.href = url;

        } catch(err) {
            setErrorMsg(err.response.data.errorMsg);
        }
    }

    return (
       <div className='home-background'>
            <div className='home-container'>
                {errorMsg && <p style={{color: "red"}}>{errorMsg}</p>}

                <img onClick={handleGoogle} src={googleBtn} alt="Google Login" className='google-btn'/>
                <button onClick={handlebutton}>login</button>
            </div>
            <div className='line-continer'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
       </div>
    )
}

export default HomePage