import "../App.css";
import React, { useEffect, useState } from "react";

const Table = ({ pokemons, selectPokemon, deletePokemon }) => {
    const [list, setList] = useState([]);

    const search = async (value) => {
        if(!value || value === ''){
            setList(pokemons);
        }else{
            let searched = pokemons.filter(o => o.nombre.toLowerCase().includes(value.toLowerCase()));
            setList(searched);
        }        
    }

    useEffect(() => {
        setList(pokemons);        
    }, [pokemons]);

    return (
        <div className="App-Text-4">
            <label className="App-Text-3">Listado de Pokemos</label>
            <div className="App-Content-Left">                
                <input type="text" placeholder="Buscar" className="App-Input App-Border" onKeyUp={(e) => search(e.target.value)}/>
            </div>
            <table className="App-Border App-Table">
                <thead className="App-Text-2">
                    <tr>
                        <th>Nombre</th>
                        <th>Imagen</th>
                        <th>Ataque</th>
                        <th>Defensa</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((o, index) => {
                            o.isUpdate = true;
                            return (
                            <tr key={index}>
                                <td>{o.nombre}</td>
                                <td className="App-Center">
                                    <img src={o.imagen} alt="" />
                                </td>
                                <td>{o.ataque}</td>
                                <td>{o.defensa}</td>
                                <td className="App-Center">
                                    <button className="App-Button-Action" type="button" onClick={() => selectPokemon(o)}>
                                        <img src={require('../images/edit.png')} alt="" width="21px" height="24px" />
                                    </button>
                                    <button className="App-Button-Action" type="button" onClick={() => deletePokemon(o.nombre)}>
                                    <img src={require('../images/delete.png')} alt="" width="21px" height="24px" />
                                    </button>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;