import "../App.css";
import React, { useEffect, useState } from "react";
import Row from "./Row";
import Search from "./Search";
import pokemonService from "../services/pokemonService";

const Table = ({ pokemons, selectPokemon, reloadData }) => {
    const [list, setList] = useState([]);

    const deletePokemon = async (pokemon) => {
        let ok = window.confirm("Desea eliminar el pokemon " + pokemon.nombre);
        if(ok){
            await pokemonService.deletePokemon(pokemon.id);
            await reloadData();
        }        
    }

    useEffect(() => {
        setList(pokemons);        
    }, [pokemons]);

    return (
        <div className="App-Text-4">
            <Search handleList={setList} />
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
                            return (<Row key={o.id} data={o} select={selectPokemon} quit={deletePokemon} />)
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;