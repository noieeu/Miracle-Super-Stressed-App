import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const navigate = useNavigate();
    const [name,setName] = useState('');

    const handlesubmit = () => {
        localStorage.setItem('name', name);
        navigate('/homepage');
    }

    return (
        <div className="gradient-bg">
            <div className="login-box">
                <h1>Super-Stressed App</h1>
                <p>A little space for your thoughts.</p>

                <div className="input-group">
                    <p>Enter your name</p>
                    <input type="text" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <button onClick = {handlesubmit}> Get started!</button>
            </div>

        </div>
    )
}