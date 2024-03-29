import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import './styles.css';

import api from '../../services/api';

export default function Login(){
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    let navigate = useNavigate();

    async function login(e){
        e.preventDefault();  
        
        const data = {
            username,
            password,
                
        };

        try {
            const response = await api.post('auth/signin', data);
            localStorage.setItem('username', username);
            localStorage.setItem('accessToken', response.data.token);

            navigate('/reserva');

        } catch (err) {
            alert('Login failed! Try again!');
        }   
                    

    };

    return (
        
        <div className="login-container">
        <section className="form">
            <img  alt="Imagem"/>
            <form onSubmit={login}>
                <h1>Acesse sua conta</h1>
                <input
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <input
                    type="password" placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="button" type="submit">Login</button>
            </form>

        </section>

        <img  alt="Login"/>

    </div>
        
    );
}

