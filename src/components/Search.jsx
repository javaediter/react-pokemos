import React from "react";
import pokemonService from "../services/pokemonService";

const Search = ({ handleList }) => {

    const search = async (value) => {        
        pokemonService.buscarPokemons(value)
        .then(response => response.json())
        .then(data => handleList(data));     

        /*
        let listaFiltrada = pokemons.filter(o => o.nombre.toLowerCase().includes(value.toLowerCase()));
        handleList(listaFiltrada);
        */
    }

    return(
        <div>
            <label className="App-Text-3">Listado de Pokemos</label>
            <div className="App-Content-Left">                
                <input type="text" placeholder="Buscar" className="App-Input App-Border" onKeyUp={(e) => search(e.target.value)}/>
            </div>
        </div>
    );
};

export default Search;