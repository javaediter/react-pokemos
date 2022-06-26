import React from "react";

const ButtonNew = ({ handleNewData }) => {
    return(
        <div className="App-Content-Right">
            <button type="button" className="App-Button" onClick={() => handleNewData(false)}>Nuevo</button>
        </div>
    );
};

export default ButtonNew;