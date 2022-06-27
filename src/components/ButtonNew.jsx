import React from "react";

const ButtonNew = ({ handleNewData }) => {
    const nuevo ={
        isUpdate: true,
        nombre: '',
        imagen: '',
        ataque: 50,
        defensa: 50,
        id: 0
    };

    return(
        <div className="App-Content-Right">
            <button type="button" className="App-Button" onClick={() => handleNewData(nuevo)}>Nuevo</button>
        </div>
    );
};

export default ButtonNew;