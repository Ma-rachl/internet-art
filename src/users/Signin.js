
import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import './users.css';

import "../vendors/bootstrap/css/bootstrap.css";
import '../vendors/fontawesome/css/all.css';


function Signin({ onSignin }) {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();
    const signin = async () => {
        localStorage.setItem('username', credentials.username);
        localStorage.setItem('password', credentials.password);
        onSignin(credentials);
        navigate("/main");
    };

    return (
        <div class="signin-container">

                <div class="signin-modal shadow p-5 mb-5 bg-white rounded">
                    <h1 class="signin-title ">Sign in</h1>
                    <input type="text"  placeholder="Enter username" className="form-control signin-inputs" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
                    <input  type="text"  placeholder="Enter password" className="form-control signin-inputs" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
                    <button className="btn btn-primary rounded-pill" onClick={signin}> Sign in </button>

                </div>

        </div>
    );
}
export default Signin;