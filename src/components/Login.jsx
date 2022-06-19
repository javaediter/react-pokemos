import "../App.css";
import React, { useState } from "react";

const Login = ({ handleAuthentication }) => {
    const [user, setUser] = useState("");

    const onChange = async (value) => {
        setUser(value);
    }

    const onLogin = async () => {
        if(user && user !== ''){
            handleAuthentication(user);
        }else{
            alert('Usuario es requerido');
        }        
    }

    return (
        <div className="App-Container-Login">            
            <div className="App-Grid-Login">
                <div></div>
                <div className="App-Text-3">
                    <label>Pokemons</label>
                </div>                
                <div></div>
                <div></div>
                <div>
                    <input type="text" placeholder="usuario" className="App-Input App-Border" onChange={(e) => onChange(e.target.value)}/>
                </div>
                <div></div>
                <div></div>
                <div>
                    <button type="button" className="App-Button-Login" onClick={onLogin}>Ingresar</button>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Login;