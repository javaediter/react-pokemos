import React, { useState } from "react";
import Table from "./Table";
import Form from "./Form";
import ButtonNew from "./ButtonNew";

const Container = ({ pokemons, reloadData }) => {
    const [pokemonSelected, setPokemonSelected] = useState({});

    return(
        <div className="App-Container">
            <ButtonNew handleNewData={setPokemonSelected} />        
            
            <Table pokemons={pokemons} selectPokemon={setPokemonSelected} reloadData={reloadData} />
        
            <Form pokemonSelected={pokemonSelected} reloadData={reloadData} />
        </div>
    );
};

export default Container;