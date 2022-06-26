import "../App.css";
import React, { useState } from "react";
import Login from "./Login";

const LoginContainer = ({ handleAuthentication }) => {
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
        <Login onChange={onChange} onLogin={onLogin} />
    );
};

export default LoginContainer;