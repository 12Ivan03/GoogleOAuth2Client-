import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function LoginPage() {
    const [ msg, setMsg ] = useState('');

    useEffect(() => {
        axios('http://localhost:5005/auth/login')
        .then(res => {
            setMsg(res.data);
        })
    }, []);

    return (
        <div>
            <p>{msg}</p>
            <Link to={'/'}><button>Back</button></Link>
        </div>
    )
}

export default LoginPage;