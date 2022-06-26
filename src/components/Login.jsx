import React from "react";
import '../App.css';

const Login = ({ onChange, onLogin}) => {
    return(
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