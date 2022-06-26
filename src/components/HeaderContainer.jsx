import "../App.css";
import React from "react";
import Header from "./Header";

const HeaderContainer = () => {
    const onLogout = async () => {
        localStorage.removeItem("user");
        window.location.reload();
    }

    return (
        <Header onLogout={onLogout} />
    );
};

export default HeaderContainer;