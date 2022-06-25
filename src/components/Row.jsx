import React from "react";

const Row = ({ data, select, quit }) => {
    return(
        <tr>
            <td>{data.nombre}</td>
            <td className="App-Center">
                <img className="App-Img" src={require('../images/pokemon.png')} alt={data.imagen} />
            </td>
            <td>{data.ataque}</td>
            <td>{data.defensa}</td>
            <td className="App-Center">
                <button className="App-Button-Action" type="button" onClick={() => select(data)}>
                    <img className="App-Img-Action" src={require('../images/edit.png')} alt="" />
                </button>
                <button className="App-Button-Action" type="button" onClick={() => quit(data)}>
                <img className="App-Img-Action" src={require('../images/delete.png')} alt="" />
                </button>
            </td>
        </tr>
    );
};

export default Row;