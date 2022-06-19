import "../App.css";
import React from "react";

const Header = () => {
    const onLogout = async () => {
        localStorage.removeItem("user");
        window.location.reload();
    }

    return (
        <div className="App-Header">
            <p className="App-Text-1">
                <label>Bienvenido {localStorage.getItem("user").toLocaleUpperCase()}</label>
                <button className="App-Link" onClick={onLogout}>Salir</button>
            </p>
        </div>
    );
};

export default Header;