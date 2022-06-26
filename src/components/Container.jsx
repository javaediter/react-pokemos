import React from "react";
import Table from "./Table";
import Form from "./Form";

const Container = ({ onNewPokemon, pokemons, selectPokemon, deletePokemon, disabledButtonGuardar, pokemonSelected, savePokemon }) => {

    return(
        <div className="App-Container">
            <div className="App-Content-Right">
                <button type="button" className="App-Button" onClick={onNewPokemon}>Nuevo</button>
            </div>        
            
            <Table pokemons={pokemons} selectPokemon={selectPokemon} deletePokemon={deletePokemon} />
        
            <Form disabledButtonGuardar={disabledButtonGuardar} pokemonSelected={pokemonSelected} savePokemon={savePokemon} />
        </div>
    );
};

export default Container;