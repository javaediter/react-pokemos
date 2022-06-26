import React from "react";
import Table from "./Table";
import Form from "./Form";
import ButtonNew from "./ButtonNew";

const Container = ({ handleNewData, pokemons, selectPokemon, deletePokemon, disabledButtonGuardar, pokemonSelected, savePokemon }) => {

    return(
        <div className="App-Container">
            <ButtonNew handleNewData={handleNewData} />        
            
            <Table pokemons={pokemons} selectPokemon={selectPokemon} deletePokemon={deletePokemon} />
        
            <Form disabledButtonGuardar={disabledButtonGuardar} pokemonSelected={pokemonSelected} savePokemon={savePokemon} />
        </div>
    );
};

export default Container;