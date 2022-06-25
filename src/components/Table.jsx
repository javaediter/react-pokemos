import "../App.css";
import React, { useEffect, useState } from "react";
import pokemonService from "../services/pokemonService";
import Row from "./Row";

const Table = ({ pokemons, selectPokemon, deletePokemon }) => {
    const [list, setList] = useState([]);

    const search = async (value) => {
        
        pokemonService.buscarPokemons(value)
        .then(response => response.json())
        .then(data => setList(data));
        

        /*
        let listaFiltrada = pokemons.filter(o => o.nombre.toLowerCase().includes(value.toLowerCase()));
        setList(listaFiltrada);
        */
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
                        list.map(o => {
                            o.isUpdate = true;
                            return (<Row data={o} select={selectPokemon} quit={deletePokemon} />)
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;